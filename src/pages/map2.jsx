import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { config } from 'react-spring';
import { GradientSteelPurple, GradientPinkRed } from '@vx/gradient';
import { geoMercator } from 'd3-geo';
import { Mercator } from '@vx/geo';
import * as topojson from 'topojson-client';
import topology from '../constants/world.json';
import Wrapper from '../components/atoms/Wrapper';
import Dot from '../components/atoms/Dot';
import './styles.css';
import 'antd/dist/antd.css';

export default class App extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    scale: PropTypes.number,
    events: PropTypes.any,
  };

  static defaultProps = {
    width: 1000,
    height: 800,
    scale: 130,
  };

  state = {
    cities: [
      { name: 'Tokyo', coordinates: [139.6917, 35.6895], population: 37843000 },
      { name: 'Jakarta', coordinates: [106.865, -6.1751], population: 30539000 },
      { name: 'Delhi', coordinates: [77.1025, 28.7041], population: 24998000 },
      { name: 'Manila', coordinates: [120.9842, 14.5995], population: 24123000 },
      { name: 'Seoul', coordinates: [126.978, 37.5665], population: 23480000 },
      { name: 'Shanghai', coordinates: [121.4737, 31.2304], population: 23416000 },
      { name: 'Karachi', coordinates: [67.0099, 24.8615], population: 22123000 },
      { name: 'Beijing', coordinates: [116.4074, 39.9042], population: 21009000 },
      { name: 'New York', coordinates: [-74.0059, 40.7128], population: 20630000 },
      { name: 'Guangzhou', coordinates: [113.2644, 23.1291], population: 20597000 },
      { name: 'Sao Paulo', coordinates: [-46.6333, -23.5505], population: 20365000 },
      { name: 'Mexico City', coordinates: [-99.1332, 19.4326], population: 20063000 },
      { name: 'Mumbai', coordinates: [72.8777, 19.076], population: 17712000 },
      { name: 'Osaka', coordinates: [135.5022, 34.6937], population: 17444000 },
      { name: 'Moscow', coordinates: [37.6173, 55.7558], population: 16170000 },
      { name: 'Dhaka', coordinates: [90.4125, 23.8103], population: 15669000 },
      { name: 'Greater Cairo', coordinates: [31.2357, 30.0444], population: 15600000 },
      { name: 'Los Angeles', coordinates: [-118.2437, 34.0522], population: 15058000 },
      { name: 'Bangkok', coordinates: [100.5018, 13.7563], population: 14998000 },
      { name: 'Kolkata', coordinates: [88.3639, 22.5726], population: 14667000 },
      { name: 'Buenos Aires', coordinates: [-58.3816, -34.6037], population: 14122000 },
      { name: 'Tehran', coordinates: [51.389, 35.6892], population: 13532000 },
      { name: 'Istanbul', coordinates: [28.9784, 41.0082], population: 13287000 },
      { name: 'Lagos', coordinates: [3.3792, 6.5244], population: 13123000 },
      { name: 'Shenzhen', coordinates: [114.0579, 22.5431], population: 12084000 },
      { name: 'Rio de Janeiro', coordinates: [-43.1729, -22.9068], population: 11727000 },
      { name: 'Kinshasa', coordinates: [15.2663, -4.4419], population: 11587000 },
      { name: 'Tianjin', coordinates: [117.3616, 39.3434], population: 10920000 },
      { name: 'Paris', coordinates: [2.3522, 48.8566], population: 10858000 },
      { name: 'Lima', coordinates: [-77.0428, -12.0464], population: 10750000 },
    ],
  };

  projection = () => {
    const { width, height, scale } = this.props;
    return geoMercator()
      .scale(scale)
      .translate([width / 2, height / 2]);
  };

  render() {
    const { width, height, events = false } = this.props;
    // const { cities } = this.state;

    if (width < 10) return <div />;
    const world = topojson.feature(topology, topology.objects.countries);
    const scale = 130;
    const translate = [width / 2, height / 2];

    return (
      <React.Fragment>
        <svg width={width} height={height}>
          <GradientSteelPurple id="geo_mercator_radial" />
          <GradientPinkRed id="cities" />
          <React.Fragment>
            <Mercator
              data={world.features}
              scale={scale}
              translate={translate}
              fill="url(#geo_mercator_radial)"
              projectionFunc={this.projection}
              // onClick={data => event => {
              //   alert(`Clicked: ${data.properties.name} (${data.id})`);
              // }}
            />
            <Wrapper
              className="grid"
              // Arbitrary data, should contain keys, possibly heights, etc.
              data={this.state.cities}
              // Key accessor, instructs grid on how to fet individual keys from the data set
              keys={d => d.name}
              // Can be a fixed value or an individual data accessor
              heights={d => d.height}
              // Number of columns
              columns={3}
              // Space between elements
              margin={20}
              // Removes the possibility to scroll away from a maximized element
              lockScroll
              // Delay when active elements (blown up) are minimized again
              closeDelay={500}
              // Regular react-spring configs
              config={config.slow}
            >
              {(data, active, toggle) => <Dot {...data} active={active} toggle={toggle} />}
            </Wrapper>
            {/* <g className="markers" style={props}>
              {cities.map(city => (
                <GlyphDot
              key={city.coordinates[0] * city.coordinates[1]}
              cx={this.projection()(city.coordinates)[0]}
              cy={this.projection()(city.coordinates)[1]}
              r={city.population / 3000000}
              fill="url(#cities)"
              className="marker"
              style={{
              zIndex: 1000,
              cursor: 'pointer',
              }}
                />
              ))}
            </g> */}
          </React.Fragment>
        </svg>
      </React.Fragment>
    );
  }
}
