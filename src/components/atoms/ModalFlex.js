/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function ModalFlex({ children }) {
  const [props, set] = useSpring({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } });
  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      {children}
    </animated.div>
  );
}

ModalFlex.propTypes = {
  children: PropTypes.any.isRequired,
  xys: PropTypes.any.isRequired,
};

export default ModalFlex;
