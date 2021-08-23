import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { StyleSheet, View, FlatList, Image, TextInput, ActivityIndicator } from 'react-native';
import { Text, Button } from 'react-native-elements';
import dataApi from '../api/dataApi';
import Spacer from '../components/Spacer';

const ShoesScreen = ({ }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getData = async () => {
        fetch('https://www.mocky.io/v2/5e3940013200005e00ddf87e')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }

    // const shoesData = data.results.filter(function (result) {
    //     return result.type === 'shoes';
    // });

    // console.log(shoesData.length);

    useEffect(() => {
        getData();
    }, []);

    return (
        <View style={styles.container}>
            <Text h3 style={styles.head}>Shoes Screen</Text>

            <Text h3 style={styles.head}>shoesData.length</Text>
            {isLoading ? <ActivityIndicator /> :
                <FlatList
                    data={data.results.sort((a, b) => a.name.localeCompare(b.name))}
                    keyExtractor={({ _id }, index) => _id}
                    renderItem={({ item }) => (
                        <>
                            {item.type == 'shoes' &&
                                <View style={styles.shoeDetails}>
                                    <Text>
                                        Name:{item.name} {"\n"}
                                        Colors: <Button title={item.colors[0]}/> {"\n"}
                                        Brand: {item.brand} </Text>
                                </View>}
                        </>

                    )}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 90,
    },
    head: {
        alignSelf: 'center',
    },
    shoeDetails: {
        marginHorizontal: 50,
        marginVertical: 45,
    }
});

export default ShoesScreen;