import React from 'react';
import { Parallax } from 'react-spring/dist/addons';
import 'typeface-cantata-one';
import 'typeface-open-sans';

import SEO from '../components/molecules/Seo';
import '../styles/global';
import Home from '../components/organisms/Home';
import Projects from '../components/organisms/Projects';
import About from '../components/organisms/About';
import Contact from '../components/organisms/Contact';

class Index extends React.PureComponent {
  scroll = page => {
    this.parallaxRef.scrollTo(page);
  };

  render() {
    return (
      <React.Fragment>
        <SEO />
        {/* eslint-disable-next-line */}
        <Parallax pages={4} ref={ref => (this.parallaxRef = ref)}>
          <Home scroll={this.scroll} />
          <Projects />
          <About />
          <Contact />
        </Parallax>
      </React.Fragment>
    );
  }
}

export default Index;
