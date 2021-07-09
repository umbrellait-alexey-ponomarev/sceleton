import 'react-native';
import React from 'react';

import { MoviesListItem } from '../../src/components/containers/MoviesListItem';
import { movieMock } from '../../jest/mocks';
import { mockedNavigate } from '../../jest/setup';

// Note: test renderer must be required after react-native.
import { fireEvent, render } from '@testing-library/react-native';

describe('MovieListItem', () => {
  it('render MovieListItem', () => {
    const { getByText } = render(<MoviesListItem movie={movieMock} />);

    const filmTitle = getByText(movieMock.display_title);
    expect(filmTitle).not.toBeNull();

    const detailsButton = getByText(/Details/i);
    fireEvent.press(detailsButton);
    expect(mockedNavigate).toBeCalledTimes(1);
  });
});
