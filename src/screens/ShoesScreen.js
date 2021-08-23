import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { StyleSheet, View, FlatList, Image, Button, TextInput, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from '../components/Spacer';

const ShoesScreen = ({ navigation }) => {
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

    const renderShoeSizes = () => {
        return (
            selectedItem.sizes.map((item, index) => {
                return (
                    <TouchableOpacity key={index} style={{
                        width: 45,
                        height: 45,
                        alignItems: 'center',
                        borderWidth: 1,
                        borderRadius: 5
                    }}>
                        <Text>
                            {item}
                        </Text>
                    </TouchableOpacity>
                )
            })
        )
    }

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

                            {item.type === 'shoes' &&
                                <View style={styles.shoeDetails}>
                                    <Text>
                                        Name:{item.name} {"\n"}
                                        Colors: {"\n"}
                                         <TouchableOpacity style={{
                                            width: '90%',
                                            height: 30,
                                            alignItems: 'center',
                                            borderRadius: 5,
                                            marginRight: 10,
                                            backgroundColor: item.colors[0]
                                        }}>
                                            <Text>{item.colors[0]}</Text>
                                        </TouchableOpacity>
                                 

                                        {item.colors[1] && <TouchableOpacity style={{
                                            width: '90%',
                                            height: 30,
                                            alignItems: 'center',
                                            backgroundColor: item.colors[1]
                                        }}>
                                            <Text>{item.colors[1]}</Text>
                                        </TouchableOpacity> }
                                        
                                        

                                        {item.colors[2] && <TouchableOpacity style={{
                                            width: '90%',
                                            height: 30,
                                            alignItems: 'center',
                                            backgroundColor: item.colors[2]
                                        }}>
                                            <Text>{item.colors[2]}</Text>
                                        </TouchableOpacity> }
                        
                                         
                                        {item.colors[3] && <TouchableOpacity style={{
                                            width: '90%',
                                            height: 30,
                                            alignItems: 'center',
                                            backgroundColor: item.colors[3]
                                        }}>
                                            <Text>{item.colors[3]}</Text>
                                        </TouchableOpacity>}

                                        {item.colors[4] && <TouchableOpacity style={{
                                            width: '90%',
                                            height: 30,
                                            alignItems: 'center',
                                            backgroundColor: item.colors[4]
                                        }}>
                                            <Text>{item.colors[4]}</Text>
                                        </TouchableOpacity>} {"\n"}

                                        Brand: {item.brand} </Text>
                                </View>}
                        </>

                    )}
                />
            }

            {/* <View>
                {renderShoeSizes()}
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 90,
        width: "90%",
    },
    head: {
        alignSelf: 'center',
    },
    shoeDetails: {
     
    },
    btn: {
  
    }
});

export default ShoesScreen;