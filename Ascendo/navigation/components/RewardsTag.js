import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export const RewardsTag = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.tag}>
      <Text style={styles.tagText}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  tag: {
    paddingHorizontal: 12, // Horizontal padding
    paddingVertical: 2,
    height: 38, // Explicit height
    justifyContent: "center", // Center the text vertically
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 20, // Use a large radius to get the rounded effect
    marginHorizontal: 5, // Add some margin to separate the tags
  },
  tagText: {
    fontSize: 16, // Adjust as needed
  },
});
