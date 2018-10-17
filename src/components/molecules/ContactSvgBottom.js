import React from 'react';
import { hidden } from '../../styles/utils';
import { colors } from '../../../tailwind';
import SVG from '../SVG';

import { UpDown, UpDownWide } from '../../styles/animations';
import { Divider } from '../atoms/styled';

const Contact = () => (
  <Divider speed={0.1} offset={3}>
    <UpDown>
      <SVG icon="hexa" className={hidden} width={8} stroke={colors['grey-darkest']} left="70%" top="20%" />
      <SVG icon="hexa" width={8} stroke={colors['blue-darkest']} left="25%" top="5%" />
    </UpDown>
    <UpDownWide>
      <SVG icon="hexa" width={12} stroke={colors['blue-darkest']} left="95%" top="50%" />
      <SVG icon="hexa" width={6} stroke={colors['grey-darkest']} left="85%" top="15%" />
      <SVG icon="hexa" className={hidden} width={8} stroke={colors['grey-darkest']} left="45%" top="10%" />
    </UpDownWide>
    <SVG icon="hexa" width={6} stroke={colors.grey} left="4%" top="20%" />
    <SVG icon="hexa" width={12} stroke={colors['grey-darkest']} left="70%" top="60%" />
    <SVG icon="hexa" width={12} stroke={colors['grey-dark']} left="20%" top="30%" />
    <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
  </Divider>
);

export default Contact;
