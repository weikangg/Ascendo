import * as React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./screens/HomeScreen";
import CommunityScreen from "./screens/CommunityScreen";
import GamesScreen from "./screens/GamesScreen";
import RewardsScreen from "./screens/RewardsScreen";
import RewardsDetailScreen from "./screens/RewardsDetailScreen";
import TasksScreen from "./screens/TasksScreen";
import ProfileScreen from "./screens/ProfileScreen";
import GameIntroScreen from "./screens/GameIntroScreen";
import CharadesScreen from "./screens/CharadesScreen";

const homeName = "Home";
const communityName = "Community";
const gamesName = "Games";
const rewardsName = "Rewards";
const tasksName = "Tasks";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const headerOptions = {
  headerTitleAlign: "center",
  headerTitleStyle: {
    fontWeight: "bold", // Adjust this as needed
    paddingBottom: 20,
  },
};

const ProfileIcon = ({ navigation }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      marginRight: 20,
    }}
  >
    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
      <Image
        style={{ width: 30, height: 30, marginBottom: 10 }}
        source={require("../assets/rewards_page/profile-icon.png")}
      />
    </TouchableOpacity>
  </View>
);

export default function MainContainer() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulating an asynchronous task
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#469FD1" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigatorScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerTitle: "Profile", headerBackTitle: "Back" }}
        />
        <Stack.Screen
          name="GameIntro"
          component={GameIntroScreen}
          options={{ headerTitle: "Game Of The Day", headerBackTitle: "Back" }}
        />
        <Stack.Screen
          name="Charades"
          component={CharadesScreen}
          options={{ headerTitle: "Charades", headerBackTitle: "Back" }}
        />
        <Stack.Screen
          name="RewardDetail"
          component={RewardsDetailScreen}
          options={({ navigation }) => ({
            headerTitle: 'Reward Detail',
            headerBackTitle: "Back",
            headerRight: () => <ProfileIcon navigation={navigation}/>,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const TabNavigatorScreen = () => {
  const navigation = useNavigation();

  return (
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
            iconName = focused ? "game-controller" : "game-controller-outline";
          } else if (rn === rewardsName) {
            iconName = focused ? "card" : "card-outline";
          } else if (rn === tasksName) {
            iconName = focused ? "book" : "book-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "black",
        tabBarLabelStyle: {
          paddingBottom: 10,
          fontSize: 11,
        },
        tabBarStyle: {
          backgroundColor: "#469FD1",
          paddingTop: 10,
          height: 90,
        },
      })}
    >
      <Tab.Screen
        name={rewardsName}
        component={RewardsScreen}
        options={{
          ...headerOptions,
          headerTitle: "Rewards",
          headerRight: () => <ProfileIcon navigation={navigation} />,
        }}
      />
      <Tab.Screen
        name={tasksName}
        component={TasksScreen}
        options={{
          ...headerOptions,
          headerTitle: "Tasks",
          headerRight: () => <ProfileIcon navigation={navigation} />,
        }}
      />
      <Tab.Screen
        name={homeName}
        component={HomeScreen}
        options={{
          ...headerOptions,
          headerTitle: "Home",
          headerRight: () => <ProfileIcon navigation={navigation} />,
        }}
      />
      <Tab.Screen
        name={gamesName}
        component={GamesScreen}
        options={{
          ...headerOptions,
          headerTitle: "Games",
          headerRight: () => <ProfileIcon navigation={navigation} />,
        }}
      />
      <Tab.Screen
        name={communityName}
        component={CommunityScreen}
        options={{
          ...headerOptions,
          headerTitle: "Community",
          headerRight: () => <ProfileIcon navigation={navigation} />,
        }}
      />
    </Tab.Navigator>
  );
};
