/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Content, Hero, BigTitle } from '../atoms/Styled';

const Subtitle = styled.p`
  ${tw('text-2xl lg:text-4xl font-sans text-black mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  :hover {
    cursor: pointer;
  }
`;

const Home = ({ scroll }) => (
  <Content speed={1} offset={0}>
    <Hero>
      <BigTitle>
        Hey, <br /> I'm Chance Eakin.
      </BigTitle>
      <Subtitle onClick={() => scroll(1)}>I build things.</Subtitle>
    </Hero>
  </Content>
);

Home.propTypes = {
  scroll: PropTypes.func.isRequired,
};

export default Home;
