import * as React from "react";
import { ScrollView, Text, View } from "react-native";
import HomePost from "../components/HomePost";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View>
        <HomePost />
        <HomePost />
        <HomePost />
      </View>
    </ScrollView>
  );
}
