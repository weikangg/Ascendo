import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";

const AddFriendScreen = ({ navigation }) => {
  const results = [
    {
      id: 1,
      name: "John Doe",
      role:"Software Engineer",
      imageSource: require("../../assets/player1.png"),
    },
    {
      id: 2,
      name: "Jane Smith",
      role:"DevOps Engineer",
      imageSource: require("../../assets/player2.png"),
    },
    {
      id: 3,
      name: "Alex Johnson",
      role:"UI/UX Designer",
      imageSource: require("../../assets/player2.png"),
    },
    {
      id: 4,
      name: "John Doe",
      role:"Software Engineer",
      imageSource: require("../../assets/player1.png"),
    },
    {
      id: 5,
      name: "Jane Smith",
      role:"DevOps Engineer",
      imageSource: require("../../assets/player2.png"),
    },
    {
      id: 6,
      name: "Alex Johnson",
      role:"UI/UX Designer",
      imageSource: require("../../assets/player2.png"),
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(results);
  

  const handleSearch = () => {
    const filteredResults = results.filter((item) => {
      return item.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    console.log("Filtered results:", filteredResults);
    setSearchResults(filteredResults);
  };

  const handleAddFriend = (friend) => {
    navigation.navigate("Games", { friend });
  };

  const renderFriendItem = ({ item }) => (
    <TouchableOpacity
      style={styles.friendCard}
      onPress={() => handleAddFriend(item)}
    >
      <Image source={item.imageSource} style={styles.friendImage} />
      <View style={styles.friendInfo}>
        <Text style={styles.friendName}>{item.name}</Text>
        <Text style={styles.friendRole}>{item.role}</Text>
      </View>
      <Text style={styles.addButtonLabel}>Add Friend</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search friends..."
        />
        <Button title="Search" onPress={handleSearch} color = "#469FD1" fontWeight = "bold"/>
      </View>
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderFriendItem}
        contentContainerStyle={styles.friendList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchBarContainer: {
    borderRadius: 30,
    borderColor: "#BFC0C1",
    borderWidth:1,
    width: "95%",
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    marginBottom:15,
    alignSelf:"center",
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginRight: 8,
    paddingHorizontal: 10,
  },
  friendList: {
    flexGrow: 1,
  },
  friendCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    width:"95%",
    alignSelf:"center",
  },
  friendImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  friendInfo: {
    flex: 1,
    justifyContent: "center",
  },
  friendName: {
    fontSize: 16,
    fontWeight:"bold",
  },
  addButtonLabel: {
    color: "#0386D0",
    fontSize: 15,
  },
});

export default AddFriendScreen;
