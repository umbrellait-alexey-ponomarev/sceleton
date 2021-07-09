import React from 'react';
import { MoviesScreen } from '../../src/screens/Movies';

import { renderWithRedux } from '../../jest/utils';
import { fireEvent } from '@testing-library/react-native';

describe('MoviesScreen', () => {
  it('should change text in input', () => {
    const { getByPlaceholderText } = renderWithRedux(<MoviesScreen />);
    const input = getByPlaceholderText(/filter/i);

    fireEvent.changeText(input, 'text');
    expect(input.props.value).toEqual('text');
  });
});
