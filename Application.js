import React, { useEffect } from 'react';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { connect } from 'react-redux';

import { fetchItems } from './src/components/actions/cartActions';
import HomeScreen from './src/screens/HomeScreen';
import ShoesScreen from './src/screens/ShoesScreen';
import PantsScreen from './src/screens/PantsScreen';
import ShirtsScreen from './src/screens/ShirtsScreen';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const Application = ({ fetchItems, items }) => {

    useEffect(() => {
        fetchItems();
    }, [])

    if (items.loading) {
        return (
            <Text>Loading...</Text>
        )
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen
                    name="Home"
                    options={{
                        headerTitleAlign: 'center',
                    }}>

                    {props => <HomeScreen {...props} items={items} />}

                </Drawer.Screen>


                <Drawer.Screen
                    name="Shoes"
                    options={{
                        headerTitleAlign: 'center',
                        drawerIcon: () => <MaterialCommunityIcons name="shoe-formal" size={30} color="black" />,
                    }}>

                    {props => <ShoesScreen {...props} items={items} />}

                </Drawer.Screen>


                <Drawer.Screen
                    name="Pants"
                    options={{
                        headerTitleAlign: 'center',
                        drawerIcon: () => <MaterialCommunityIcons name="human-child" size={30} color="black" />,
                    }}>

                    {props => <PantsScreen {...props} items={items} />}

                </Drawer.Screen>

                <Drawer.Screen
                    name="Shirts"
                    options={{
                        headerTitleAlign: 'center',
                        drawerIcon: () => <FontAwesome5 name="tshirt" size={21} color="black" />,
                    }}>

                    {props => <ShirtsScreen {...props} items={items} />}

                </Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

const mapStateToProps = (state) => ({
    items: state.items,
});


export default connect(mapStateToProps, { fetchItems })(Application);