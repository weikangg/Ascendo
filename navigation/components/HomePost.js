import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Player1 from "../../assets/player1.png"
import Kopitiam from "../../assets/kopitiam.jpeg"

const Posts = ({ name, profile, photo, onPress }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image
            source={Player1}
            style={styles.profile}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Niggatron</Text>
          <Text style={styles.timestamp}>2 mins ago</Text>
        </View>
        <Entypo name="sound-mix" color="#044244" size={20} />
      </View>
      <View style={styles.imageContainer}>
        <Text style = {styles.description}>Check out this amazing new store at our kopitiam downstairs!!</Text>
        <ImageBackground
          source={Kopitiam}
          style={styles.image}
          imageStyle={styles.imageBackground}
        >
        </ImageBackground>  
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={onPress} style={styles.iconButton}>
            <Text marginRight = {10}>Share</Text>
            <Entypo name="forward" color="#044244" size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLike} style={styles.iconButton}>
          <Text marginRight = {10}>Like</Text>
            <Entypo
              name={liked ? "heart" : "heart-outlined"}
              color={liked ? "red" : "#044244"}
              size={20}
            />
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    margin: "auto",
    marginBottom: 20,
    left: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileContainer: {
    width: "20%",
    marginBottom:10,
  },
  profile: {
    width: 45,
    height: 45,
    borderRadius: 13,
  },
  textContainer: {
    width: "65%",
  },
  name: {
    fontFamily: "System",
    fontSize: 14,
    color: "#044244",
  },
  timestamp: {
    fontFamily: "System",
    fontSize: 12,
    color: "#9ca1a2",
  },
  description: {
    marginLeft:20,
    marginBottom:15,
  },
  imageContainer: {
    flexDirection: "col",
    width: "100%",
    paddingTop: 20,
    backgroundColor:"white",
    borderRadius: 30,
    marginLeft: -10,
  },
  image: {
    width: "95%",
    height: 160,
    marginLeft:15,
    marginBottom:15,
  },
  imageBackground: {
    borderRadius: 30,
    borderColor: "#BFC0C1",
    borderWidth:1,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconButton: {
    flexDirection:"row",
    marginBottom: 20,
    padding: 5,
    backgroundColor: "#e8e8e8",
    marginLeft: 10,
    marginRight: 20,
    width: 130,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});

export default Posts;
