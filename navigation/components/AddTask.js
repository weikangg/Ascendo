import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const AddTask = ({ visible, onClose }) => {
  const [taskName, setTaskName] = React.useState("");
  const [estimate, setEstimate] = React.useState("");
  const [deadline, setDeadline] = React.useState("");
  const [priority, setPriority] = React.useState("Low");
  const [assignee, setAssignee] = React.useState("User 1");
  const [description, setDescription] = React.useState("");

  const handleSaveTask = () => {
    // Perform the saving logic here
    console.log("Submit pressed");
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
              value={taskName}
              onChangeText={setTaskName}
              placeholder="Enter task name"
            />

            <Text style={styles.label}>Estimate</Text>
            <TextInput
              style={styles.input}
              value={estimate}
              onChangeText={setEstimate}
              placeholder="Enter estimate"
            />

            <Text style={styles.label}>Deadline</Text>
            <TextInput
              style={styles.input}
              value={deadline}
              onChangeText={setDeadline}
              placeholder="Enter deadline"
            />

            <Text style={styles.label}>Priority</Text>
            <TextInput
              style={styles.input}
              value={priority}
              onChangeText={setPriority}
              placeholder="Enter priority"
            />

            <Text style={styles.label}>Assignee</Text>
            <TextInput
              style={styles.input}
              value={assignee}
              onChangeText={setAssignee}
              placeholder="Enter assignee"
            />

            <Text style={styles.label}>Description</Text>
            <TextInput
              style={styles.descriptionInput}
              value={description}
              onChangeText={setDescription}
              placeholder="Enter task description"
              multiline
            />

            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSaveTask}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
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
});

export default AddTask;
