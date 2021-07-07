import React, { FC } from 'react';
import { Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BaseLayout } from '../../components/layouts/BaseLayout';
import { yellow } from '../../constants/UIColors';

import { styles } from './AboutScreen.styles';
import { Props } from './AboutScreen.types';

const AboutScreen: FC<Props> = ({ navigation: { goBack } }) => {
  return (
    <BaseLayout>
      <Text style={styles.Text}>AboutScreen</Text>
      <Icon name="star" size={30} color={yellow} />
      <Button title="GoBack" onPress={goBack} />
    </BaseLayout>
  );
};

export { AboutScreen };
