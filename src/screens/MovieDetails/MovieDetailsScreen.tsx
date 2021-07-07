import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, Text, Button, Image, Linking } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';

import { BaseLayout } from '../../components/layouts/BaseLayout';
import { MoviesDataType, MovieType } from '../../../services/api/api.types';
import { styles } from './MovieDetails.styles';

const MovieDetailsScreen = ({ movie }: { movie: MovieType }) => {
  const navigation = useNavigation();
  const link = () => Linking.openURL(movie.link.url);
  return (
    <BaseLayout style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: movie.multimedia.src }}
        resizeMode="cover"
      />
      <ScrollView style={styles.info}>
        <Text style={styles.textTitle}>
          Title:{'  '}
          <Text style={styles.textInfo}>{movie.display_title}</Text>
        </Text>
        <Text style={styles.textTitle}>
          Author of the review:{'  '}{' '}
          <Text style={styles.textInfo}>{movie.byline}</Text>
        </Text>
        <Text style={styles.textTitle}>
          Rating:{'  '} <Text style={styles.textInfo}>{movie.mpaa_rating}</Text>
        </Text>
        <Text style={styles.textTitle}>
          Publication date:{'  '}
          <Text style={styles.textInfo}>
            {moment(movie.publication_date).format('DD MMMM YYYY')}
          </Text>
        </Text>
        <Text style={styles.textTitle}>
          Headline:{'  '} <Text style={styles.textInfo}>{movie.headline}</Text>
        </Text>
        <Text style={styles.textTitle}>
          Short summary:{'  '}
          <Text style={styles.textInfo}>{movie.summary_short}</Text>
        </Text>
      </ScrollView>
      <Button title="Read in browser" onPress={link} />
      <Button title="Back" onPress={() => navigation.goBack()} />
    </BaseLayout>
  );
};

const mapStateToProps = (state: { movies: { movies: MoviesDataType } }) => {
  return {
    movies: state.movies.movies,
  };
};

export default connect(mapStateToProps)(MovieDetailsScreen);
