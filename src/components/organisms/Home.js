import React from 'react';
import PropTypes from 'prop-types';
import HomeSvg from '../molecules/HomeSvg';
import HomeContent from '../molecules/HomeContent';

const Home = ({ scroll }) => (
  <React.Fragment>
    <HomeSvg />
    <HomeContent scroll={scroll} />
  </React.Fragment>
);

Home.propTypes = {
  scroll: PropTypes.func.isRequired,
};

export default Home;
