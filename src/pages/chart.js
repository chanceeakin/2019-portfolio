import React from 'react';
import PropTypes from 'prop-types';
import { Group } from '@vx/group';
import { hierarchy } from 'd3-hierarchy';
import { arc as d3arc } from 'd3-shape';
import { scaleLinear, scaleSqrt, scaleOrdinal } from 'd3-scale';
import { interpolate as d3interpolate } from 'd3-interpolate';
import { Spring, animated } from 'react-spring';
import Partition from '../components/Partition';
import data from '../constants/data';

const width = 600;

const height = 600;
const color = scaleOrdinal().range(['#FE938C', '#E6B89C', '#EAD2AC', '#9CAFB7', '#4281A4']);

export default class Example extends React.Component {
  root = hierarchy(data).sum(d => d.size);

  static propTypes = {
    margin: PropTypes.object,
  };

  arc = d3arc()
    .startAngle(d => Math.max(0, Math.min(2 * Math.PI, this.xScale(d.x0))))
    .endAngle(d => Math.max(0, Math.min(2 * Math.PI, this.xScale(d.x1))))
    .innerRadius(d => Math.max(0, this.yScale(d.y0)))
    .outerRadius(d => Math.max(0, this.yScale(d.y1)));

  xScale = scaleLinear();

  yScale = scaleSqrt();

  constructor() {
    super();
    this.state = { xDomain: [0, 1], xRange: [0, 2 * Math.PI], yDomain: [0, 1], yRange: [0, width / 2] };
    const { xDomain, xRange, yDomain, yRange } = this.state;
    this.xScale.domain(xDomain).range(xRange);
    this.yScale.domain(yDomain).range(yRange);
  }

  handleClick = d => {
    this.setState({ xDomain: [d.x0, d.x1], yDomain: [d.y0, 1], yRange: [d.y0 ? 20 : 0, width / 2] });
  };

  handleUpdate = (t, xd, yd, yr) => {
    this.xScale.domain(xd(t));
    this.yScale.domain(yd(t)).range(yr(t));
  };

  render() {
    const { margin = { top: 0, left: 0, right: 0, bottom: 0 } } = this.props;
    const { xDomain, yDomain, yRange } = this.state;
    if (width < 10) return null;
    const xd = d3interpolate(this.xScale.domain(), xDomain);
    const yd = d3interpolate(this.yScale.domain(), yDomain);
    const yr = d3interpolate(this.yScale.range(), yRange);
    return (
      <svg width={width} height={height}>
        <Partition top={margin.top} left={margin.left} root={this.root}>
          <Spring native reset from={{ t: 0 }} to={{ t: 1 }} onFrame={({ t }) => this.handleUpdate(t, xd, yd, yr)}>
            {({ t }) => (
              <Group top={height / 2} left={width / 2}>
                {this.root.descendants().map((node, i) => (
                  <animated.path
                    className="path"
                    d={t.interpolate(() => this.arc(node))}
                    stroke="rgba(0,0,0,0.5)"
                    strokeWidth="1"
                    fill={color((node.children ? node.data : node.parent.data).name)}
                    fillRule="evenodd"
                    onClick={() => this.handleClick(node)}
                    key={`node-${i}`}
                  />
                ))}
              </Group>
            )}
          </Spring>
        </Partition>
      </svg>
    );
  }
}
