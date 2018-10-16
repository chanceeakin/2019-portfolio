import React from 'react';
import { Content, Title, Inner, ProjectsWrapper } from '../atoms/styled';
import ProjectCard from '../ProjectCard';
import { colors } from '../../../tailwind';

const Projects = () => (
  <Content speed={0.4} offset={1.2} factor={2}>
    <Inner>
      <Title>Projects</Title>
      <ProjectsWrapper>
        <ProjectCard
          title="Freiheit"
          link="#"
          bg={`linear-gradient(to right, ${colors['blue-light']} 0%, ${colors['grey-darker']} 100%)`}
        >
          This is a sample project I wrote.
        </ProjectCard>
        <ProjectCard
          title="Harry Potter"
          link="#"
          bg={`linear-gradient(to right, ${colors['blue-light']} 0%, ${colors['grey-darker']} 100%)`}
        >
          This is also a sample project I wrote.
        </ProjectCard>
      </ProjectsWrapper>
    </Inner>
  </Content>
);

export default Projects;
