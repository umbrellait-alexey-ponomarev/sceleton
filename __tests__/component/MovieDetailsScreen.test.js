import 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import MovieDetailsScreen from '../../src/screens/MovieDetails/MovieDetailsScreen';

import { store } from '../../App';
import { Linking } from 'react-native';
import { mockedNavigate } from '../../jest/setup';
import { movieMock } from '../../jest/mocks';

// Note: test renderer must be required after react-native.
import { fireEvent, render } from '@testing-library/react-native';

describe('MovieDetailsScreen', () => {
  const component = (
    <Provider store={store}>
      <MovieDetailsScreen movie={movieMock} />
    </Provider>
  );

  it('should be called Linking', () => {
    const { getByText } = render(component);
    const readInBrowserButton = getByText(/Read in browser/i);
    Linking.openURL = jest.fn(() => Promise.reject('some url'));

    fireEvent.press(readInBrowserButton);
    expect(Linking.openURL).toBeCalledTimes(1);
  });

  it('should be called mockedNavigate', () => {
    const { getByText } = render(component);
    const backButton = getByText(/Back/i);

    fireEvent.press(backButton);
    expect(mockedNavigate).toBeCalledTimes(1);
  });
});
