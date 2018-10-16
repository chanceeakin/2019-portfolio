import React from 'react';

import { Content, Hero, BigTitle, Subtitle } from '../atoms/styled';

const Home = () => (
  <Content speed={1} offset={0}>
    <Hero>
      <BigTitle>
        Hey, <br /> I'm Chance Eakin.
      </BigTitle>
      <Subtitle>I build things.</Subtitle>
    </Hero>
  </Content>
);

export default Home;
