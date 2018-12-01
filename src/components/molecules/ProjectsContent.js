import React from 'react';
import { Content, Title, Inner, ProjectsWrapper } from '../atoms/Styled';
import ProjectCard from '../atoms/ProjectCard';

const Projects = () => (
  <Content speed={1.4} offset={1} factor={1}>
    <Inner>
      <Title>Projects</Title>
      <ProjectsWrapper>
        <ProjectCard title="Place's I've been" link="/map">
          Here are some of the things I've seen and done, rendered with the help of @vx, d3, and react-spring.
        </ProjectCard>
        <ProjectCard title="Technologies" link="/technologies">
          I find myself using this tech from time to time.
        </ProjectCard>
      </ProjectsWrapper>
    </Inner>
  </Content>
);

export default Projects;
