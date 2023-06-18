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
            source={require("../../assets/rewards_page/ascendo_logo.png")}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{/** name*/}Hello</Text>
          <Text style={styles.timestamp}>2 mins ago</Text>
        </View>
        <Entypo name="sound-mix" color="#044244" size={20} />
      </View>

      <View style={styles.imageContainer}>
        <ImageBackground
          source={require("../../assets/rewards_page/ascendo_logo.png")}
          style={styles.image}
          imageStyle={styles.imageBackground}
        >
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={onPress} style={styles.iconButton}>
              <Entypo name="forward" color="#044244" size={20} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLike} style={styles.iconButton}>
              <Entypo
                name={liked ? "heart" : "heart-outlined"}
                color={liked ? "red" : "#044244"}
                size={20}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
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
    paddingTop: 25,
    alignItems: "center",
  },
  profileContainer: {
    width: "20%",
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 13,
  },
  textContainer: {
    width: "60%",
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
  imageContainer: {
    flexDirection: "row",
    width: "100%",
    paddingTop: 20,
  },
  image: {
    width: "100%",
    height: 220,
  },
  imageBackground: {
    borderRadius: 30,
  },
  iconContainer: {
    height: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  iconButton: {
    marginBottom: 20,
    borderRadius: 5,
    padding: 5,
    backgroundColor: "#e8e8e8",
    marginLeft: 10,
    marginRight: 20,
  },
});

export default Posts;
