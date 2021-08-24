import React, { useEffect, useState } from 'react'
import { StyleSheet, View, FlatList, Image } from 'react-native';
import { Text, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const HomeScreen = ({ navigation, shoesSelected, pantsSelected, shirtsSelected, items }) => {

    return (
        <View style={styles.container}>
            <Text h1 style={styles.head}>DressMeApp</Text>

            <Text style={styles.sets}>Completed Sets:</Text>

            <Text>Selected Items: {items}</Text>
            <Text>Shoes: {shoesSelected}</Text>
            <Text>Pants:</Text>
            <Text>Shirts:</Text>

            { shoesSelected >= 1 && pantsSelected >= 1 && shirtsSelected >= 1 &&
                <Button title='GO to CHECKOUT' onPress={() => navigation.navigate('SuccessScreen')}/> }

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
