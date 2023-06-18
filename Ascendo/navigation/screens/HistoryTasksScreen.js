import * as React from "react";
import { View, StyleSheet } from "react-native";
import HistoryTasksList from "../components/TasksList";

export default function HistoryTasksScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <HistoryTasksList />
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
