import 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import MovieDetailsScreen from '../MovieDetailsScreen';

import { store } from '../../../../App';
import { Linking } from 'react-native';
import { mockedNavigate } from '../../../../jest/setup';

// Note: test renderer must be required after react-native.
import { cleanup, fireEvent, render } from '@testing-library/react-native';

const movieMock = {
  display_title: 'string',
  mpaa_rating: 'string',
  critics_pick: 1,
  byline: 'string',
  headline: 'string',
  summary_short: 'string',
  publication_date: 'string',
  opening_date: 'string',
  date_updated: 'string',
  link: {
    type: 'string',
    url: 'string',
    suggested_link_text: 'string',
  },
  multimedia: {
    type: 'string',
    src: 'string',
    height: 1,
    width: 1,
  },
};

describe('MovieDetailsScreen', () => {
  afterEach(cleanup);

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
