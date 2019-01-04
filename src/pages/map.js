/* global tw */
import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { GlyphDot } from '@vx/glyph';
import { geoMercator } from 'd3-geo';
import { Mercator } from '@vx/geo';
import { LinearGradient } from '@vx/gradient';
import { withScreenSize } from '@vx/responsive';

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
    'text-4xl lg:text-4xl font-serif text-title fill-current text-grey-lighter mb-8 tracking-wide relative inline-block'
  )};
`;

const NoMapContainer = styled.div`
  ${tw('flex items-center justify-between')};
`;

const NoMapTitle = styled.h1`
  ${tw('text-xl font-serif text-center text-title fill-current text-black mb-8')};
`;

class MapComp extends React.PureComponent {
  static propTypes = {
    location: PropTypes.object.isRequired,
    screenWidth: PropTypes.number.isRequired,
    screenHeight: PropTypes.number.isRequired,
  };

  state = {
    scale: 150,
    cities: data,
    isOpen: false,
    selectedCity: {
      city: ' ',
      state: '',
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
    const { scale } = this.state;
    const { screenWidth, screenHeight } = this.props;
    return geoMercator()
      .scale(scale)
      .translate([screenWidth / 2, screenHeight / 2]);
  };

  render() {
    const { location, screenHeight, screenWidth } = this.props;
    const { cities, scale, isOpen, selectedCity } = this.state;

    if (screenWidth < 600)
      return (
        <NoMapContainer>
          <NoMapTitle>This content best viewed on larger screens.</NoMapTitle>
        </NoMapContainer>
      );
    const world = topojson.feature(topology, topology.objects.countries);
    const translate = [screenWidth / 2, screenHeight / 2];

    // #F1EDEE #3D5467 #8AA29E #686963 #DB5461
    // #c83d32 #62a1a9 	#99af5d #e6b740 #2b595a #c99868

    return (
      <React.Fragment>
        <SEO />
        <Nav location={location} />
        <svg width={screenWidth} height={screenHeight}>
          <LinearGradient from={colors['grey-light']} to={colors['teal-darkest']} id="gradient" />
          <rect height={screenHeight} width={screenWidth} fill="url(#gradient)" />
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
          <MapTitle
            x={screenWidth / 2}
            y={screenHeight * 0.9}
            width={screenWidth}
            verticalAnchor="start"
            textAnchor="middle"
          >
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

export default withScreenSize(MapComp);
