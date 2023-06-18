import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const TasksList = ({ navigation }) => {
  const [completedTasks, setCompletedTasks] = useState([]);

  const toggleTaskCompletion = (taskId) => {
    if (completedTasks.includes(taskId)) {
      setCompletedTasks(completedTasks.filter((id) => id !== taskId));
    } else {
      setCompletedTasks([...completedTasks, taskId]);
    }
  };

  // Dummy task data for testing
  const tasks = [
    {
      id: 1,
      title: "Task 1",
      duration: "3h 30min",
      document: "Main Website",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu...",
    },
    {
      id: 2,
      title: "Task 2",
      duration: "2h 30min",
      document: "Main Website",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu...",
    },
    {
      id: 3,
      title: "Task 3",
      duration: "8h 30min",
      document: "Main Website",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu...",
    },
    {
      id: 4,
      title: "Task 4",
      duration: "1h 30min",
      document: "Contact Us",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu...",
    },
  ];

  const addToCalendar = () => {
    // Logic to open the user's calendar app
    console.log("Add to Calendar pressed");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.taskContainer,
              completedTasks.includes(item.id) && styles.completedTaskContainer,
            ]}
          >
            <View style={styles.taskHeader}>
              <Text
                style={[
                  styles.title,
                  completedTasks.includes(item.id) && styles.completedTitle,
                ]}
              >
                {item.title}
              </Text>
              <TouchableOpacity
                onPress={() => toggleTaskCompletion(item.id)}
                style={[
                  styles.toggleButton,
                  completedTasks.includes(item.id) && styles.completedButton,
                ]}
              >
                <FontAwesome
                  name={
                    completedTasks.includes(item.id)
                      ? "check-circle"
                      : "circle-thin"
                  }
                  style={styles.toggleIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <FontAwesome name="clock-o" style={styles.icon} />
              <Text style={styles.duration}>{item.duration}</Text>
              <View style={styles.documentContainer}>
                <FontAwesome name="file-text-o" style={styles.documentIcon} />
                <Text style={styles.documentInfo}>{item.document}</Text>
              </View>
            </View>
            <Text style={styles.details}>{item.details}</Text>
            <View style={styles.calendarContainer}>
              <FontAwesome name="calendar" style={styles.calendarIcon} />
              <TouchableOpacity
                onPress={addToCalendar}
                style={styles.addToCalendarButton}
              >
                <Text style={styles.addToCalendarButtonText}>
                  Add to Calendar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  contentContainer: {
    flexGrow: 1,
  },
  taskContainer: {
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
    padding: 20,
    marginBottom: 16,
    width: "100%", // Take up full width within content container
    maxWidth: 400, // Set maximum width to prevent it from being too wide
  },
  completedTaskContainer: {
    opacity: 0.6,
  },
  taskHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  completedTitle: {
    textDecorationLine: "line-through",
  },
  toggleButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  completedButton: {
    backgroundColor: "green",
    borderColor: "green",
  },
  toggleIcon: {
    fontSize: 20,
    color: "black",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  icon: {
    fontSize: 16,
    marginRight: 8,
  },
  duration: {
    fontSize: 16,
  },
  documentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
  },
  documentIcon: {
    fontSize: 16,
    marginRight: 4,
  },
  documentInfo: {
    fontSize: 16,
  },
  details: {
    fontSize: 14,
  },
  calendarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  calendarIcon: {
    fontSize: 16,
    marginRight: 4,
  },
  addToCalendarButton: {
    backgroundColor: "#469FD1",
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginLeft: 8,
  },
  addToCalendarButtonText: {
    color: "white",
    fontSize: 14,
  },
});

export default TasksList;
