import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import ManagerTasksList from "../components/ManagerTasksList";
import AddTask from "../components/AddTask";

const ManagerTasksScreen = ({ navigation }) => {
  const [isAddTaskVisible, setIsAddTaskVisible] = useState(false);

  const toggleAddTask = () => {
    setIsAddTaskVisible((prev) => !prev);
  };

  const handleFilterPress = () => {
    // Logic for filter button press
    console.log("Filter button pressed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tasks</Text>
        <TouchableOpacity
          onPress={handleFilterPress}
          style={styles.filterButton}
        >
          <FontAwesome name="filter" style={styles.filterIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <ManagerTasksList />
      </ScrollView>
      {isAddTaskVisible && <AddTask onClose={toggleAddTask} />}
      <TouchableOpacity style={styles.fab} onPress={toggleAddTask}>
        <Feather name="plus" style={styles.fabIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  filterButton: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#e0e0e0",
  },
  filterIcon: {
    fontSize: 24,
    color: "black",
  },
});

export default ManagerTasksScreen;
