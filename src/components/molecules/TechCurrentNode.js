/* global tw */
import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Container = styled.div`
  ${tw('w-1/3 bg-teal self-center rounded-lg p-8 m-8')};
`;

// ugh why won't gatsby support dynamic graphql like...the rest of the internet? I need to bribe somebody. Or send 'em a PR. Bribe it is.
const CurrentNode = ({ currentNode }) => (
  <StaticQuery
    query={graphql`
      query {
        ai: file(relativePath: { eq: "ai.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tech: file(relativePath: { eq: "tech.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        languages: file(relativePath: { eq: "languages.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        d3: file(relativePath: { eq: "d3.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        babel: file(relativePath: { eq: "babel.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        c: file(relativePath: { eq: "c.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        cloud: file(relativePath: { eq: "cloud.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        css: file(relativePath: { eq: "css3.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        databases: file(relativePath: { eq: "databases.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        devops: file(relativePath: { eq: "devops.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        docker: file(relativePath: { eq: "docker.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        flask: file(relativePath: { eq: "flask.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        git: file(relativePath: { eq: "git.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        golang: file(relativePath: { eq: "golang.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        gocv: file(relativePath: { eq: "gocv.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        js: file(relativePath: { eq: "js.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        gorilla: file(relativePath: { eq: "gorilla.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        graphql: file(relativePath: { eq: "graphql.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        kubernetes: file(relativePath: { eq: "kubernetes.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mongoDB: file(relativePath: { eq: "mongoDB.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mysql: file(relativePath: { eq: "mysql.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        nginx: file(relativePath: { eq: "nginx.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        node: file(relativePath: { eq: "node.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        numpy: file(relativePath: { eq: "numpy.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        opencv: file(relativePath: { eq: "opencv.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        postgres: file(relativePath: { eq: "postgres.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        python: file(relativePath: { eq: "python.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        react: file(relativePath: { eq: "react.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        redux: file(relativePath: { eq: "redux.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sass: file(relativePath: { eq: "sass.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        scylla: file(relativePath: { eq: "scylla.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        vx: file(relativePath: { eq: "vx.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        webpack: file(relativePath: { eq: "webpack.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const img = currentNode.data && currentNode.data.image ? data[currentNode.data.image].childImageSharp.fluid : '';
      return (
        <Container>
          {currentNode.data ? (
            <React.Fragment>
              <h1>{currentNode.data.name}</h1>
              {currentNode.data.image ? <Img fluid={img} /> : null}
            </React.Fragment>
          ) : null}
        </Container>
      );
    }}
  />
);

CurrentNode.propTypes = {
  currentNode: PropTypes.object.isRequired,
};

export default CurrentNode;
