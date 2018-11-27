/* global tw */
import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { GlyphDot } from '@vx/glyph';
import { geoMercator } from 'd3-geo';
import { Mercator } from '@vx/geo';
import { LinearGradient } from '@vx/gradient';

import * as topojson from 'topojson-client';
import SEO from '../components/molecules/Seo';
import Nav from '../components/molecules/Nav';
import topology from '../constants/world.json';
import Modal from '../components/atoms/Modal';
import MapLegend from '../components/atoms/MapLegend';
import { colors } from '../../tailwind';
import data from '../constants/map';

const MapTitle = styled.text`
  ${tw(
    'text-4xl lg:text-4xl font-sans text-title fill-current text-grey-lighter mb-8 tracking-wide relative inline-block'
  )};
`;

export default class MapComp extends React.PureComponent {
  static propTypes = {
    scale: PropTypes.number,
    location: PropTypes.object.isRequired,
  };

  static defaultProps = {
    scale: 150,
  };

  state = {
    cities: data,
    isOpen: false,
    selectedCity: {
      city: ' ',
      state: '',
      coordinates: [0, 0],
      population: 0,
    },
    width: 600,
    height: 400,
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

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
    const { width, height } = this.state;
    return geoMercator()
      .scale(scale)
      .translate([width / 2, height / 2]);
  };

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  render() {
    const { location, scale } = this.props;
    const { cities, isOpen, selectedCity, width, height } = this.state;

    if (width < 10) return <div />;
    const world = topojson.feature(topology, topology.objects.countries);
    const translate = [width / 2, height / 2];

    // #F1EDEE #3D5467 #8AA29E #686963 #DB5461
    // #c83d32 #62a1a9 	#99af5d #e6b740 #2b595a #c99868

    return (
      <React.Fragment>
        <SEO />
        <Nav location={location} />
        <svg width={width} height={height}>
          <LinearGradient from={colors['grey-light']} to={colors['teal-darkest']} id="gradient" />
          <rect height={height} width={width} fill="url(#gradient)" />
          <React.Fragment>
            <Mercator
              data={world.features}
              scale={scale}
              translate={translate}
              fill={colors['grey-darkest']}
              projectionFunc={this.projection}
            />
            {cities.map(city => (
              <GlyphDot
                key={city.coordinates[0] * city.coordinates[1]}
                cx={this.projection()(city.coordinates)[0]}
                cy={this.projection()(city.coordinates)[1]}
                r={city.population / 100000 > 5 ? city.population / 100000 : 5}
                fill={colors['orange-light']}
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
        <MapLegend />
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
