import React, { useState } from 'react';
import DelayInput from 'react-native-debounce-input';

import { MoviesList } from '../../components/containers/MoviesList';
import { BaseLayout } from '../../components/layouts/BaseLayout';
import { grey } from '../../constants/UIColors';
import { styles } from './MoviesScreen.styles';

const MoviesScreen = () => {
  const [filter, setFilter] = useState('');

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <BaseLayout style={styles.wrapper}>
      <DelayInput
        style={styles.input}
        placeholder="Filter"
        onChangeText={setFilter}
        placeholderTextColor={grey}
        autoFocus={false}
        minLength={1}
      />
      <MoviesList filter={filter} />
    </BaseLayout>
  );
};

export { MoviesScreen };
