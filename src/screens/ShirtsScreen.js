import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { StyleSheet, View, FlatList, Image, Button, TextInput, ActivityIndicator } from 'react-native';
import { Input, Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { addToCart } from '../components/actions/cartActions';
import ShirtsItem from '../components/ShirtsItem';

const ShirtsScreen = ({ navigation, items }) => {

    const shirts = items.items.results.filter(item => item.type === 'shirt');


    return (
        <View style={styles.container}>

            <Text h3 style={styles.head}>{shirts.length} Available Shirts</Text>

            <FlatList
                data={shirts.sort((a, b) => a.name.localeCompare(b.name))}
                keyExtractor={(item, index) => item._id}
                renderItem={({ item }) => (
                    <>

                        <ShirtsItem item={item} navigation={navigation} />

                    </>
                )} />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 70,
        width: "100%"
    },
    head: {
        alignSelf: 'center',
    },
    shoeDetails: {
        width: 160,
        height: 140,
    },
    txt: {
        fontSize: 25,
        width: "100%",
    }
});

export default ShirtsScreen;