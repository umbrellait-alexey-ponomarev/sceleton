import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FC } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { MovieType } from '../../../../services/api/api.types';
import { styles } from './MoviesListItem.styles';

type Props = {
  movie: MovieType;
};

const MoviesListItem: FC<Props> = ({ movie }) => {
  const navigation = useNavigation();

  const onDetailsPress = () => {
    navigation.navigate('Details', { movie });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={{ uri: movie.multimedia?.src }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.text}>{movie.display_title}</Text>
        <TouchableOpacity style={styles.button} onPress={onDetailsPress}>
          <Text style={styles.buttonText}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { MoviesListItem };
