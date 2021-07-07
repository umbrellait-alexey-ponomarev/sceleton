import React, { useRef, useMemo } from 'react';
import { useState } from 'react';
import {
  Animated,
  Easing,
  TouchableOpacity,
  Image,
  Text,
  View,
  PanResponder,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { BaseLayout } from '../../components/layouts/BaseLayout';
import { HEADER_HEIGHT } from '../../constants/size';
import { yellow } from '../../constants/UIColors';
import { styles } from './Animation.styles';

const STATUSBAR_HEIGHT = getStatusBarHeight(false);

const AnimationScreen = () => {
  const [animatedStyles, setAnimatedStyles] = useState({});
  const [containerSize, setContainerSize] = useState({
    width: 0,
    height: 0,
  });
  const [warningBorder, setWarningBorder] = useState('transparent');
  const animatedValue = useRef(new Animated.Value(0)).current;
  const animatedValue2 = useRef(new Animated.Value(0)).current;
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useMemo(() => {
    return PanResponder.create({
      onMoveShouldSetPanResponder: () => true,

      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: (evt, state) => {
        const { dx, dy } = state;
        const pageX = evt.nativeEvent.pageX;
        const pageY = evt.nativeEvent.pageY;

        if (
          pageX >= containerSize.width - 20 ||
          pageX <= 20 ||
          pageY >= containerSize.height - 20 ||
          pageY <= 20 + HEADER_HEIGHT + STATUSBAR_HEIGHT
        ) {
          setWarningBorder(yellow);
        } else {
          setWarningBorder('transparent');
        }

        pan.setValue({
          x: dx,
          y: dy,
        });
      },

      onPanResponderRelease: evt => {
        const pageX = evt.nativeEvent.pageX;
        const pageY = evt.nativeEvent.pageY;

        if (
          pageX >= containerSize.width - 20 ||
          pageX <= 20 ||
          pageY >= containerSize.height - 20 ||
          pageY <= 20 + HEADER_HEIGHT + STATUSBAR_HEIGHT
        ) {
          pan.setValue({
            x: 0,
            y: 0,
          });
          setWarningBorder('transparent');
        } else {
          pan.flattenOffset();
        }
      },
    });
  }, [containerSize, pan]);

  const createAnimation = (value: any, duration: number, easing: any) => {
    return Animated.timing(value, {
      toValue: 1,
      duration,
      easing,
      useNativeDriver: true,
    });
  };

  const animateRotate = () => {
    setAnimatedStyles({ transform: [{ rotate, scale: scale2 }] });
    animatedValue.setValue(0);

    Animated.loop(createAnimation(animatedValue, 1000, Easing.linear)).start();
  };

  const animateRotateX = () => {
    setAnimatedStyles({ transform: [{ rotateX }] });
    animatedValue.setValue(0);

    Animated.loop(createAnimation(animatedValue, 1000, Easing.linear)).start();
  };

  const animateRotateAround = () => {
    setAnimatedStyles({ transform: [{ rotate, translateX: -100 }] });
    animatedValue.setValue(0);

    Animated.loop(createAnimation(animatedValue, 1000, Easing.linear)).start();
  };

  const animateRotateScale = () => {
    setAnimatedStyles({ transform: [{ scale }] });
    animatedValue.setValue(0.2);

    Animated.spring(animatedValue, {
      toValue: 1,
      friction: 0.5,
      useNativeDriver: true,
    }).start();
  };

  const animateCross = () => {
    setAnimatedStyles({
      transform: [{ translateY: translateCrossY, translateX: translateCrossX }],
    });
    animatedValue.setValue(0);
    animatedValue2.setValue(0);

    Animated.sequence([
      createAnimation(animatedValue, 1000, Easing.linear),
      createAnimation(animatedValue2, 1000, Easing.linear),
    ]).start();
  };

  const stop = () => {
    animatedValue.stopAnimation();
  };

  const rotate = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const rotateX = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '180deg', '0deg'],
  });

  const scale = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.2, 1.5],
  });

  const scale2 = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 2, 1],
  });

  const translateCrossY = animatedValue.interpolate({
    inputRange: [0, 0.2, 0.4, 0.8, 1],
    outputRange: [0, -170, 0, 170, 70],
  });

  const translateCrossX = animatedValue2.interpolate({
    inputRange: [0, 0.2, 0.4, 0.8, 1],
    outputRange: [0, -100, 0, 100, 0],
  });

  return (
    <BaseLayout>
      <View
        style={styles.container}
        onLayout={evt => {
          setContainerSize(() => ({
            width: evt.nativeEvent.layout.width,
            height: evt.nativeEvent.layout.height,
          }));
        }}>
        <Animated.View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            transform: [{ translateX: pan.x }, { translateY: pan.y }],
            shadowOffset: { width: 20, height: 20 },
            shadowColor: warningBorder,
            shadowOpacity: 2,
            shadowRadius: 10,
            elevation: 2,
            borderRadius: 50,
            width: 120,
            height: 125,
          }}
          {...panResponder.panHandlers}>
          <Animated.View style={[styles.imageWrapp, animatedStyles]}>
            <Image
              style={styles.logo}
              source={require('../../assets/images/spiral.webp')}
              resizeMode="center"
            />
          </Animated.View>
        </Animated.View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={animateRotate}>
          <Text style={styles.buttonText}>Rotate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={animateRotateX}>
          <Text style={styles.buttonText}>RotateX</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={animateRotateScale}>
          <Text style={styles.buttonText}>Spring</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={animateRotateAround}>
          <Text style={styles.buttonText}>Around</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={animateCross}>
          <Text style={styles.buttonText}>Cross</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonStop]}
          onPress={stop}>
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
      </View>
    </BaseLayout>
  );
};

export { AnimationScreen };
