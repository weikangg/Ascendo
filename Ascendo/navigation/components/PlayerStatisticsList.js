import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import player1 from '../../assets/player1.png';
import player2 from '../../assets/player2.png';


const PlayersList = () => {
  // Dummy task data for testing
  const players = [
    {
      id: 1,
      imageSource: player1,
      name: "Randy Delgado",
      title: "Scrum Master",
      level: "Senior",
      points: 3,
    },
    {
      id: 2,
      imageSource: player2,
      name: "Emily Tyler",
      title: "Software Engineer",
      level: "Middle",
      points: 1,
    },
    {
      id: 3,
      imageSource: player2,
      name: "Testing",
      title: "Software Engineer",
      level: "Middle",
      points: 2,
    },
    {
      id: 4,
      imageSource: player2,
      name: "Testing",
      title: "Software Engineer",
      level: "Middle",
      points: 2,
    },
  ];

  const renderPlayerCard = ({ item }) => {
    return (
      <View style={styles.playerCard}>
        <View style={styles.playerCard2}>
            <Image source={item.imageSource} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.level}>{item.level}</Text>
        </View>
        <View style={styles.playerCard2}>
            <Text style={styles.points}> + {item.points}</Text>
        </View>
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
  container:{
    marginBottom: 20,
    height:600,
  },
  playerCard: {
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#E8EDF1',
    width: 300,
    padding: 20,
    marginBottom: 16,
    flexDirection: 'row',
  },
  playerCard2: {
    alignItems:'center',
    flex: 0.5,
    // borderColor: 'black',
    // borderWidth:2,
  },    
  image: {
    marginBottom: 16,
  },    
  title: {
    fontSize:16,
    marginBottom:4,
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
  points: {
    fontSize: 40,
    fontWeight:'bold',
  }
});

export default PlayersList;
