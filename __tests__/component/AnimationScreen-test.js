import 'react-native';
import React from 'react';
import { AnimationScreen } from '../../src/screens/Animation/AnimationScreen';

// Note: test renderer must be required after react-native.
import { render } from '@testing-library/react-native';

describe('AnimationScreen', () => {
  it('renders AnimationScreen component', () => {
    const { getByText } = render(<AnimationScreen />);

    const buttonRotate = getByText('Rotate');
    const buttonRotateX = getByText('RotateX');
    const buttonSpring = getByText('Spring');
    const buttonAround = getByText('Around');
    const buttonCross = getByText('Cross');
    const buttonStop = getByText('Stop');

    expect([
      buttonRotate,
      buttonRotateX,
      buttonSpring,
      buttonAround,
      buttonCross,
      buttonStop,
    ]).toBeDefined();
  });
});
