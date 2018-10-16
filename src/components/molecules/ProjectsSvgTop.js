import React from 'react';
import { colors } from '../../../tailwind';

import { DividerMiddle } from '../atoms/styled';

const Projects = () => (
  <DividerMiddle
    bg={`linear-gradient(to right, ${colors['blue-darkest']} 0%, ${colors['grey-dark']} 100%)`}
    speed={0.2}
    offset={1.1}
    factor={2}
  />
);

export default Projects;
