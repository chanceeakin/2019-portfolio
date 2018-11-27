/* global tw */
import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { Group } from '@vx/group';
import { hierarchy } from 'd3-hierarchy';
import { arc as d3arc } from 'd3-shape';
import { scaleLinear, scaleSqrt, scaleOrdinal } from 'd3-scale';
import { interpolate as d3interpolate } from 'd3-interpolate';
import { LinearGradient } from '@vx/gradient';
import { Spring, animated } from 'react-spring';
import { Popper } from 'react-popper';

import Partition from '../atoms/Partition';
import data from '../../constants/technologies';
import { colors } from '../../../tailwind';

const PopperDiv = styled.div`
  ${tw('bg-white text-center font-sans p-2 rounded-sm')};
`;

const color = scaleOrdinal().range([
  colors['teal-dark'],
  colors.teal,
  colors['teal-light'],
  colors['teal-lighter'],
  colors['teal-lightest'],
]);

export default class Example extends React.PureComponent {
  root = hierarchy(data).sum(d => d.size);

  static propTypes = {
    setActiveNode: PropTypes.func.isRequired,
    margin: PropTypes.object,
    width: PropTypes.number,
    height: PropTypes.number,
  };

  static defaultProps = {
    width: 600,
    height: 600,
    margin: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
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
    this.state = {
      xDomain: [0, 1],
      xRange: [0, 2 * Math.PI],
      yDomain: [0, 1],
      yRange: [0, 600 / 2],
      hoveredNode: {},
      anchorEl: {},
    };
    const { xDomain, xRange, yDomain, yRange } = this.state;
    this.xScale.domain(xDomain).range(xRange);
    this.yScale.domain(yDomain).range(yRange);
  }

  componentDidMount() {
    const { setActiveNode } = this.props;
    setActiveNode(this.root.descendants()[0]);
  }

  handleMouseOver = (e, node) => {
    this.setState({
      anchorEl: e.currentTarget,
      hoveredNode: node,
    });
  };

  handleClick = d => {
    this.props.setActiveNode(d);
    this.setState({ xDomain: [d.x0, d.x1], yDomain: [d.y0, 1], yRange: [d.y0 ? 20 : 0, this.props.width / 2] });
  };

  handleUpdate = (t, xd, yd, yr) => {
    this.xScale.domain(xd(t));
    this.yScale.domain(yd(t)).range(yr(t));
  };

  render() {
    const { width, height, margin } = this.props;
    const { xDomain, yDomain, yRange, anchorEl, hoveredNode } = this.state;
    if (width < 10) return null;
    const xd = d3interpolate(this.xScale.domain(), xDomain);
    const yd = d3interpolate(this.yScale.domain(), yDomain);
    const yr = d3interpolate(this.yScale.range(), yRange);
    return (
      <React.Fragment>
        <svg width={width + 10} height={height + 10} style={{ cursor: 'pointer', alignSelf: 'center' }}>
          <LinearGradient from={colors['orange-lighter']} to={colors['teal-light']} id="gradient" />
          <rect height={height + 10} width={width + 10} rx=".5rem" fill="url(#gradient)" />
          <Partition top={margin.top + 5} left={margin.left + 5} root={this.root}>
            <Spring native reset from={{ t: 0 }} to={{ t: 1 }} onFrame={({ t }) => this.handleUpdate(t, xd, yd, yr)}>
              {({ t }) => (
                <Group top={height / 2} left={width / 2}>
                  {this.root.descendants().map((node, i) => (
                    <animated.path
                      className="path"
                      d={t.interpolate(() => this.arc(node))}
                      stroke="rgba(0,0,0,0.5)"
                      strokeWidth="0.4"
                      fill={color((node.children ? node.data : node.parent.data).name)}
                      fillRule="evenodd"
                      onClick={() => this.handleClick(node)}
                      key={`node-${i}`}
                      onMouseOver={e => this.handleMouseOver(e, node)}
                      onFocus={e => this.handleMouseOver(e, node)}
                      aria-label={node.data.name}
                    />
                  ))}
                </Group>
              )}
            </Spring>
          </Partition>
        </svg>
        <Popper position="fixed" referenceElement={anchorEl} placement="top">
          {({ ref, style, placement, arrowProps }) => (
            <div ref={ref} style={style} data-placement={placement}>
              <PopperDiv>
                {hoveredNode.data ? hoveredNode.data.name : ''}
                <div
                  ref={arrowProps.ref}
                  style={{
                    ...arrowProps.style,
                  }}
                />
              </PopperDiv>
            </div>
          )}
        </Popper>
      </React.Fragment>
    );
  }
}
