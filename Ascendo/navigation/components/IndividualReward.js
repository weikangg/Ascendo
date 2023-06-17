import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function IndividualReward({ reward }) {
  return (
    <View style={styles.container}>
      <Image style={styles.rewardImage} source={reward.image} />
      <View style={styles.pointsBadge}>
        <Text style={styles.pointsText}>{reward.points}</Text>
      </View>
      <View style={styles.separator} />
      {reward.features.map((feature, index) => (
        <View key={index} style={styles.rewardInfo}>
          <Icon name={feature.icon} size={10} color="#000" />
          <Text style={styles.featureText}>{feature.text}</Text>
        </View>
      ))}
      <View style={styles.terms}>
        <Icon name="file-alt" size={10} color="#000" />
        <Text style={styles.termsText}>Terms & Conditions apply</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "45%", // To adjust size with numColumns
    height: 148,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#BCBEC0",
    borderRadius: 10,
    marginBottom: 20,
    marginRight: 20,
    padding: 10,
    alignItems: "center",
  },
  rewardImage: {
    position: "absolute",
    width: 145,
    height: 108,
    marginLeft: 37, // According to Figma
    marginTop: 3, // Adjust as needed
  },
  pointsBadge: {
    position: "absolute",
    width: 37,
    height: 19,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    top: 108 - 19 / 2,
    left: 7, // Adjust as needed
  },
  pointsText: {
    fontSize: 11,
  },
  separator: {
    position: "absolute",
    width: 151, // According to Figma
    height: 1,
    backgroundColor: "rgba(134, 134, 134, 0.54)",
    marginLeft: 33, // According to Figma
    marginTop: 110, // Adjust as needed
  },
  rewardInfo: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 52, // According to Figma
    marginTop: 114, // Adjust as needed
  },
  featureText: {
    fontSize: 10,
    marginLeft: 5,
  },
  terms: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 128, // Adjust as needed
    marginLeft: 52, // According to Figma
  },
  termsText: {
    fontSize: 10,
    marginLeft: 5,
  },
});
