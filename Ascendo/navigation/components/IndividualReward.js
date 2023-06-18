import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function IndividualReward({ reward, navigation }) {
  return (
    <TouchableOpacity
      style={styles.container} // Add this line
      onPress={() =>
        navigation.navigate("RewardDetail", {
          image: reward.image,
          featureText: reward.features[0].text,
          pointsRequired: reward.points
        })
      }
    >
      <Image
        style={styles.rewardImage}
        source={reward.image}
        resizeMode="contain"
      />
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
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "45%",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#BCBEC0",
    borderRadius: 10,
    marginVertical: 5,
    padding: 10,
    alignItems: "flex-start",
  },
  rewardImage: {
    width: "100%",
    height: 108,
    marginBottom: 5,
    alignSelf: "center",
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
    left: 7,
  },
  pointsText: {
    fontSize: 11,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(134, 134, 134, 0.54)",
    marginVertical: 10,
  },
  rewardInfo: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  featureText: {
    fontSize: 10,
    marginLeft: 5,
  },
  terms: {
    flexDirection: "row",
    marginTop: 5,
  },
  termsText: {
    fontSize: 10,
    marginLeft: 5,
  },
});
