import React, { FC } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  FlatList,
  View,
} from 'react-native';
import { styles } from './CustomDrawer.styles';
import { Props, routeType } from './CustomDrawer.types';

const routes = [
  {
    id: 1,
    name: 'About',
    route: 'About',
  },
];

const CustomDrawer: FC<Props> = ({ navigation }: Props) => {
  const renderItem = ({ item }: routeType) => {
    return (
      <TouchableOpacity
        style={styles.link}
        onPress={() => {
          navigation.navigate(item.route);
        }}>
        <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList data={routes} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
};

export { CustomDrawer };
