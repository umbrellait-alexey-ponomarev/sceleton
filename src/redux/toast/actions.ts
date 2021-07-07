import { store } from '../../../App';
import { ADD_TOAST, REMOVE_TOAST } from './actionsTypes';
import { ToastType } from './toastTypes';

const DELAY = 2000;

export const addToast = (payload: ToastType) => {
  if (payload.autoClose) {
    const timeout = setTimeout(() => {
      store.dispatch(removeToast(payload.key));
      clearTimeout(timeout);
    }, DELAY);
  }
  store.dispatch({
    type: ADD_TOAST,
    payload,
  });
};

export const removeToast = (key: number) => ({
  type: REMOVE_TOAST,
  payload: { key },
});
