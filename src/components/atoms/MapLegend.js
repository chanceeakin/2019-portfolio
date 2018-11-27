/* global tw */
import React from 'react';
import styled from 'react-emotion';
import { GlyphDot } from '@vx/glyph';
import { colors } from '../../../tailwind';

const Legend = styled.div`
  ${tw('visible absolute pin-b pin-l padding-8 xs:invisible sm:invisible md:invisible lg:visible')};
  line-height: 0.9em;
  color: #efefef;
  font-size: 10px;
  font-family: arial;
  padding: 10px 10px;
  float: left;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  margin: 5px 5px;
`;

const Title = styled.h3`
  ${tw('text-center text-xl')};
`;

const Text = styled.p`
  ${tw('text-center text-sm')};
`;

const Span = styled.span`
  ${tw('text-center text-sm')};
`;

const MapLegend = () => (
  <Legend>
    <Title>Instructions</Title>
    <Span>
      Click on a
      <svg height={16} width={16}>
        <GlyphDot cx={10} cy={11} r={4} fill={colors['orange-light']} />
      </svg>
      .
    </Span>
    <Text>It'll show you where I've been.</Text>
  </Legend>
);

export default MapLegend;
