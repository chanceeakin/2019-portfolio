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
  ${tw('text-grey-darkest pt-12 lg:pt-0 lg:pl-12 text-2xl font-serif lg:text-3xl xl:text-4xl')};
`;

export const AboutDesc = styled.p`
  ${tw('text-grey-darkest text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify')};
`;

const About = React.memo(() => (
  <Content speed={0.4} offset={2.2}>
    <Inner>
      <Title>About</Title>
      <AboutHero>
        <Avatar src={avatar} alt="John Doe" />
        <AboutSub>I'm a software engineer based out of Austin, Texas, and I'm also an opera singer!</AboutSub>
      </AboutHero>
      <AboutDesc>
        Most of my time is spent building react applications and pretty data visualizations, but my time professionally
        singing taught me that over specialization is a sub optimal approach to life. So I learn something new as often
        as possible.
      </AboutDesc>
      <AboutDesc>
        In my spare time, I build things with Golang and dabble in computer vision. Also doing some open source work
        with regard to animations and React.
      </AboutDesc>
      <AboutDesc>
        Aside from software and singing, I'm a sixth generation Texan who loves BBQ and woodworking. When I'm not
        actively coding, I'm helping my folks remodel our farmhouse and perfecting how I smoke a brisket...or building
        new things out of oak or walnut.
      </AboutDesc>
      <AboutDesc>
        I live with my awesome wife in Austin, and this site was built from a few of the things I know already--and
        several things I learned for the occasion.
      </AboutDesc>
    </Inner>
  </Content>
));

export default About;
