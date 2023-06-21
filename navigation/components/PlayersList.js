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
import player1 from "../../assets/player1.png";
import player2 from "../../assets/player2.png";

const PlayersList = () => {
  const players = [
    {
      id: 1,
      imageSource: player1,
      name: "Randy Delgado",
      title: "Scrum Master",
      level: "Senior",
    },
    {
      id: 2,
      imageSource: player2,
      name: "Emily Tyler",
      title: "Software Engineer",
      level: "Middle",
    },
    {
      id: 3,
      imageSource: player2,
      name: "Testing",
      title: "Software Engineer",
      level: "Middle",
    },
  ];


  const renderPlayerCard = ({ item }) => {
    return (
      <View style={styles.playerCard}>
        <Image source={item.imageSource} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.level}>{item.level}</Text>
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
    marginBottom: 16,
  },
  playerCard: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#E8EDF1",
    width: 300,
    padding: 20,
    marginBottom: 16,
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
