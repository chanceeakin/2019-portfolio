/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Wrapper = styled.nav`
  width: 100%;
  ${tw('flex items-center justify-between flex-wrap p-6')};
`;

const Title = styled.div`
  ${tw('flex items-center flex-no-shrink text-black mr-6')};
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
  ${tw('block mt-4 lg:inline-block lg:mt-0 text-black hover:text-grey-dark no-underline mr-4')};
  cursor: pointer;
`;

const NavBar = ({ scroll }) => (
  <Wrapper>
    <Title onClick={() => scroll(0)}>
      <Span>Chance Eakin</Span>
    </Title>
    <NavLinks>
      <LinkDiv>
        <LinkEl onClick={() => scroll(1.6)}>Projects</LinkEl>
        <LinkEl onClick={() => scroll(3.1)}>About</LinkEl>
        <LinkEl onClick={() => scroll(4.5)}>Contact</LinkEl>
      </LinkDiv>
    </NavLinks>
  </Wrapper>
);

export default NavBar;

NavBar.propTypes = {
  scroll: PropTypes.func.isRequired,
};
