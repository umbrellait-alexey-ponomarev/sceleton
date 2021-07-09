import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from '../../App';
import { render } from '@testing-library/react-native';
import thunk from 'redux-thunk';

export const renderWithRedux = (
  component,
  { store = createStore(rootReducer, applyMiddleware(thunk)) } = {},
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};
