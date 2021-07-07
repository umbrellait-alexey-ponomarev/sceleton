import 'react-native';
import React from 'react';
import { HomeScreen } from '../HomeScreen';

// Note: test renderer must be required after react-native.
import { fireEvent, render } from '@testing-library/react-native';

describe('HomeScreen', () => {
  it('home screen text', async () => {
    const { getByText } = render(<HomeScreen />);
    const title = getByText(/HomeScreen/i);
    expect(title).toBeDefined();
  });

  it('renders  component', async () => {
    const { getByText } = render(<HomeScreen />);
    const button = getByText(/button/i);
    fireEvent.press(button);
    const newTitle = getByText(/Home Screen/i);
    expect(newTitle).toBeDefined();
  });
});
