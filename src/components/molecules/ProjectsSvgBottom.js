import React from 'react';

import { hidden } from '../../styles/utils';
import { colors } from '../../../tailwind';
import SVG from '../atoms/Svg';
import { UpDown, UpDownWide } from '../../styles/animations';
import { Divider } from '../atoms/Styled';

const Projects = () => (
  <React.Fragment>
    <Divider speed={0.8} offset={0.7} factor={2}>
      <UpDown>
        <SVG icon="hexa" width={6} stroke={colors.grey} left="85%" top="75%" />
        <SVG icon="hexa" width={8} stroke={colors['blue-dark']} left="70%" top="20%" />
        <SVG icon="hexa" className={hidden} width={24} stroke={colors['grey-lighter']} left="17%" top="60%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="hexa" width={12} stroke={colors['blue-darker']} left="90%" top="30%" />
        <SVG icon="hexa" className={hidden} width={16} stroke={colors.grey} left="18%" top="75%" />
        <SVG icon="hexa" width={6} stroke={colors['blue-dark']} left="75%" top="10%" />
        <SVG icon="hexa" className={hidden} width={8} stroke={colors['grey-darker']} left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="hexa" width={6} stroke={colors['blue-darker']} left="4%" top="20%" />
      <SVG icon="hexa" width={12} stroke={colors.grey} left="80%" top="60%" />
      <SVG icon="hexa" width={16} stroke={colors['grey-dark']} left="75%" top="30%" />
      <SVG icon="hexa" width={8} stroke={colors['grey-lighter']} left="80%" top="70%" />
    </Divider>
    <Divider speed={1.1} offset={1} factor={2}>
      <UpDown>
        <SVG icon="hexa" width={6} stroke={colors.grey} left="85%" top="75%" />
        <SVG icon="hexa" width={8} stroke={colors['blue-dark']} left="70%" top="20%" />
        <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
        <SVG icon="hexa" className={hidden} width={24} stroke={colors['grey-lighter']} left="17%" top="60%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="hexa" className={hidden} width={16} stroke={colors['blue-darkest']} left="20%" top="90%" />
        <SVG icon="hexa" width={12} stroke={colors['blue-darker']} left="90%" top="30%" />
        <SVG icon="hexa" width={16} stroke={colors['grey-dark']} left="70%" top="90%" />
        <SVG icon="hexa" className={hidden} width={16} stroke={colors.grey} left="18%" top="75%" />
        <SVG icon="hexa" width={6} stroke={colors['blue-dark']} left="75%" top="10%" />
        <SVG icon="hexa" className={hidden} width={8} stroke={colors['grey-darker']} left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="hexa" width={6} stroke={colors['blue-darker']} left="4%" top="20%" />
      <SVG icon="hexa" width={12} stroke={colors.grey} left="80%" top="60%" />
      <SVG icon="hexa" width={6} stroke={colors.white} left="10%" top="10%" />
      <SVG icon="hexa" width={12} stroke={colors['grey-lightest']} left="29%" top="26%" />
      <SVG icon="hexa" width={16} stroke={colors['grey-dark']} left="75%" top="30%" />
      <SVG icon="hexa" width={8} stroke={colors['grey-lighter']} left="80%" top="70%" />
    </Divider>
  </React.Fragment>
);

export default Projects;
