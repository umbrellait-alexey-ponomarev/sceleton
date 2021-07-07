import React from 'react';
import { FC, useMemo } from 'react';
import { connect, useDispatch } from 'react-redux';
import { View, Text, FlatList, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ToastType } from '../../../redux/toast/toastTypes';
import { styles } from './Toast.styles';
import { removeToast } from '../../../redux/toast/actions';
import { useCallback } from 'react';
import { black } from '../../../constants/UIColors';

const fadeAnimation = new Animated.Value(0);
const opacityAnimation = new Animated.Value(0);

type Props = {
  queue: ToastType[];
};

const Toast: FC<Props> = ({ queue }): any => {
  const dispatch = useDispatch();

  const closeToast = useCallback((key: number) => {
    dispatch(removeToast(key));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animationToast = useCallback(() => {
    Animated.spring(fadeAnimation, {
      toValue: -94,
      useNativeDriver: true,
    }).start();
    Animated.timing(opacityAnimation, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  }, []);

  const fadeIn = useMemo(() => {
    return {
      transform: [{ translateY: fadeAnimation }],
      opacity: opacityAnimation,
    };
  }, []);

  const renderItem = ({ item }: { item: ToastType }) => {
    const onCloseIconPress = () => {
      closeToast(item.key);
    };

    return (
      <View key={item.key} style={styles.content}>
        <TouchableOpacity style={styles.closeIcon} onPress={onCloseIconPress}>
          <Icon name="times" size={20} color={black} />
        </TouchableOpacity>
        <Text style={styles.text}>{item.message}</Text>
      </View>
    );
  };

  if (queue.length > 0) {
    animationToast();

    return (
      <Animated.View style={[styles.container, fadeIn]}>
        <FlatList data={queue} renderItem={renderItem} />
      </Animated.View>
    );
  } else {
    fadeAnimation.setValue(0);
    opacityAnimation.setValue(0);
    return null;
  }
};

const marStateToProps = (state: { toast: ToastType[] }) => {
  return {
    queue: state.toast,
  };
};

export default connect(marStateToProps)(Toast);
