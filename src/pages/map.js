// @flow
/* global tw */
import React from 'react';
import styled from 'react-emotion';
import { GlyphDot } from '@vx/glyph';
import { geoMercator } from 'd3-geo';
import { Mercator } from '@vx/geo';
import { LinearGradient } from '@vx/gradient';
import { LegendThreshold } from '@vx/legend';
import { scaleThreshold } from '@vx/scale';

import * as topojson from 'topojson-client';
import topology from '../constants/world.json';
import Modal from '../components/atoms/modal';

export type City = {
  city: string,
  state: string,
  coordinates: number[],
  population: number,
}

type Props = {
  scale: number,
}

type State = {
  cities: City[],
  isOpen: boolean,
  selectedCity: ?City,
  width: number,
  height: number,
}

const MapTitle = styled.text`
  ${tw('text-4xl lg:text-4xl font-sans text-title fill-current text-grey-lighter mb-8 tracking-wide relative inline-block')};
`

const Legend = styled.div`
  line-height: 0.9em;
  color: #efefef;
  font-size: 10px;
  font-family: arial;
  padding: 10px 10px;
  float: left;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  margin: 5px 5px;
`


const threshold = scaleThreshold({
  domain: [0.02, 0.04, 0.06, 0.08, 0.1],
  range: [
    '#f2f0f7',
    '#dadaeb',
    '#bcbddc',
    '#9e9ac8',
    '#756bb1',
    '#54278f',
  ],
});

export default class MapComp extends React.Component<Props, State>{
  static defaultProps = {
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
      city: ' ',
      state: '',
      coordinates: [0, 0],
      population: 0,
    },
    width: window.innerWidth,
    height: window.innerHeight
  };

  toggleOpen = (city: City) => {
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
              city: ' ',
              state: '',
              coordinates: [0, 0],
              population: 0,
            },
          });
        }, 550);
      }
    );
  };

  projection = () => {
    const { scale } = this.props;
    const {width, height} = this.state
    return geoMercator()
      .scale(scale)
      .translate([width / 2, height / 2]);
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const { scale } = this.props;
    const { cities, isOpen, selectedCity, width, height } = this.state;

    if (width < 10) return <div />;
    const world = topojson.feature(topology, topology.objects.countries);
    const translate = [width / 2, height / 2];

    // #F1EDEE #3D5467 #8AA29E #686963 #DB5461
    // #c83d32 #62a1a9 	#99af5d #e6b740 #2b595a #c99868
    return (
      <React.Fragment>
        <svg width={width} height={height}>
          <LinearGradient
            from='#F1EDEE'
            to='#8AA29E'
            id="gradient"
          />
          <rect height={height} width={width} fill="url(#gradient)" />
          <React.Fragment>
            <Mercator
              data={world.features}
              scale={scale}
              translate={translate}
              fill="#3D5467"
              projectionFunc={this.projection}
            />
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
          </React.Fragment>
          <MapTitle x={width / 2} y={height * 0.9} width={width} verticalAnchor="start" textAnchor="middle">
            Places I've been
          </MapTitle>
        </svg>
          <Legend>
            <LegendThreshold
                scale={threshold}
              direction="column-reverse"
              itemDirection="row-reverse"
              labelMargin="0 20px 0 0"
              shapeMargin="1px 0 0"
            />
          </Legend>
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
