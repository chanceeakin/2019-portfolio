/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'react-emotion';

const Wrapper = styled.nav`
  width: 95%;
  ${tw('fixed flex items-center justify-between flex-wrap p-6 bg-grey-lighter')};
  z-index: 5000;
`;

const NonIndexWrapper = styled.nav`
  width: 100%;
  ${tw('flex items-center justify-between flex-wrap p-6 absolute')};
  z-index: 5000;
`;

const Title = styled.div`
  ${tw('flex items-center flex-no-shrink font-serif text-black mr-6 no-underline')};
  cursor: pointer;
`;

const Span = styled.span`
  ${tw('font-semibold text-xl tracking-tight')};
`;

const NavLinks = styled.div`
  ${tw('w-full block flex-grow lg:flex lg:items-center lg:w-auto')};
`;

const LinkDiv = styled.div`
  ${tw('text-sm lg:flex-grow')};
`;

const LinkEl = styled.a`
  ${tw('block mt-4 lg:inline-block lg:mt-0 font-sans text-black hover:text-grey-dark no-underline mr-4')};
  cursor: pointer;
`;

const GatsbyTitle = styled(Link)`
  ${tw('flex items-center flex-no-shrink font-sans text-black mr-6 no-underline')};
  cursor: pointer;
`;

const GatsbyLink = styled(Link)`
  ${tw('block mt-4 lg:inline-block lg:mt-0 font-sans text-black hover:text-grey-dark no-underline mr-4')};
  cursor: pointer;
`;

const NavBar = ({ scroll, location }) => {
  if (location.pathname === '/') {
    return (
      <Wrapper pathname={location.pathname}>
        <React.Fragment>
          <Title onClick={() => scroll(0)}>
            <Span>Chance Eakin</Span>
          </Title>
          <NavLinks>
            <LinkDiv>
              <LinkEl onClick={() => scroll(1.15)}>Projects</LinkEl>
              <LinkEl onClick={() => scroll(2)}>About</LinkEl>
              <LinkEl onClick={() => scroll(3)}>Contact</LinkEl>
              <GatsbyLink to="/map">Map</GatsbyLink>
            </LinkDiv>
          </NavLinks>
        </React.Fragment>
      </Wrapper>
    );
  }
  return (
    <NonIndexWrapper>
      <GatsbyTitle to="/">
        <Span>Chance Eakin</Span>
      </GatsbyTitle>
    </NonIndexWrapper>
  );
};

export default NavBar;

NavBar.propTypes = {
  location: PropTypes.object.isRequired,
  scroll: PropTypes.func,
};
