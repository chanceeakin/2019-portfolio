import React from 'react';
import { Parallax } from 'react-spring/dist/addons';
import GithubCorner from 'react-github-corner';

import SEO from '../components/molecules/Seo';
import '../styles/global';
import Home from '../components/organisms/Home';
import Projects from '../components/organisms/Projects';
import About from '../components/organisms/About';
import Contact from '../components/organisms/Contact';
import { colors } from '../../tailwind';

class Index extends React.PureComponent {
  scroll = page => {
    this.parallaxRef.scrollTo(page);
  };

  render() {
    return (
      <React.Fragment>
        <SEO />
        <GithubCorner
          bannerColor={colors['grey-darkest']}
          svgStyle={{ zIndex: 3 }}
          href="https://github.com/chanceeakin"
        />
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
