import React from 'react';
import { cx } from 'react-emotion';
import { hidden } from '../../styles/utils';
import { colors } from '../../../tailwind';

import { UpDown, UpDownWide, opaqueAnimation } from '../../styles/animations';
import SVG from '../atoms/Svg';
import { Divider } from '../atoms/Styled';

const Home = () => (
  <Divider speed={1} offset={0} bg="#f3f7f9">
    <UpDown>
      <SVG
        icon="hexa"
        className={cx(opaqueAnimation, hidden)}
        width={16}
        stroke={colors['grey-darker']}
        left="70%"
        top="90%"
      />
      <SVG icon="hexa" width={6} stroke={colors['grey-darkest']} left="4%" top="20%" />
      <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="95%" top="90%" />
      <SVG icon="hexa" className={hidden} width={24} stroke={colors['grey-darker']} left="40%" top="80%" />
      <SVG icon="hexa" width={8} stroke={colors['grey-darker']} left="25%" top="5%" />
      <SVG icon="hexa" width={64} stroke={colors['blue-darker']} left="95%" top="5%" />
      <SVG icon="hexa" width={6} stroke={colors['grey-darker']} left="60%" top="15%" />
    </UpDown>
    <UpDownWide>
      <SVG icon="hexa" width={48} stroke={colors.grey} left="60%" top="70%" />
      <SVG icon="hexa" className={hidden} width={16} stroke={colors['blue-dark']} left="80%" top="10%" />
      <SVG icon="hexa" width={12} stroke={colors['blue-darkest']} left="90%" top="50%" />
      <SVG icon="hexa" width={16} stroke={colors['grey-darkest']} left="30%" top="65%" />
      <SVG icon="hexa" width={6} stroke={colors['grey-darkest']} left="75%" top="10%" />
      <SVG icon="hexa" className={hidden} width={8} stroke={colors['grey-darkest']} left="45%" top="10%" />
      <SVG icon="hexa" width={12} stroke={colors['grey-darkest']} left="50%" top="60%" />
    </UpDownWide>
    <SVG icon="hexa" className={hidden} width={24} stroke={colors['grey-darker']} left="5%" top="70%" />
    <SVG icon="hexa" className={hidden} width={64} stroke={colors['blue-darker']} left="5%" top="90%" />
    <SVG icon="hexa" width={6} stroke={colors['grey-darkest']} left="10%" top="10%" />
    <SVG icon="hexa" width={12} stroke={colors['grey-darkest']} left="40%" top="30%" />
    <SVG icon="hexa" width={16} stroke={colors['grey-darker']} left="10%" top="50%" />
    <SVG icon="hexa" width={8} stroke={colors['grey-darker']} left="80%" top="70%" />
  </Divider>
);

export default Home;
