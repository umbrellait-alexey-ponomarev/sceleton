import { ADD_TOAST, REMOVE_TOAST } from './actionsTypes';
import { ToastActionType, ToastType } from './toastTypes';

const queue: ToastType[] = [];

export const toastReducer = (state = queue, action: ToastActionType) => {
  switch (action.type) {
    case ADD_TOAST:
      return [...state, action.payload];
    case REMOVE_TOAST:
      return state.filter(toast => toast.key !== action.payload.key);
    default:
      return state;
  }
};
