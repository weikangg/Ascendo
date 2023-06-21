import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
const PlayersList = ({ players }) => {
  const renderPlayerCard = ({ item }) => {
    return (
      <View style={styles.playerCard}>
        <Image source={item.imageSource} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={players}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPlayerCard}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 500,
    marginBottom: 20,
    width:310,
    marginLeft:8,
  },
  playerCard: {
    marginTop:10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
    width: 300,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000", // for iOS
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  image: {
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    marginBottom: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  icon: {
    fontSize: 16,
    marginRight: 8,
  },
});

export default PlayersList;
