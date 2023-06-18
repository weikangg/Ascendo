import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const FollowerScreen = () => {
  // Sample data of following users
  const followingUsers = [
    {
      id: 1,
      name: "John Doe",
      username: "johndoe",
      image: require("../../assets/rewards_page/ascendo_logo.png"),
      department: "Marketing",
      position: "Manager",
    },
    {
      id: 2,
      name: "Jane Smith",
      username: "janesmith",
      image: require("../../assets/rewards_page/ascendo_logo.png"),
      department: "Sales",
      position: "Associate",
    },
    // Add more following users here...
  ];

  const handleRemoveFollowing = (userId) => {
    // Logic to remove the following user with the given userId
    // You can update the state or make an API call to update the data
  };

  return (
    <View style={styles.container}>
      {followingUsers.map((user) => (
        <View key={user.id}>
          <View style={styles.userContainer}>
            <Image source={user.image} style={styles.avatar} />
            <View style={styles.userInfo}>
              <Text style={styles.name}>{user.name}</Text>
              <Text style={styles.username}>@{user.username}</Text>
              <View style={styles.positionTag}>
                <Text style={styles.position}>{user.position}</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => handleRemoveFollowing(user.id)}
              style={styles.removeButton}
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.separator} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    margin: 16,
    elevation: 4,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
    flexDirection: "column",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  positionTag: {
    backgroundColor: "lightgray",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginTop: 4,
    minWidth: 50, // Set a minimum width for the tag
    alignSelf: "flex-start", // Align the tag to the start of the container
  },
  position: {
    fontSize: 12,
    color: "gray",
  },
  username: {
    fontSize: 14,
    color: "gray",
  },
  separator: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 8,
  },
  removeButton: {
    backgroundColor: "red",
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  removeButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default FollowerScreen;
