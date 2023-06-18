import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import TasksList from "../components/TasksList";
import HistoryTasksScreen from "./HistoryTasksScreen";

export default function TasksScreen({ navigation }) {
  const [selectedTab, setSelectedTab] = useState("current");
  const navigateToHistoryTasks = () => {
    // Logic to navigate to the history tasks page
    console.log("Navigating to History Tasks page");
    navigation.navigate(<HistoryTasksScreen></HistoryTasksScreen>);
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
      {selectedTab === "current" ? <TasksList /> : <HistoryTasksScreen />}
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
});
