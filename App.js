import React from 'react';
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

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
                headerTitleAlign: 'center'
                }} />
        <Drawer.Screen 
          name="Shoes" 
          component={ShoesScreen} 
          options={{
              drawerIcon: () => <MaterialCommunityIcons name="shoe-formal" size={30} color="black" />,
              headerTitleAlign: 'center'
              }} />
        <Drawer.Screen 
          name="Pants" 
          component={PantsScreen}
          options={{
                drawerIcon: () => <MaterialCommunityIcons name="human-child" size={30} color="black" />,
                headerTitleAlign: 'center'
                }} />
                
        <Drawer.Screen 
          name="Shirts" 
          component={ShirtsScreen}
          options={{
                drawerIcon: () => <FontAwesome5 name="tshirt" size={21} color="black" />,
                headerTitleAlign: 'center' 
                }} />
                
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
 
});
 export default App;