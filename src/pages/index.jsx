import React from 'react';
import { Parallax } from 'react-spring';
import 'typeface-cantata-one';
import 'typeface-open-sans';

import SEO from '../components/SEO';
import '../styles/global';
import Nav from '../components/Nav';
import Home from '../components/organisms/Home';
import Projects from '../components/organisms/Projects';
import About from '../components/organisms/About';
import Contact from '../components/organisms/Contact';

class Index extends React.Component {
  scroll = page => {
    this.parallaxRef.scrollTo(page);
  };

  render() {
    return (
      <React.Fragment>
        <SEO />
        <Nav scroll={this.scroll} />
        {/* eslint-disable-next-line */}
        <Parallax pages={4} ref={ref => (this.parallaxRef = ref)}>
          <Home />
          <Projects />
          <About />
          <Contact />
        </Parallax>
      </React.Fragment>
    );
  }
}

export default Index;
