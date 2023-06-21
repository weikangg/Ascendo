import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileDetails = () => {
  const [name, setName] = useState("Chong Wei Kang");
  const [username, setUsername] = useState("weikangg");
  const [imageUri, setImageUri] = useState(
    require("../.././assets/fatJohnDoe.gif")
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleSaveChanges = () => {
    // Logic to save changes to the profile details
    // You can update the state or make an API call to update the data
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.backgroundContainer}>
        <View style={styles.avatarContainer}>
          <Image source={imageUri} style={styles.avatar} />
        </View>
        <TouchableOpacity
          onPress={() => console.log("Change profile image")}
          style={styles.changeImageButton}
        >
          <Text style={styles.changeImageButtonText}>Change Image</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter your username"
        />
        <TouchableOpacity onPress={handleSaveChanges} style={styles.button}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={isModalVisible} animationType="fade" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Changes saved successfully!</Text>
            <TouchableOpacity onPress={closeModal} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  backgroundContainer: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    backgroundColor: "#FFF", // Add background color here
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatarContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  changeImageButton: {
    backgroundColor: "#0386D0",
    padding: 8,
    borderRadius: 20,
    marginBottom: 16,
  },
  changeImageButtonText: {
    color: "white",
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    width: 300, // Set a fixed width for the input
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#0386D0",
    width: 300,
    padding: 14,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  modalButton: {
    backgroundColor: "#0386D0",
    padding: 10,
    borderRadius: 20,
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default ProfileDetails;
