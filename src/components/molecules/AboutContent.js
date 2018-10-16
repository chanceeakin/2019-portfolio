/* global tw */
import React from 'react';
import styled from 'react-emotion';
import avatar from '../../images/avatar.jpg';
import { Content, Inner } from '../atoms/styled';

export const Title = styled.h1`
  ${tw('text-4xl lg:text-4xl font-serif text-black mb-8 tracking-wide relative inline-block')};
  }
`;

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

const About = () => (
  <Content speed={0.4} offset={3}>
    <Inner>
      <Title>About</Title>
      <AboutHero>
        <Avatar src={avatar} alt="John Doe" />
        <AboutSub>
          The English language can not fully capture the depth and complexity of my thoughts. So I'm incorporating Emoji
          into my speech to better express myself. Winky face.
        </AboutSub>
      </AboutHero>
      <AboutDesc>
        You know the way you feel when you see a picture of two otters holding hands? That's how you're gonna feel every
        day. My mother cried the day I was born because she knew she’d never be prettier than me. You should make me
        your campaign manager. I was born for politics. I have great hair and I love lying. Captain? The kids want to
        know where Paulie the Pigeon is. I told them he got sucked up into an airplane engine, is that all right?
      </AboutDesc>
    </Inner>
  </Content>
);

export default About;
