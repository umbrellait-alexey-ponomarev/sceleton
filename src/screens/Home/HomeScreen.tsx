import React, { useState } from 'react';
import { Text, Button } from 'react-native';

import { BaseLayout } from '../../components/layouts/BaseLayout';
import { styles } from './HomeScreen.styles';

const HomeScreen = () => {
  const [text, setText] = useState('HomeScreen');

  return (
    <BaseLayout>
      <Text style={styles.Text}>{text}</Text>
      <Button title="button" onPress={() => setText('Home Screen')} />
    </BaseLayout>
  );
};

export { HomeScreen };
