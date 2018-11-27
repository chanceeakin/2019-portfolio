import React from 'react';
import AboutSvg from '../molecules/AboutSvg';
import AboutContent from '../molecules/AboutContent';

const About = React.memo(() => (
  <React.Fragment>
    <AboutSvg />
    <AboutContent />
  </React.Fragment>
));

export default About;
