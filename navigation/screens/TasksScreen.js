import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import TasksList from "../components/TasksList";
import HistoryTasksScreen from "./HistoryTasksScreen";
import { FontAwesome, Feather } from "@expo/vector-icons";
import AddTask from "../components/AddTask";
import HistoryTasksList from "../components/HistoryTasksList";

export default function TasksScreen({ navigation }) {
  const [selectedTab, setSelectedTab] = useState("current");
  const [isAddTaskVisible, setIsAddTaskVisible] = useState(false);
  const navigateToHistoryTasks = () => {
    // Logic to navigate to the history tasks page
    console.log("Navigating to History Tasks page");
    navigation.navigate(<HistoryTasksScreen></HistoryTasksScreen>);
  };
  const toggleAddTask = () => {
    setIsAddTaskVisible((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "current" && styles.selectedTabButton,
          ]}
          onPress={() => setSelectedTab("current")}
        >
          <Text
            style={[
              styles.tabButtonText,
              selectedTab === "current" && styles.selectedTabButtonText,
            ]}
          >
            Current Tasks
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "history" && styles.selectedTabButton,
          ]}
          onPress={() => setSelectedTab("history")}
        >
          <Text
            style={[
              styles.tabButtonText,
              selectedTab === "history" && styles.selectedTabButtonText,
            ]}
          >
            History
          </Text>
        </TouchableOpacity>
      </View>
      {selectedTab === "current" ? <TasksList /> : <HistoryTasksList />}
      {isAddTaskVisible && <AddTask onClose={toggleAddTask} />}
      <TouchableOpacity style={styles.fab} onPress={toggleAddTask}>
        <Feather name="plus" style={styles.fabIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
    width: "100%",
  },
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderColor: "transparent",
  },
  selectedTabButton: {
    borderColor: "#469FD1",
  },
  tabButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  selectedTabButtonText: {
    fontWeight: "bold",
  },
  fab: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: "#469FD1",
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  fabIcon: {
    fontSize: 24,
    color: "white",
  },
});
