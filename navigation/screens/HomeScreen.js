import React, { useState } from "react";
import {
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
} from "react-native";
import HomePost from "../components/HomePost";
import Send from "../../assets/send.png";
import Camera from "../../assets/camera.png";

export default function HomeScreen({ navigation }) {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (text) => {
    setInputText(text);
  };

  const handlePostButtonPress = () => {
    console.log("Post button pressed");
  };
  const handleAddImageButtonPress = () => {
    console.log("Add Image button pressed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={handleInputChange}
          value={inputText}
          placeholder="Create a new post"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={handleAddImageButtonPress}
          >
            <Image source={Camera} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={handlePostButtonPress}
          >
            <Image source={Send} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      {/* <FlatList
        data={[{ key: "post1" }]} // Example data, replace with your actual data
        renderItem={() => <HomePost />} // Render your HomePost component here
        keyExtractor={(item) => item.key}
        contentContainerStyle={styles.contentContainer}
      /> */}
      <HomePost />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  inputContainer: {
    borderRadius: 15,
    borderColor: "#BFC0C1",
    borderWidth: 1,
    width: "85%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    marginBottom: 15,
  },
  input: {
    marginLeft: 10,
    paddingHorizontal: 10,
    width: "80%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  iconContainer: {
    marginRight: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  contentContainer: {
    paddingBottom: 20, // Adjust the value as per your layout
  },
  postButtonText: {
    color: "white",
    fontWeight: "bold",
  },
};
