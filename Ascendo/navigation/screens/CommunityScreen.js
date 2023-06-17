import * as React from "react";
import { ScrollView, Text, View } from "react-native";
import CommunityPost from "../components/CommunityPost";

export default function CommunityScreen({ navigation }) {
  return (
    <ScrollView>
      <View>
        <CommunityPost />
        <CommunityPost />
        <CommunityPost />
      </View>
    </ScrollView>
  );
}
