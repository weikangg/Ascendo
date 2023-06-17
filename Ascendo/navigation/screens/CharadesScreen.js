import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Python from '../../assets/python.png'

export default function CharadesScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style = {styles.header}>Guess the Programming Language</Text>
            <Image 
                style = {styles.image}
                source = {Python}>
            </Image>
            <View style={styles.buttonContainer}>
                <View style={styles.row}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#D02803' }]}>
                        <Text style={styles.buttonText}>Java</Text>
                    </TouchableOpacity>
                    <View style={styles.spacing}></View>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#03D030' }]}>
                        <Text style={styles.buttonText}>Python</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#CCD003' }]}>
                        <Text style={styles.buttonText}>C++</Text>
                    </TouchableOpacity>
                    <View style={styles.spacing}></View>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#1A8BCB' }]}>
                        <Text style={styles.buttonText}>Javascript</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        marginTop:40,
        fontSize:23,
        marginBottom:15,
        color:"#469FD1",
    },
    image: {
        width: 500, 
        height: 420, 
        resizeMode: 'contain',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },  
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    button: {
      backgroundColor: '#0386D0',
      width: '45%',
      padding: 14,
      borderRadius: 20,
      alignItems: "center",
      marginBottom: 8,
    },
    buttonText: {
        color:"white",
        fontSize:20,
        fontWeight: "bold",
    },
    spacing: {
        width: 10,
    },
  });