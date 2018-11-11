// step 3: animation
import React from 'react';
import PropTypes from 'prop-types';
import { GlyphDot } from '@vx/glyph';
import { geoMercator } from 'd3-geo';
import { Mercator } from '@vx/geo';
import { Text } from '@vx/text';
import * as topojson from 'topojson-client';
import topology from '../constants/world.json';
import Modal from '../components/atoms/modal';
import { Title } from '../components/atoms/styled';

export default class MapComp extends React.Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    scale: PropTypes.number,
  };

  static defaultProps = {
    width: window.innerWidth,
    height: window.innerHeight,
    scale: 150,
  };

  state = {
    cities: [
      { city: 'Austin', state: 'Texas', coordinates: [-97.7431, 30.2672], population: 950715 },
      { city: 'Aspen', state: 'Colorado', coordinates: [-106.8175, 39.1911], population: 7359 },
      { city: 'Miami', state: 'Florida', coordinates: [-80.1918, 25.7617], population: 463347 },
      { city: 'Spoleto', state: 'Umbria', coordinates: [12.7378, 42.7405], population: 38035 },
      { city: 'Brevard', state: 'North Carolina', coordinates: [-82.7343, 35.2334], population: 7890 },
    ],
    isOpen: false,
    selectedCity: {
      name: ' ',
      coordinates: [0, 0],
      population: 0,
    },
  };

  toggleOpen = city => {
    this.setState({
      isOpen: true,
      selectedCity: city,
    });
  };

  toggleClose = () => {
    this.setState(
      {
        isOpen: false,
      },
      () => {
        setTimeout(() => {
          this.setState({
            selectedCity: {
              name: ' ',
              coordinates: [0, 0],
              population: 0,
            },
          });
        }, 550);
      }
    );
  };

  projection = () => {
    const { width, height, scale } = this.props;
    return geoMercator()
      .scale(scale)
      .translate([width / 2, height / 2]);
  };

  render() {
    const { width, height, scale } = this.props;
    const { cities, isOpen, selectedCity } = this.state;

    if (width < 10) return <div />;
    const world = topojson.feature(topology, topology.objects.countries);
    const translate = [width / 2, height / 2];

    // #F1EDEE #3D5467 #8AA29E #686963 #DB5461
    // #c83d32 #62a1a9 	#99af5d #e6b740 #2b595a #c99868
    return (
      <React.Fragment>
        <svg width={width} height={height}>
          <rect height={height} width={width} fill="#8AA29E" />
          <React.Fragment>
            <Mercator
              data={world.features}
              scale={scale}
              translate={translate}
              fill="#3D5467"
              projectionFunc={this.projection}
              // onClick={data => event => {
              //   alert(`Clicked: ${data.properties.name} (${data.id})`);
              // }}
            />
            <g className="markers">
              {cities.map(city => (
                <GlyphDot
                  key={city.coordinates[0] * city.coordinates[1]}
                  cx={this.projection()(city.coordinates)[0]}
                  cy={this.projection()(city.coordinates)[1]}
                  r={city.population / 100000 > 5 ? city.population / 100000 : 5}
                  fill="#DB5461"
                  className="marker"
                  style={{
                    zIndex: 1000,
                    cursor: 'pointer',
                  }}
                  onClick={() => this.toggleOpen(city)}
                />
              ))}
            </g>
          </React.Fragment>
          <Text x={width / 2} y={height * 0.9} width={width} verticalAnchor="start" textAnchor="middle">
            Map
          </Text>
        </svg>
        <Modal
          isOpen={isOpen}
          toggleOpen={this.toggleOpen}
          selectedCity={selectedCity}
          toggleClose={this.toggleClose}
        />
      </React.Fragment>
    );
  }
}
