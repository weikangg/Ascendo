import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const tasks = [
  {
    id: 1,
    name: "Task 1",
    estimate: "48 hours",
    spentTime: "13 hours",
    assigneeImage: require("../../assets/player1.png"),
    priority: "Medium",
    status: "In Progress",
  },
  {
    id: 2,
    name: "Task 2",
    estimate: "24 hours",
    spentTime: "8 hours",
    assigneeImage: require("../../assets/player1.png"),
    priority: "High",
    status: "Completed",
  },
  {
    id: 3,
    name: "Task 3",
    estimate: "72 hours",
    spentTime: "24 hours",
    assigneeImage: require("../../assets/player1.png"),
    priority: "Low",
    status: "Overdue",
  },
  {
    id: 4,
    name: "Task 4",
    estimate: "4 hours",
    spentTime: "2 hours",
    assigneeImage: require("../../assets/player1.png"),
    priority: "High",
    status: "Overdue",
  },
];

const ManagerTasksList = () => {
  const getStatusColor = (status) => {
    if (status === "In Progress") {
      return "#FFFFCC"; // Light yellow
    } else if (status === "Completed") {
      return "#00CC00"; // Green
    } else if (status === "Overdue") {
      return "#D64F71"; // Red
    } else {
      return "transparent"; // Default color
    }
  };

  return (
    <View style={styles.container}>
      {tasks.map((task) => (
        <View key={task.id} style={styles.taskContainer}>
          <Text style={styles.taskName}>{task.name}</Text>
          <View style={styles.divider} />
          <View style={styles.row}>
            <Text style={styles.label}>Estimate</Text>
            <Text style={styles.info}>{task.estimate}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Spent time</Text>
            <Text style={styles.info}>{task.spentTime}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Assignee</Text>
            <Image source={task.assigneeImage} style={styles.assigneeImage} />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Priority</Text>
            <Text style={styles.info}>{task.priority}</Text>
            <View
              style={[
                styles.statusContainer,
                { backgroundColor: getStatusColor(task.status) },
              ]}
            >
              <Text style={styles.statusText}>{task.status}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  taskContainer: {
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  taskName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    backgroundColor: "#CCCCCC",
    marginVertical: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  label: {
    fontWeight: "bold",
    marginRight: 8,
  },
  info: {
    flex: 1,
  },
  assigneeImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginLeft: 8,
  },
  statusContainer: {
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 8,
    marginLeft: 8,
  },
  statusText: {
    color: "black",
  },
});

export default ManagerTasksList;
