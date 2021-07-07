import React, { FC, useEffect } from 'react';
import { useState } from 'react';
import {
  FlatList,
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { yellow } from '../../../constants/UIColors';
import { getMoviesData } from '../../../redux/movies/actions';
import { MoviesDataType } from '../../../../services/api/api.types';
import { MoviesListItem } from '../MoviesListItem/MoviesListItem';
import { styles } from './MoviesList.styles';

type Props = {
  movies: MoviesDataType;
  isLoading: boolean;
  filter: string;
};

const MoviesList: FC<Props> = ({ movies, isLoading, filter }) => {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesData(page, filter));
  }, [dispatch, page, filter]);

  const nextPage = () => {
    setPage(prev => prev + 20);
  };

  const prevPage = () => {
    // eslint-disable-next-line curly
    if (page === 0 || page < 1) return;
    setPage(prev => prev - 20);
  };

  const renderItem = ({ item }: any) => {
    return <MoviesListItem movie={item} />;
  };

  const Pagination = () => {
    return movies.results && movies.results.length > 0 ? (
      <View style={styles.pagination}>
        <TouchableOpacity
          style={[styles.button, page === 0 && styles.buttonDisabled]}
          onPress={prevPage}
          disabled={page === 0}>
          <Text style={styles.buttonText}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, !movies.has_more && styles.buttonDisabled]}
          onPress={nextPage}
          disabled={!movies.has_more}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    ) : null;
  };

  return isLoading ? (
    <ActivityIndicator size={'large'} color={yellow} />
  ) : (
    <>
      <FlatList
        data={movies.results}
        renderItem={renderItem}
        keyExtractor={item => item.display_title}
        ListFooterComponent={Pagination}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

const mapStateToProps = (state: {
  movies: { movies: MoviesDataType; isLoading: boolean };
}) => {
  return {
    movies: state.movies.movies,
    isLoading: state.movies.isLoading,
  };
};

export default connect(mapStateToProps)(MoviesList);
