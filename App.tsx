import React from 'react';
import { Navigation } from './src/navigation';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import SplashScreen from 'react-native-splash-screen';

import { moviesReducer, toastReducer } from './src/redux';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { black } from './src/constants/UIColors';
import { Toast } from './src/components/elements/Toast';

const rootReducer = combineReducers({
  movies: moviesReducer,
  toast: toastReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }, []);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{ flex: 1, backgroundColor: black }}>
      <Provider store={store}>
        <Navigation />
        <Toast />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
