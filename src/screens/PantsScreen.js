import React, { useEffect, useState } from 'react'
import { StyleSheet, View, FlatList, Image, Button, TextInput, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-elements';
import PantsItem from '../components/PantsItem';

const PantsScreen = ({ navigation, items }) => {
    const [isLoading, setLoading] = useState(true);
    const [pantsData, setPantsData] = useState([]);

    const pants = items.items.results.filter(item => item.type === 'pants');

    return (
        <View style={styles.container}>

            <Text h3 style={styles.head}>{pants.length} Available Pants</Text>

            <FlatList
                data={pants.sort((a, b) => a.name.localeCompare(b.name))}
                keyExtractor={(item, index) => item._id}
                renderItem={({ item }) => (
                    <>

                        <PantsItem item={item} navigation={navigation} />

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

export default PantsScreen;