import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const TasksList = ({ navigation }) => {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [expandedTaskId, setExpandedTaskId] = useState(null);

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

  // Dummy task data for testing
  const tasks = [
    {
      id: 1,
      title: "Task 1",
      duration: "3h 30min",
      document: "Main Website",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu...",
      person: "Technical Lead, Chong Wei Kang",
      priority: "High Priority",
      image: require("../../assets/rewards_page/ascendo_logo.png"),
    },
    {
      id: 2,
      title: "Task 2",
      duration: "2h 30min",
      document: "Main Website",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu...",
      person: "Software Engineer, John Doe",
      priority: "Medium Priority",
      image: require("../../assets/rewards_page/ascendo_logo.png"),
    },
    {
      id: 3,
      title: "Task 3",
      duration: "8h 30min",
      document: "Main Website",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu...",
      person: "UI/UX Engineer, Soqoro",
      priority: "Lowest Priority",
      image: require("../../assets/rewards_page/ascendo_logo.png"),
    },
    {
      id: 4,
      title: "Task 4",
      duration: "1h 30min",
      document: "Contact Us",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu...",
      person: "Frontend Engineer, Tan Kane",
      priority: "Lowest Priority",
      image: require("../../assets/rewards_page/ascendo_logo.png"),
    },
  ];

  const addToCalendar = () => {
    // Logic to open the user's calendar app
  };

  const TaskItem = ({ item }) => {
    const isExpanded = item.id === expandedTaskId;

    return (
      <View
        style={[
          styles.taskContainer,
          completedTasks.includes(item.id) && styles.completedTaskContainer,
        ]}
      >
        <TouchableOpacity
          onPress={() => toggleTaskExpansion(item.id)}
          activeOpacity={0.8}
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
        </TouchableOpacity>
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
            <Image source={item.image} style={styles.image} />
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
            <Text style={styles.addToCalendarButtonText}>Add to Calendar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TaskItem item={item} />}
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
});

export default TasksList;
