export type ToastType = {
  key: number;
  message?: string;
  autoClose?: boolean;
};

export type ToastActionType = {
  type: string;
  payload: ToastType;
};
