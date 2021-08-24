import React from 'react'
import { StyleSheet, View, FlatList, Image, Button, TextInput, ActivityIndicator } from 'react-native';
import { Input, Text } from 'react-native-elements';

const SuccessScreen = ({ navigation, items }) => {

    const shoes = items.items.results.filter(item => item.type === 'shoes');


    return (
        <View style={styles.container}>
            <Text>You are Successfully chose at least one item of each category.</Text>

                <Text>Shoes:</Text>
                <Text>Shoes Name:</Text>
                <Text>Shoes Color:</Text>
                <Text>Shoes Size:</Text>
                <Text>Shoes Brand:</Text>

                <Text>Pants:</Text>
                <Text>Pants Name:</Text>
                <Text>Pants Color:</Text>
                <Text>Pants Size:</Text>
                <Text>Pants Brand:</Text>

                <Text>Shirts:</Text>
                <Text>Shirts Name:</Text>
                <Text>Shirts Color:</Text>
                <Text>Shirts Size:</Text>
                <Text>Shirts Brand:</Text>

                <Text>Time of current session in Sec:</Text>
                <Text>Sum of shoe size and pants size:</Text>

                <Button title="Choose another Set." onPress={() => navigation.navigate('Home')}></Button>
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
});

export default SuccessScreen;