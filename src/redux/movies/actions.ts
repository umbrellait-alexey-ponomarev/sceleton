import { API, API_KEY } from '../../../services/api/api';
import { MoviesDataType } from '../../../services/api/api.types';
import { GET_MOVIES, SET_LOADING } from './actionsTypes';
import { MoviesActionType } from './moviesReducer.types';

export const getMovies = (movies: MoviesDataType) => ({
  type: GET_MOVIES,
  payload: movies,
});

export const setMoviesLoading = (isLoading: boolean) => ({
  type: SET_LOADING,
  payload: isLoading,
});

export const getMoviesData =
  (page: number = 0, filter: string = '') =>
  (dispatch: ({}) => MoviesActionType) => {
    dispatch(setMoviesLoading(true));
    API.get(
      `svc/movies/v2/reviews/search.json?query=${filter}&api-key=${API_KEY}=${page}`,
    )
      .then(response => dispatch(getMovies(response.data)))
      .finally(() => dispatch(setMoviesLoading(false)));
  };
