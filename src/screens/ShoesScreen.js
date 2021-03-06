import React, { useState } from 'react'
import { StyleSheet, View, FlatList, Image, Button, TextInput, ActivityIndicator } from 'react-native';
import { Input, Text } from 'react-native-elements';
import ShoesItem from '../components/ShoesItem';

const ShoesScreen = ({ navigation, items }) => {

    const shoes = items.items.results.filter(item => item.type === 'shoes');

    // console.log(shoes.sizes);

    return (
        <View style={styles.container}>

            <Text h3 style={styles.head}>{shoes.length} Available Shoes</Text>

            <FlatList
                data={shoes.sort((a, b) => a.name.localeCompare(b.name))}
                keyExtractor={(item, index) => item._id}
                renderItem={({ item }) => (
                    <>

                        <ShoesItem item={item} navigation={navigation} />

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

export default ShoesScreen;