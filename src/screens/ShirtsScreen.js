import React, { useEffect, useState } from 'react'
import { StyleSheet, View, FlatList, Image, Button, TextInput, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-elements';

const ShirtsScreen = () => {
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
            <Text h3 style={styles.head}>Shirts Screen</Text>

            <Text h3 style={styles.head}>shoesData.length</Text>
            {isLoading ? <ActivityIndicator /> :
                <FlatList
                    data={data.results.sort((a, b) => a.name.localeCompare(b.name))}
                    keyExtractor={({ _id }, index) => _id}
                    renderItem={({ item }) => (
                        <>

                            {item.type === 'shirt' &&
                                <View style={styles.shoeDetails}>
                                    <Text>
                                        Name:{item.name} {"\n"}
                                        Colors: <Button style={item.colors[0]} color={item.colors[0]} title="" />
                                        
                                        {item.colors[1] &&
                                            <Button color={item.colors[1]} onPress={() => navigation.navigate('Home')} title=""></Button>}
                                        {item.colors[2] &&
                                            <Button color={item.colors[2]} title=""></Button>}
                                        {item.colors[3] &&
                                            <Button color={item.colors[3]} title=""></Button>}
                                        {item.colors[4] &&
                                            <Button color={item.colors[4]} title=""></Button>}{"\n"}
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
    },
});

export default ShirtsScreen;