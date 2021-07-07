import { GET_MOVIES, SET_LOADING } from './actionsTypes';
import { MoviesActionType, State } from './moviesReducer.types';

const initialState: State = {
  movies: [],
  isLoading: false,
};

export const moviesReducer = (
  state: State = initialState,
  action: MoviesActionType,
) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
