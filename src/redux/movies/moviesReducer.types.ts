import { MoviesDataType } from '../../../services/api/api.types';
import { ActionType } from '../storeTypes';

export type State = {
  movies: MoviesDataType | [];
  isLoading: boolean;
};

type MoviesPayloadType = {
  payload: MoviesDataType;
};

export type MoviesActionType = ActionType & MoviesPayloadType;
