/* global tw */
import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { GlyphDot } from '@vx/glyph';
import { geoMercator } from 'd3-geo';
import { Mercator } from '@vx/geo';
import { LinearGradient } from '@vx/gradient';

import * as topojson from 'topojson-client';
import SEO from '../components/SEO';
import Nav from '../components/Nav';
import topology from '../constants/world.json';
import Modal from '../components/atoms/Modal';
import MapLegend from '../components/atoms/MapLegend';
import { colors } from '../../tailwind';

const MapTitle = styled.text`
  ${tw(
    'text-4xl lg:text-4xl font-sans text-title fill-current text-grey-lighter mb-8 tracking-wide relative inline-block'
  )};
`;

export default class MapComp extends React.Component {
  static propTypes = {
    scale: PropTypes.number,
    location: PropTypes.object.isRequired,
  };

  static defaultProps = {
    scale: 150,
  };

  state = {
    cities: [
      {
        city: 'Austin',
        state: 'TX',
        coordinates: [-97.7431, 30.2672],
        population: 950715,
        blurb: 'I live here now! I also happened to have gone to school here.',
      },
      {
        city: 'Aspen',
        state: 'CO',
        coordinates: [-106.8175, 39.1911],
        population: 7359,
        blurb:
          'In 2013, I joined the Opera Theater Center at Aspen for a summer of singing and hiking. We lived like paupers in ski instructor housing, and I would do it again in a heartbeat. Mostly for the mountains, a little bit for the singing.',
      },
      {
        city: 'Cincinnati',
        state: 'OH',
        coordinates: [-84.512, 39.1031],
        population: 301301,
        blurb:
          'Grad school! The University of Cincinnati is a great school for would be opera singers, as well as people who find themselves writing software. 😏',
      },
      {
        city: 'Miami',
        state: 'FL',
        coordinates: [-80.1918, 25.7617],
        population: 463347,
        blurb:
          "Joined the ranks of Florida Grand Opera's Young Artist program for their 2014-2015 season. Sang in several mainstage productions. It was here I confirmed the fact that I'm a mountain person.",
      },
      {
        city: 'Spoleto',
        state: 'Umbria',
        coordinates: [12.7378, 42.7405],
        population: 38035,
        blurb:
          'In 2010, I had the privilege of spending a summer in this ancient Roman town. We performed a Rossini opera in a theater Rossini himself visited. They had renovated since, luckily.',
      },
      {
        city: 'Brevard',
        state: 'NC',
        coordinates: [-82.7343, 35.2334],
        population: 7890,
        blurb:
          'Spent two summers here when I went to undergrad. Loved the mountains and the rain, and loved singing in some wonderful summer stock opera. Best and worst known for my Pirate King in Pirates of Penzance.',
      },
      {
        city: 'Saratoga Springs',
        state: 'NY',
        coordinates: [-73.7846, 43.0831],
        population: 28027,
        blurb:
          'Spent a summer here in 2012 as a Young Artist at Opera Saratoga. Sang my first role in a Verdi opera: Marullo in Rigoletto.',
      },
    ],
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
