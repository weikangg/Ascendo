import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const AddTask = ({ visible, onClose }) => {
  const [title, setTitle] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const [document, setDocument] = React.useState("");
  const [priority, setPriority] = React.useState("Low");
  const [person, setPerson] = React.useState("User 1");
  const [details, setDetails] = React.useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSaveTask = () => {
    // Fetch the latest task ID from the API
    fetch("https://iwbybrwtpe.execute-api.ap-southeast-1.amazonaws.com/tasks", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Find the maximum ID among existing tasks
        const maxId = data.reduce((max, task) => Math.max(max, task.id), 0);

        // Generate a new ID by incrementing the maximum ID
        const newId = maxId + 1;

        const task = {
          id: newId.toString(),
          title,
          duration,
          document,
          details,
          person,
          priority,
        };

        // Save the task to the API
        fetch(
          "https://iwbybrwtpe.execute-api.ap-southeast-1.amazonaws.com/tasks",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
          }
        )
          .then((response) => response.json())
          .then((result) => {
            console.log("Task saved successfully:", result);
            setTimeout(() => {
              onClose();
            }, 1000);
          })
          .catch((error) => {
            console.error("Error saving task:", error);
          });

        console.log(newId);
        console.log("Submit pressed");
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
    setShowSuccessMessage(true);
  };

  const closeSuccessMessage = () => {
    setShowSuccessMessage(false);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.outercontainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Add Task</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <FontAwesome name="times" style={styles.closeIcon} />
          </TouchableOpacity>

          <ScrollView>
            <Text style={styles.label}>Task Name</Text>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={setTitle}
              placeholder="Enter task name"
            />

            <Text style={styles.label}>Duration</Text>
            <TextInput
              style={styles.input}
              value={duration}
              onChangeText={setDuration}
              placeholder="Enter estimate"
            />

            <Text style={styles.label}>Document</Text>
            <TextInput
              style={styles.input}
              value={document}
              onChangeText={setDocument}
              placeholder="Enter deadline"
            />

            <Text style={styles.label}>Details</Text>
            <TextInput
              style={styles.descriptionInput}
              value={details}
              onChangeText={setDetails}
              placeholder="Enter task description"
              multiline
            />

            <Text style={styles.label}>Person</Text>
            <TextInput
              style={styles.input}
              value={person}
              onChangeText={setPerson}
              placeholder="Enter assignee"
            />

            <Text style={styles.label}>Priority</Text>
            <TextInput
              style={styles.input}
              value={priority}
              onChangeText={setPriority}
              placeholder="Enter priority"
            />

            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSaveTask}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        {showSuccessMessage && (
          <View style={styles.successMessageContainer}>
            <Text style={styles.successMessageText}>
              Task added successfully!
            </Text>
            <TouchableOpacity
              style={styles.closeSuccessMessageButton}
              onPress={closeSuccessMessage}
            >
              <FontAwesome
                name="times"
                style={styles.closeSuccessMessageIcon}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  outercontainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: "85%",
    width: "85%",
    backgroundColor: "white",
    marginTop: 16,
    borderRadius: 8,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  closeButton: {
    position: "absolute",
    top: 16,
    right: 16,
    padding: 8,
  },
  closeIcon: {
    fontSize: 24,
    color: "black",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginTop: 8,
  },
  descriptionInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginTop: 8,
    height: 120,
  },
  submitButton: {
    backgroundColor: "#469FD1",
    borderRadius: 4,
    padding: 12,
    marginTop: 16,
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  successMessageContainer: {
    position: "absolute",
    width: "85%",
    top: 100,
    left: 30,
    right: 0,
    height: 50,
    backgroundColor: "#b5dbb2",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  successMessageText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  closeSuccessMessageButton: {
    position: "absolute",
    top: 0,
    right: 0,
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  closeSuccessMessageIcon: {
    fontSize: 16,
    color: "black",
  },
});

export default AddTask;
