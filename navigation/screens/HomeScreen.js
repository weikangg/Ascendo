import React, { useState } from "react";
import {
  ScrollView,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import HomePost from "../components/HomePost";
import Send from "../../assets/send.png";
import Camera from "../../assets/camera.png";
import * as ImagePicker from "expo-image-picker";
import { S3 } from "aws-sdk";

export default function HomeScreen({ navigation }) {
  const [inputText, setInputText] = useState("");
  const [image, setImage] = useState(null);

  async function uploadImageToS3(imageUri, imageKey) {
    const s3 = new S3();

    const response = await fetch(imageUri);
    const blob = await response.blob();

    const params = {
      Bucket: "Posts",
      Key: imageKey,
      Body: blob,
      ContentType: "image/jpeg",
    };

    return new Promise((resolve, reject) => {
      s3.upload(params, (err, data) => {
        if (err) {
          console.log("Error uploading image to S3:", err);
          reject(err);
        } else {
          console.log("Image uploaded successfully:", data);
          resolve(data);
        }
      });
    });
  }

  const handleInputChange = (text) => {
    setInputText(text);
  };

  const handlePostButtonPress = () => {
    console.log("Post button pressed");
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      //aspect: [4, 3],
      quality: 1,
    });

    console.log(JSON.stringify(result.assets[0]));

    if (!result.canceled) {
      setImage(result.assets[0]);

      const imageKey = `image-${Date.now()}.jpg`;
      try {
        await uploadImageToS3(imageUri, imageKey);
        console.log("Image uploaded to S3");
        // Handle successful upload
      } catch (error) {
        console.log("Error uploading image to S3:", error);
        // Handle upload error
      }
    }
  };

  return (
    <ScrollView>
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
        <HomePost />
      </View>
    </ScrollView>
  );
}

const styles = {
  container: {
    padding: 10,
    alignItems: "center",
  },
  inputContainer: {
    borderRadius: 15,
    borderColor: "#BFC0C1",
    borderWidth: 1,
    width: "90%",
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
  postButtonText: {
    color: "white",
    fontWeight: "bold",
  },
};
