/* global tw */
import React from 'react';
import styled from 'react-emotion';
import { Content, Inner } from '../atoms/styled';

export const Title = styled.h1`
  ${tw('text-4xl lg:text-4xl font-serif text-black mb-8 tracking-wide relative inline-block')};
  }
`;

export const ContactText = styled.p`
  ${tw('text-grey-darker font-sans text-xl md:text-2xl lg:text-3xl')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

export const Footer = styled.footer`
  ${tw('text-center text-white absolute pin-b p-6 font-sans text-md lg:text-lg')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Contact = () => (
  <Content speed={0.4} offset={3}>
    <Inner>
      <Title>Get in touch</Title>
      <ContactText>
        Say <a href="mailto:chance.eakin@gmail.com">Hi</a> or find me on{' '}
        <a href="https://www.instagram.com/chanceeakin">Instagram</a>.
      </ContactText>
    </Inner>
    <Footer>&copy; 2018 by Chance Eakin.</Footer>
  </Content>
);

export default Contact;
