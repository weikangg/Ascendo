import React from "react";
import {
  FlatList,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RewardsTag } from "../components/RewardsTag";
import IndividualReward from "../components/IndividualReward";

export default function RewardsScreen({ navigation }) {
  const tags = [
    "Time-off",
    "Development",
    "Wellness",
    "Financial",
    "Health",
    "Benefits",
    "Others",
  ];

  // A sample function to handle tag press
  const handleTagPress = (tag) => {
    console.log(`Tag ${tag} was pressed.`);
    // Here you can call your function to filter the rewards
  };

  const rewards = [
    {
      image: require("../../assets/rewards_page/paid-time-off-reward.png"), // Replace with actual image
      points: 200,
      features: [
        {
          icon: "clock", // Replace with actual icon
          text: "13:00 - 17:30",
        },
      ],
    },
    {
      image: require("../../assets/rewards_page/paid-time-off-reward.png"), // Replace with actual image
      points: 400,
      features: [
        {
          icon: "clock", // Replace with actual icon
          text: "1 month subscription",
        },
      ],
    },
    {
      image: require("../../assets/rewards_page/paid-time-off-reward.png"), // Replace with actual image
      points: 800,
      features: [
        {
          icon: "book", // Replace with actual icon
          text: "2 free courses",
        },
      ],
    },
    {
      image: require("../../assets/rewards_page/paid-time-off-reward.png"), // Replace with actual image
      points: 1500,
      features: [
        {
          icon: "dollar-sign", // Replace with actual icon
          text: "$150 grabfood credits",
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.rewardBox}>
        <Image
          style={styles.companyLogo}
          source={require("../../assets/rewards_page/ascendo_logo.png")}
        />
        <TouchableOpacity
          style={styles.qrCode}
          onPress={() => navigation.navigate("YourQRScreenRoute")}
        >
          <Image
            style={styles.qrCodeImage}
            source={require("../../assets/rewards_page/qrcode.png")}
          />
          <Text style={styles.qrCodeText}>User QR Code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoIcon}>
          <Ionicons name="information-circle-outline" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.points}>
          <Text style={styles.pointsText}>Points</Text>
          <Text style={styles.pointsValue}>537</Text>
        </View>
      </View>
      <ScrollView horizontal style={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <RewardsTag
            key={index}
            title={tag}
            onPress={() => handleTagPress(tag)}
          />
        ))}
      </ScrollView>
      <FlatList
        contentContainerStyle={styles.rewardsList}
        data={rewards}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        renderItem={({ item }) => <IndividualReward reward={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20, // Add some padding at the top to accommodate the title
  },
  profileIcon: {
    position: "absolute",
    right: 16,
    top: 16,
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  rewardBox: {
    marginTop: 20,
    width: 339,
    height: 255,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "rgba(220, 220, 220, 0.5)",
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingVertical: 16,
    elevation: 4, // for Android
    shadowColor: "#000", // for iOS
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    alignItems: "flex-start",
    alignSelf: "center",
  },
  companyLogo: {
    position: "absolute",
    width: 72,
    height: 46,
    left: 15,
    top: 19,
  },
  qrCode: {
    position: "absolute",
    width: 112,
    height: 112,
    left: 113,
    top: 58,
    alignItems: "center", // to center the QR code text
    justifyContent: "center",
  },
  qrCodeImage: {
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderColor: "#000000",
  },
  qrCodeText: {
    fontFamily: "System",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 18,
    textAlign: "center",
    color: "#000000",
    position: "absolute",
    bottom: -20, // position the text below the QR code image
  },
  infoIcon: {
    position: "absolute",
    right: 24,
    top: 18,
  },
  points: {
    position: "absolute",
    left: 15,
    bottom: 16,
  },
  pointsText: {
    fontFamily: "System",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 15,
    lineHeight: 18,
    color: "#000000",
  },
  pointsValue: {
    fontFamily: "System",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 18,
    color: "#000000",
  },
  tagsContainer: {
    maxHeight: 60, // Adjust as needed
    marginTop: 20,
  },
  rewardsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20, // Adjust as needed
  },
});
