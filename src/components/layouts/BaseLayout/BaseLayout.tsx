import React from 'react';
import { View } from 'react-native';

import { styles } from './BaseLayout.styles';

const BaseLayout = ({ children, style }: any) => {
  return <View style={[styles.container, style ? style : '']}>{children}</View>;
};

export { BaseLayout };
