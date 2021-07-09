import React from 'react';
import { Text } from 'react-native';

import { BaseLayout } from '../../components/layouts/BaseLayout';
import { styles } from './HomeScreen.styles';

const HomeScreen = () => {
  return (
    <BaseLayout>
      <Text style={styles.Text}>HomeScreen</Text>
    </BaseLayout>
  );
};

export { HomeScreen };
