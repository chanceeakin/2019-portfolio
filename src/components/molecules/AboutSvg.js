import React from 'react';

import { hidden } from '../../styles/utils';
import { colors } from '../../../tailwind';
import SVG from '../atoms/Svg';
import { UpDown, UpDownWide } from '../../styles/animations';
import { Divider } from '../atoms/Styled';

const About = () => (
  <React.Fragment>
    <Divider speed={1.1} offset={1.7} factor={2}>
      <UpDown>
        <SVG icon="hexa" className={hidden} width={6} stroke={colors.grey} left="50%" top="75%" />
        <SVG icon="hexa" className={hidden} width={8} stroke={colors['grey-darkest']} left="70%" top="20%" />
        <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
        <SVG icon="hexa" className={hidden} width={24} stroke={colors['grey-dark']} left="80%" top="80%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="hexa" className={hidden} width={16} stroke={colors['blue-dark']} left="5%" top="80%" />
        <SVG icon="hexa" width={12} stroke={colors['grey-lighter']} left="95%" top="50%" />
        <SVG icon="hexa" width={6} stroke={colors['blue-darkest']} left="85%" top="15%" />
        <SVG icon="hexa" className={hidden} width={8} stroke={colors['grey-darkest']} left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="hexa" width={6} stroke={colors.white} left="4%" top="20%" />
      <SVG icon="hexa" width={12} stroke={colors['grey-darkest']} left="70%" top="60%" />
      <SVG icon="hexa" width={6} stroke={colors['blue-darker']} left="10%" top="10%" />
      <SVG icon="hexa" width={12} stroke={colors['grey-darkest']} left="20%" top="30%" />
      <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
    </Divider>
    <Divider speed={0.7} offset={2} factor={1.5}>
      <UpDown>
        <SVG icon="hexa" className={hidden} width={6} stroke={colors.grey} left="50%" top="75%" />
        <SVG icon="hexa" className={hidden} width={8} stroke={colors['grey-darkest']} left="70%" top="20%" />
        <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
        <SVG icon="hexa" className={hidden} width={24} stroke={colors['grey-dark']} left="80%" top="80%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="hexa" className={hidden} width={16} stroke={colors['blue-dark']} left="5%" top="80%" />
        <SVG icon="hexa" width={12} stroke={colors['grey-lighter']} left="95%" top="50%" />
        <SVG icon="hexa" width={6} stroke={colors['blue-darkest']} left="85%" top="15%" />
        <SVG icon="hexa" className={hidden} width={8} stroke={colors['grey-darkest']} left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="hexa" width={6} stroke={colors.white} left="4%" top="20%" />
      <SVG icon="hexa" width={12} stroke={colors['grey-darkest']} left="70%" top="60%" />
      <SVG icon="hexa" width={6} stroke={colors['blue-darker']} left="10%" top="10%" />
      <SVG icon="hexa" width={12} stroke={colors['grey-darkest']} left="20%" top="30%" />
      <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
    </Divider>
  </React.Fragment>
);

export default About;
