import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import PlayerStatisticsList from "../components/PlayerStatisticsList";

export default function GameStatisticsScreen({navigation}) {
    return (
        <View style={styles.container}>
            <PlayerStatisticsList/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop:30,
    },
  });