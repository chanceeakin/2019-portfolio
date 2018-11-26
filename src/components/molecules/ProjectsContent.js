import React from 'react';
import { Content, Title, Inner, ProjectsWrapper } from '../atoms/styled';
import ProjectCard from '../ProjectCard';
import { colors } from '../../../tailwind';

const Projects = () => (
  <Content speed={1.4} offset={1.2} factor={1}>
    <Inner>
      <Title>Projects</Title>
      <ProjectsWrapper>
        <ProjectCard
          title="Place's I've been"
          link="/map"
          bg={`linear-gradient(to right, ${colors['blue-darkest']} 0%, ${colors['grey-dark']} 100%)`}
        >
          Here are some of the things I've seen and done, rendered with the help of @vx, d3, and react-spring.
        </ProjectCard>
        <ProjectCard
          title="Technologies"
          link="/technologies"
          bg={`linear-gradient(to right, ${colors['blue-darkest']} 0%, ${colors['grey-dark']} 100%)`}
        >
          I find myself using this tech from time to time.
        </ProjectCard>
      </ProjectsWrapper>
    </Inner>
  </Content>
);

export default Projects;
