import React from "react";
import { View, Text, Image, ScrollView, FlatList } from "react-native";
import posts from "../../assets/data/posts.json";
import { styles } from "../styles/styles";
import FeedPost from "../components/FeedPost";

export default function HomeScreen() {
  if (!posts || posts.length === 0) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.homeContainer}>
      <FlatList
        data={posts.users}
        renderItem={({ item }) => <FeedPost post={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
