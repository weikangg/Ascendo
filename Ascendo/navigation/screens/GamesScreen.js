import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PlayersList from "../components/PlayersList";

export default function GamesScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
            <PlayersList/>
            <View style = {styles.buttonContainer}>
                <TouchableOpacity 
                    style = {styles.button}
                    onPress={() => navigation.navigate("GameIntro")}
                >
                    <Text style = {styles.button_text}>Add Friends</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {styles.button}
                    onPress={() => navigation.navigate("GameIntro")}
                >
                    <Text style = {styles.button_text}>Start Game</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      padding:20,
      maxHeight:620,
    },
    headerContainer: {
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 16,
      width: "100%",
    },
    buttonContainer: {
        position: "absolute",
        bottom: -120, 
        alignItems: "center",
        width: "100%",
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