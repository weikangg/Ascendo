import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
  Image,
  Linking,
  RefreshControl,
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import Picture from "../../assets/rewards_page/ascendo_logo.png";
import { SwipeListView } from "react-native-swipe-list-view";

const TasksList = ({ navigation }) => {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [expandedTaskId, setExpandedTaskId] = useState(null);
  const [tasks, setTasks] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setRefreshing(true);
      const response = await fetch(
        "https://iwbybrwtpe.execute-api.ap-southeast-1.amazonaws.com/tasks"
      );

      if (response.ok) {
        const data = await response.json();
        setTasks(data);
      } else {
        throw new Error("Request failed with status code " + response.status);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setRefreshing(false);
    }
  };

  const addToCalendar = () => {
    // Logic to open the user's calendar app
    Linking.openURL("calshow:");
  };

  const toggleTaskCompletion = (taskId) => {
    if (completedTasks.includes(taskId)) {
      setCompletedTasks(completedTasks.filter((id) => id !== taskId));
    } else {
      setCompletedTasks([...completedTasks, taskId]);
    }
  };

  const toggleTaskExpansion = (taskId) => {
    if (expandedTaskId === taskId) {
      setExpandedTaskId(null);
    } else {
      setExpandedTaskId(taskId);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      // Send a DELETE request to your API to delete the task with the specified ID
      await fetch(
        `https://iwbybrwtpe.execute-api.ap-southeast-1.amazonaws.com/tasks/${taskId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Update the tasks state by removing the deleted task
      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error(error);
    }
  };

  const renderTaskItem = ({ item }) => {
    const isExpanded = item.id === expandedTaskId;

    return (
      <View
        style={[
          styles.taskContainer,
          completedTasks.includes(item.id) && styles.completedTaskContainer,
        ]}
      >
        <TouchableOpacity onPress={() => toggleTaskExpansion(item.id)}>
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

          {isExpanded && (
            <Animated.View style={styles.expandedContent}>
              <View style={styles.row}>
                <FontAwesome name="user" style={styles.additionalInfoIcon} />
                <Text style={styles.additionalInfoText}>{item.person}</Text>
              </View>
              <View style={styles.row}>
                <FontAwesome name="flag" style={styles.additionalInfoIcon} />
                <View style={styles.priorityContainer}>
                  <Text style={styles.priorityText}>{item.priority}</Text>
                </View>
              </View>
              <Image source={Picture} style={styles.image} />
            </Animated.View>
          )}
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
        </TouchableOpacity>
      </View>
    );
  };

  const renderSwipeableItem = ({ item }) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteTask(item.id)}
      >
        <FontAwesome name="trash" style={styles.deleteIcon} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <SwipeListView
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTaskItem}
        contentContainerStyle={styles.contentContainer}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={fetchTasks}
            colors={["#469FD1"]}
          />
        }
        renderHiddenItem={renderSwipeableItem}
        rightOpenValue={-80} // Width of the delete button
        disableRightSwipe={true} // Disable right swipe on list items
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
  expandedContent: {
    marginTop: 8,
  },
  additionalInfo: {
    fontSize: 14,
    marginBottom: 4,
  },
  additionalInfoIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  additionalInfoText: {
    fontSize: 16,
  },
  priorityContainer: {
    backgroundColor: "lightgrey",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  priorityText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 8,
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#ff0000",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 15,
    borderRadius: 8,
    padding: 20,
    marginBottom: 16,
    marginLeft: 15,
    width: "95%",
  },
  deleteButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    borderRadius: 8,
    padding: 20,
    marginBottom: 16,
  },
  deleteIcon: {
    color: "#ffffff",
    fontSize: 24,
  },
});

export default TasksList;
