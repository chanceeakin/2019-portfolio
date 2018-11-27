import React from 'react';
import ProjectContent from '../molecules/ProjectsContent';
import ProjectsSvgBottom from '../molecules/ProjectsSvgBottom';

const Projects = React.memo(() => (
  <React.Fragment>
    <ProjectContent />
    <ProjectsSvgBottom />
  </React.Fragment>
));

export default Projects;
