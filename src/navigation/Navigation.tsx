import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import { HomeScreen } from '../screens/Home';
import { AnimationScreen } from '../screens/Animation';
import { black, lightGrey, yellow } from '../constants/UIColors';
import { AboutScreen } from '../screens/About';
import { CustomDrawer } from './components/CustomDrawer';
import { MoviesScreen } from '../screens/Movies';
import { MovieDetailsScreen } from '../screens/MovieDetails';
import { FOOTER_HEIGHT, HEADER_HEIGHT } from '../constants/size';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const stackHeaderStyle: StackNavigationOptions = {
  headerStyle: { backgroundColor: black, height: HEADER_HEIGHT },
  headerTitleStyle: { color: yellow },
  headerTitleAlign: 'center',
};

const Navigation = () => {
  const StackHome = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={stackHeaderStyle}
        />
      </Stack.Navigator>
    );
  };
  const StackMovies = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Movies"
          component={MoviesScreen}
          options={stackHeaderStyle}
        />
      </Stack.Navigator>
    );
  };

  const StackAnimate = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Animate It"
          component={AnimationScreen}
          options={stackHeaderStyle}
        />
      </Stack.Navigator>
    );
  };

  const StackAbout = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={stackHeaderStyle}
        />
      </Stack.Navigator>
    );
  };

  const StackMovieDetails = ({ route: { params } }: any) => {
    const DetailsScreen = () => <MovieDetailsScreen {...params} />;
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={stackHeaderStyle}
        />
      </Stack.Navigator>
    );
  };

  const DrawerHome = () => {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={TabNav} />
        <Drawer.Screen name="About" component={StackAbout} />
        <Drawer.Screen name="Details" component={StackMovieDetails} />
      </Drawer.Navigator>
    );
  };

  const TabNav = () => {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          showLabel: false,
          style: {
            backgroundColor: black,
            height: FOOTER_HEIGHT,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={StackHome}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Icon
                  name="home"
                  size={20}
                  color={focused ? yellow : lightGrey}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Movies"
          component={StackMovies}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Icon
                  name="film"
                  size={18}
                  color={focused ? yellow : lightGrey}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="AnimateIt"
          component={StackAnimate}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Icon
                  name="angle-double-right"
                  size={22}
                  color={focused ? yellow : lightGrey}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <DrawerHome />
    </NavigationContainer>
  );
};

export { Navigation };
