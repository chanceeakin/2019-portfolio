/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring';
import styled from 'react-emotion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Title } from './styled';

const ModalDiv = styled.div`
  ${tw('relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded')};
`;

const ExitButton = styled.span`
  ${tw('absolute pin-t pin-r p-4')};
  :hover {
    cursor: pointer;
  }
`;

const ModalContent = ({ toggleClose, selectedCity }) => (
  <Spring
    from={{
      transform: 'scale(0.2)',
    }}
    to={{
      transform: 'scale(1)',
    }}
  >
    {props => (
      <ModalDiv style={props}>
        <ExitButton onClick={toggleClose}>
          <FontAwesomeIcon icon={faTimes} />
        </ExitButton>
        <Title>{selectedCity.city}</Title>
      </ModalDiv>
    )}
  </Spring>
);

ModalContent.propTypes = {
  selectedCity: PropTypes.object.isRequired,
  toggleClose: PropTypes.func.isRequired,
};

export default ModalContent;
