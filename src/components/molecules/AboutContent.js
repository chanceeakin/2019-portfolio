/* global tw */
import React from 'react';
import styled from 'react-emotion';
import avatar from '../../images/avatar.jpg';
import { Content, Inner, Title } from '../atoms/Styled';

export const AboutHero = styled.div`
  ${tw('flex flex-col lg:flex-row items-center mt-8')};
`;

export const Avatar = styled.img`
  ${tw('rounded-full w-32 xl:w-48 shadow-lg h-full')};
`;

export const AboutSub = styled.span`
  ${tw('text-grey-darkest pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl')};
`;

export const AboutDesc = styled.p`
  ${tw('text-grey-darkest text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify')};
`;

const About = React.memo(() => (
  <Content speed={0.4} offset={2}>
    <Inner>
      <Title>About</Title>
      <AboutHero>
        <Avatar src={avatar} alt="John Doe" />
        <AboutSub>
          I'm a software engineer based out of Austin, Texas. I wasn't always a software engineer. I spent the first
          parts of my life studying classical music and opera. So much so I hold a doctorate in it! (Hook 'em Horns!)
        </AboutSub>
      </AboutHero>
      <AboutDesc>
        I spend most of my time building staticly rendered react applications with special regard to complex data
        visualization. There are a few fun things of that nature hanging out around this site. This site is also my
        first foray into the Gatsby ecosystem, though it won't be my last!
        <br />I also enjoy building apps in Golang and dabbling in computer vision, as well as contributing to
        open-source when I can.
        <br />
        Aside from sofware and singing, I'm a sixth generation Texan who loves BBQ and woodworking. When I'm not
        actively coding, I'm helping my folks remodel our farmhouse and perfecting how I smoke a brisket.
        <br />I live with my awesome wife in Austin, and this site was built from a few of the things I know.
      </AboutDesc>
    </Inner>
  </Content>
));

export default About;
