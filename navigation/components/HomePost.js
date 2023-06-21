import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Share,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Player1 from "../../assets/player1.png";
import Kopitiam from "../../assets/kopitiam.jpeg";

const Posts = ({ name, profile, photo, onPress }) => {
  const [likes, setLikes] = useState([]);

  const handleLike = (postId) => {
    const updatedLikes = [...likes];
    const index = updatedLikes.indexOf(postId);
    if (index === -1) {
      // Add post ID to liked posts
      updatedLikes.push(postId);
    } else {
      // Remove post ID from liked posts
      updatedLikes.splice(index, 1);
    }
    setLikes(updatedLikes);
  };

  const handleShare = () => {
    Share.share({
      message: "Check out this awesome post!",
      url: "https://example.com/post/123",
      title: "Post Title",
    });
  };

  const posts = [
    {
      id: 1,
      imageSource: Player1,
      name: "John Doe",
      timestamp: "2 mins ago",
      description:
        "Check out this amazing new store at our kopitiam downstairs!!",
      descImage: Kopitiam,
    },
    {
      id: 2,
      imageSource: Player1,
      name: "Steven Lim",
      timestamp: "2 mins ago",
      description:
        "Check out this amazing new store at our kopitiam downstairs!!",
      descImage: Kopitiam,
    },
  ];

  const isPostLiked = (postId) => likes.includes(postId);

  const renderPostCard = ({ item }) => {
    const isLiked = isPostLiked(item.id);

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.profileContainer}>
            <Image source={item.imageSource} style={styles.profile} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
          </View>
          <Entypo name="sound-mix" color="#044244" size={20} />
        </View>
        <View style={styles.imageContainer}>
          <Text style={styles.description}>{item.description}</Text>
          <ImageBackground
            source={item.descImage}
            style={styles.image}
            imageStyle={styles.imageBackground}
          />
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={handleShare} style={styles.iconButton}>
              <Text marginRight={10}>Share</Text>
              <Entypo name="forward" color="#044244" size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleLike(item.id)}
              style={styles.iconButton}
            >
              <Text marginRight={10}>Like</Text>
              <Entypo
                name={isLiked ? "heart" : "heart-outlined"}
                color={isLiked ? "red" : "#044244"}
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderPostCard}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
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
    marginBottom: 10,
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
    marginLeft: 20,
    marginBottom: 15,
  },
  imageContainer: {
    flexDirection: "col",
    width: "100%",
    paddingTop: 20,
    backgroundColor: "white",
    borderRadius: 30,
    marginLeft: -10,
  },
  image: {
    width: "95%",
    height: 160,
    marginLeft: 15,
    marginBottom: 15,
  },
  imageBackground: {
    borderRadius: 30,
    borderColor: "#BFC0C1",
    borderWidth: 1,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 25,
    marginRight: 25,
  },
  iconButton: {
    flexDirection: "row",
    marginBottom: 20,
    padding: 5,
    backgroundColor: "#e8e8e8",
    alignSelf: "center",
    width: 130,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
});

export default Posts;
