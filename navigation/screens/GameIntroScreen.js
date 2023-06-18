import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Charades from '../../assets/charades.jpg'

export default function GameIntroScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style = {styles.header}>CHARADES</Text>
            <Image 
                style = {styles.image}
                source = {Charades}>
            </Image>
            <TouchableOpacity 
                    style = {styles.button}
                    onPress={() => navigation.navigate("Charades")}
                >
                    <Text style = {styles.button_text}>Continue to Game</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize:45,
    },
    image: {
        width: 400, 
        height: 300, 
        resizeMode: 'contain',
        marginBottom:30,
    },
    button: {
      backgroundColor: '#0386D0',
      width: 300,
      padding: 14,
      borderRadius: 20,
      alignItems: "center",
      marginBottom: 8,
    },
    button_text: {
        color:"white",
        fontSize:20,
        fontWeight: "bold",
    },
  });