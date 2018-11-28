/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import TechnologiesChart from '../components/organisms/TechnologiesChart';
import CurrentNode from '../components/molecules/TechCurrentNode';
import SEO from '../components/molecules/Seo';
import Nav from '../components/molecules/Nav';

const Container = styled.div`
  ${tw('flex flex-row sm:flex-col md:flex-col lg:flex-row content-center justify-center pt-16 pl-8 pr-8')};
`;

export default class Example extends React.PureComponent {
  static propTypes = {
    location: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
  };

  state = {
    currentNode: {},
    dimensions: { width: 600, height: 610 },
  };

  componentDidMount() {
    console.log('Icons designed by Freepik http://freepik.com');
    console.log(
      'Icons made by https://www.flaticon.com/authors/eucalyp from https://www.flaticon.com. Liscensed under Creative Commons BY 3.0'
    );
    window.addEventListener('resize', this.updateDimensions);
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({
      dimensions: document.getElementById('tech-container').getBoundingClientRect(),
    });
  };

  handleClick = d => {
    this.setState({
      currentNode: d,
    });
  };

  render() {
    const { currentNode, dimensions } = this.state;
    const { location, data } = this.props;
    return (
      <React.Fragment>
        <SEO />
        <Nav location={location} />
        <Container id="tech-container">
          <TechnologiesChart
            width={dimensions.width * 0.5}
            height={dimensions.width * 0.5}
            setActiveNode={this.handleClick}
          />
          <CurrentNode currentNode={currentNode} height={dimensions.width * 0.5} data={data} />
        </Container>
      </React.Fragment>
    );
  }
}
