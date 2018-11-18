/* global tw */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-spring';
import styled from 'react-emotion';
import ModalContent from './ModalContent';

const Overlay = styled.div`
  ${tw('fixed pin z-100 overflow-auto bg-smoke-darker flex')};
`;

const Modal = ({ isOpen, selectedCity, toggleClose }) => (
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
    {isOpen =>
      isOpen &&
      (props => (
        <div style={props}>
          <Overlay>
            <ModalContent isOpen={isOpen} selectedCity={selectedCity} toggleClose={toggleClose} />
          </Overlay>
        </div>
      ))
    }
  </Transition>
);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  selectedCity: PropTypes.object.isRequired,
  toggleClose: PropTypes.func.isRequired,
};

export default Modal;
