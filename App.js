import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ShoesScreen from './src/screens/ShoesScreen';
import PantsScreen from './src/screens/PantsScreen';
import ShirtsScreen from './src/screens/ShirtsScreen';
import HomeScreen from './src/screens/HomeScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import store from './store';
import Application from './Application';

const App = () => {

  return (
    <Provider store={store}>
      <Application />
    </Provider>
  );
};

export default App;