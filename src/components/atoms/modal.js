/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import { Transition, animated } from 'react-spring';
import styled from 'react-emotion';

const Overlay = styled.div`
  ${tw('fixed pin z-100 overflow-auto bg-smoke-darker flex')};
`;

const ModalDiv = styled.div`
  ${tw('relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded')};
`;

const Modal = ({ isOpen, selectedCity, toggleOpen }) => (
  <Transition
    items={isOpen}
    from={{
      opacity: 0,
    }}
    enter={{
      opacity: 1,
    }}
    leave={{
      opacity: 0,
    }}
  >
    {show =>
      show &&
      (props => (
        <animated.div style={props}>
          <Overlay>
            <ModalDiv onClick={toggleOpen}>
              <h1>{selectedCity.name}</h1>
            </ModalDiv>
          </Overlay>
        </animated.div>
      ))
    }
  </Transition>
);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  selectedCity: PropTypes.object.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};

export default Modal;
