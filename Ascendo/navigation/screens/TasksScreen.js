import * as React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import TasksList from "../components/TasksList";

// const TasksListScreen = () => {
//   return (
//     <View style={styles.container}>
//       <TasksList />
//     </View>
//   );
// };

// export default TasksScreen;

export default function TasksScreen({ navigation }) {
  return (
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //   <Text
    //     onPress={() => navigation.navigate("Home")}
    //     style={{ fontSize: 26, fontWeight: "bold" }}
    //   >
    //     Tasks
    //   </Text>
    // </View>
    <View style={styles.container}>
      <TasksList />
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
});
