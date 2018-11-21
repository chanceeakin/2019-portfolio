/* global tw */
import React from 'react';
import styled from 'react-emotion';
import TechnologiesChart from '../components/organisms/TechnologiesChart';
import CurrentNode from '../components/molecules/TechCurrentNode';
import SEO from '../components/SEO';

const Container = styled.div`
  ${tw('flex flex-col items-center flex-wrap justify-around')};
`;

export default class Example extends React.Component {
  state = {
    currentNode: {},
  };

  handleClick = d => {
    this.setState({
      currentNode: d,
    });
  };

  render() {
    const { currentNode } = this.state;
    return (
      <React.Fragment>
        <SEO />
        <Container>
          <TechnologiesChart setActiveNode={this.handleClick} />
          <CurrentNode currentNode={currentNode} />
        </Container>
      </React.Fragment>
    );
  }
}
