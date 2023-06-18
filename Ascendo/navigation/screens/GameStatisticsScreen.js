import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import PlayerStatisticsList from "../components/PlayerStatisticsList";

export default function GameStatisticsScreen({navigation}) {
    return (
        <View style={styles.container}>
            <PlayerStatisticsList/>
            <TouchableOpacity 
                    style = {styles.button}
                    onPress={() => navigation.navigate("Games")}
                >
                    <Text style = {styles.buttonText}>Back to Menu</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop:30,
    },
    button: {
        backgroundColor: '#0386D0',
        width: 300,
        padding: 14,
        borderRadius: 20,
        alignItems: "center",
        marginBottom: 8,
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
  });