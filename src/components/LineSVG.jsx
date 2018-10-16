/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Wrapper = styled.svg`
  ${tw('stroke-current absolute')};
  color: ${props => props.stroke};
  width: ${props => props.svgWidth};
  fill: ${props => props.fill};
  left: ${props => props.left};
  top: ${props => props.top};
`;

const LineSVG = ({ stroke, fill, left, top, className, x1, x2, y1, y2, viewBox }) => (
  <Wrapper viewBox={viewBox} stroke={stroke} fill={fill} left={left} top={top} className={className}>
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={stroke} strokeWidth={1} />
  </Wrapper>
);

export default LineSVG;

LineSVG.propTypes = {
  viewBox: PropTypes.string.isRequired,
  x1: PropTypes.number.isRequired,
  x2: PropTypes.number.isRequired,
  y1: PropTypes.number.isRequired,
  y2: PropTypes.number.isRequired,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  left: PropTypes.string,
  top: PropTypes.string,
  className: PropTypes.string,
};

LineSVG.defaultProps = {
  stroke: 'black',
  fill: 'none',
  left: '0%',
  top: '0%',
  className: 'fancy-icon',
};
