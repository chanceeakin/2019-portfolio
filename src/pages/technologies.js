/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import TechnologiesChart from '../components/organisms/TechnologiesChart';
import CurrentNode from '../components/molecules/TechCurrentNode';
import SEO from '../components/SEO';
import Nav from '../components/Nav';

const Container = styled.div`
  ${tw('flex flex-row md:flex-col lg:flex-row content-center justify-center pt-16 pl-8 pr-8')};
`;

export default class Example extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
  };

  state = {
    currentNode: {},
  };

  componentDidMount() {
    console.log('Icons designed by Freepik http://freepik.com');
    console.log(
      'Icons made by https://www.flaticon.com/authors/eucalyp from https://www.flaticon.com. Liscensed under Creative Commons BY 3.0'
    );
  }

  handleClick = d => {
    this.setState({
      currentNode: d,
    });
  };

  render() {
    const { currentNode } = this.state;
    const { location, data } = this.props;
    return (
      <React.Fragment>
        <SEO />
        <Nav location={location} />
        <Container>
          <TechnologiesChart setActiveNode={this.handleClick} />
          <CurrentNode currentNode={currentNode} data={data} />
        </Container>
      </React.Fragment>
    );
  }
}
