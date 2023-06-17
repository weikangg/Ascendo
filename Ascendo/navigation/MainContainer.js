import * as React from "react";
import { View, Text, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./screens/HomeScreen";
import CommunityScreen from "./screens/CommunityScreen";
import GamesScreen from "./screens/GamesScreen";
import RewardsScreen from "./screens/RewardsScreen";
import TasksScreen from "./screens/TasksScreen";

const homeName = "Home";
const communityName = "Community";
const gamesName = "Games";
const rewardsName = "Rewards";
const tasksName = "Tasks";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === communityName) {
              iconName = focused ? "people" : "people-outline";
            } else if (rn === gamesName) {
              iconName = focused
                ? "game-controller"
                : "game-controller-outline";
            } else if (rn === rewardsName) {
              iconName = focused ? "card" : "card-outline";
            } else if (rn === tasksName) {
              iconName = focused ? "book" : "book-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            backgroundColor: "#469FD1",
            paddingTop: 10,
            height: 90,
          },
        })}
        tabBarOptions={{
          activeTintColor: "black",
          inactiveTintColor: "black",
          labelStyle: { paddingBottom: 0, fontSize: 11 },
        }}
      >
        <Tab.Screen
          name={rewardsName}
          component={RewardsScreen}
          options={{
            headerTitle: "Rewards",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold", // Adjust this as needed
              paddingBottom: 20,
            },
            headerRight: () => (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 20,
                }}
              >
                <Image
                  style={{ width: 30, height: 30 }} // Adjust size as necessary
                  source={require("../assets/rewards_page/profile-icon.png")} // profile icon source
                />
              </View>
            ),
          }}
        />
        <Tab.Screen name={tasksName} component={TasksScreen} />
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={gamesName} component={GamesScreen} />
        <Tab.Screen name={communityName} component={CommunityScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
