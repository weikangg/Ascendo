import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import CommunityScreen from "./CommunityScreen";
import GamesScreen from "./GamesScreen";
import RewardsScreen from "./RewardsScreen";
import TasksScreen from "./TasksScreen";

const communityName = "Community";
const gamesName = "Games";
const rewardsName = "Rewards";
const tasksName = "Tasks";

export default function HomeScreen({ navigation }) {
  const handleFeaturePress = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Getting Started</Text>
          <Text style={styles.subtitle}>
            To get you started with your journey with us, we’ve provided a few
            instructions on how to get the most from Ascendo
          </Text>
          <View style={styles.horizontalLine} />

          {/* Features Section */}
          <TouchableOpacity
            style={styles.features}
            onPress={() => navigation.navigate("Rewards")}
          >
            <Ionicons name="card" size={35} color="black" />
            <View style={styles.containerText}>
              <View style={styles.topView}>
                <Text style={styles.text}>Rewards</Text>
              </View>
              <View style={styles.bottomView}>
                <Text>
                  Redeem valuable discounts and vouchers with your points!
                </Text>
              </View>
            </View>
            <Ionicons name="chevron-forward-outline" size={24} color="black" />
          </TouchableOpacity>

          <View style={styles.horizontalLine} />

          <TouchableOpacity
            style={styles.features}
            onPress={() => navigation.navigate("Tasks")}
          >
            <Ionicons name="book" size={35} color="black" />
            <View style={styles.containerText}>
              <View style={styles.topView}>
                <Text style={styles.text}>Tasks</Text>
              </View>
              <View style={styles.bottomView}>
                <Text>
                  Complete daily quest and challenges to collect your points!
                </Text>
              </View>
            </View>
            <Ionicons name="chevron-forward-outline" size={24} color="black" />
          </TouchableOpacity>

          <View style={styles.horizontalLine} />
          <TouchableOpacity
            style={styles.features}
            onPress={() => navigation.navigate("Games")}
          >
            <Ionicons name="game-controller" size={35} color="black" />
            <View style={styles.containerText}>
              <View style={styles.topView}>
                <Text style={styles.text}>Games</Text>
              </View>
              <View style={styles.bottomView}>
                <Text>
                  Play games with your team to earn points and rewards today!
                </Text>
              </View>
            </View>
            <Ionicons name="chevron-forward-outline" size={24} color="black" />
          </TouchableOpacity>

          <View style={styles.horizontalLine} />
          <TouchableOpacity
            style={styles.features}
            onPress={() => navigation.navigate("Community")}
          >
            <Ionicons name="people" size={35} color="black" />
            <View style={styles.containerText}>
              <View style={styles.topView}>
                <Text style={styles.text}>Community</Text>
              </View>
              <View style={styles.bottomView}>
                <Text>
                  Connect with people within or outside your department!
                </Text>
              </View>
            </View>
            <Ionicons name="chevron-forward-outline" size={24} color="black" />
          </TouchableOpacity>

          <View style={styles.horizontalLine} />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "95%",
    left: 10,
    top: 10,
  },
  title: {
    fontFamily: "System",
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 29,
    color: "#000000",
    bottom: 5,
  },
  subtitle: {
    position: "relative",
    width: 320,
    fontFamily: "System",
    fontWeight: "600",
    lineHeight: 15,
    color: "#000000",
    bottom: 10,
    top: 10,
    marginBottom: 20,
  },
  horizontalLine: {
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
  },
  features: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    width: "100%",
    height: 120, // Adjust the height as needed
    padding: 16,
    borderColor: "#000000",
  },
  containerText: {
    flex: 1,
    padding: 8,
  },
  topView: {
    flex: 0.5,
    // Add additional styles for the top view
    borderColor: "#000000",
    // borderWidth: 1,
  },
  bottomView: {
    flex: 1,
    // Add additional styles for the bottom view
    borderColor: "#000000",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
