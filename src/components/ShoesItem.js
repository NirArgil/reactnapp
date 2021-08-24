import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { StyleSheet, View, FlatList, Image, Alert  } from 'react-native';
import { Text, Button } from 'react-native-elements';
import AlertButton from './AlertButton';

const ShoesItem = ({ item, navigation }) => {
    const [shoesSizesState, setShoesSizes] = useState(false);
    const [data, setData] = useState({ size: '', color: '' });
    const [shoeState, setShoeState] = useState('');

    return (
        <>
            <View style={styles.shoeDetails}>
                <Text>

                    Name:{item.name} {"\n"}
                    Colors: {"\n"}
                    <TouchableOpacity style={{
                        width: '90%',
                        height: 30,
                        marginRight: 100,
                        alignItems: 'center',
                        borderRadius: 5,
                        marginRight: 50,
                        backgroundColor: item.colors[0]
                    }}
                        onPress={() => setShoesSizes(!shoesSizesState)}>
                        <Text>{item.colors[0]}</Text>

                    </TouchableOpacity>

                    {item.colors[1] && <TouchableOpacity style={{
                        width: '90%',
                        height: 30,
                        alignItems: 'center',
                        borderRadius: 5,
                        backgroundColor: item.colors[1]
                    }}
                        onPress={() => setShoesSizes(!shoesSizesState)}>

                        <Text>{item.colors[1]}</Text>
                    </TouchableOpacity>}

                    {item.colors[2] && <TouchableOpacity style={{
                        width: '90%',
                        height: 30,
                        alignItems: 'center',
                        borderRadius: 5,
                        backgroundColor: item.colors[2]
                    }}
                        onPress={() => setShoesSizes(!shoesSizesState)}>
                        <Text>{item.colors[2]}</Text>
                    </TouchableOpacity>}


                    {item.colors[3] && <TouchableOpacity style={{
                        width: '90%',
                        height: 30,
                        alignItems: 'center',
                        borderRadius: 5,
                        backgroundColor: item.colors[3]
                    }}
                        onPress={() => setShoesSizes(!shoesSizesState)}>
                        <Text>{item.colors[3]}</Text>
                    </TouchableOpacity>}

                    {item.colors[4] && <TouchableOpacity style={{
                        width: '90%',
                        height: 30,
                        alignItems: 'center',
                        borderRadius: 5,
                        backgroundColor: item.colors[4]
                    }}
                        onPress={() => setShoesSizes(!shoesSizesState)}>
                        <Text>{item.colors[4]}</Text>
                    </TouchableOpacity>} {"\n"}
                    <View>

                        {shoesSizesState ?
                            <View>

                                {item.sizes.map((size) =>
                                    <Button
                                        title={size}
                                        onPress={() => Alert.alert(
                                            "Hi Customer",
                                            "Do you want to add this item to your LIST?",
                                            [
                                                {
                                                    text: "Cancel",
                                                    onPress: () => console.log("Cancel Pressed"),
                                                    style: "cancel"
                                                },
                                                {
                                                    text: "OK", 
                                                    onPress: () => navigation.navigate("Home")
                                                }
                                            ]
                                        )}>
                                    </Button>)}

                            </View> : null}

                    </View>

                    Brand: {item.brand} </Text>
            </View>

        </>
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

export default ShoesItem;
