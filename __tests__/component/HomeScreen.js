import 'react-native';
import React from 'react';
import { HomeScreen } from '../../src/screens/Home/HomeScreen';

// Note: test renderer must be required after react-native.
import { render } from '@testing-library/react-native';

describe('HomeScreen', () => {
  it('should display HomeScreen text', () => {
    const { getByText } = render(<HomeScreen />);
    const title = getByText(/HomeScreen/i);
    expect(title).toBeDefined();
  });
});
