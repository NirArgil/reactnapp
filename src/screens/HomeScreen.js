import React from 'react'
import { StyleSheet, View, FlatList, Image } from 'react-native';
import { Text, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text h1 style={styles.head}>DressMeApp</Text>

            <Text style={styles.sets}>Completed Sets:</Text>

            <Text>Selected Items:</Text>
            <Text>Shoes:</Text>
            <Text>Pants:</Text>
            <Text>Shirts:</Text>

                <Spacer />
            <Button style={styles.button} title="To Shoes Screen" onPress={() => navigation.navigate('Shoes')}/>
                <Spacer />
            <Button title="To Pants Screen" onPress={() => navigation.navigate('Pants')}/>
                <Spacer />
            <Button title="To Shirts Screen" onPress={() => navigation.navigate('Shirts')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    head: {
        alignSelf: 'center',
        marginBottom: 30,
    },
    button: {
     
    }
   
});

export default HomeScreen;
