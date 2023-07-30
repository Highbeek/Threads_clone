import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import posts from "../../assets/data/posts.json";
import { styles } from "../styles/styles";
import FeedPost from "../components/FeedPost";
import LogoHeader from "../components/LogoHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Following from "../components/Following";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("For You");

  // Function to handle tab press
  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  if (!posts || posts.length === 0) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <LogoHeader />
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          onPress={() => handleTabPress("For You")}
          style={[
            styles.tab,
            activeTab === "For You" && styles.activeTab,
            { borderBottomColor: activeTab === "For You" ? "black" : "gray" },
          ]}
        >
          <Text
            style={
              activeTab === "For You" ? styles.activeTabText : styles.tabText
            }
          >
            For You
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTabPress("Following")}
          style={[
            styles.tab,
            activeTab === "Following" && styles.activeTab,
            { borderBottomColor: activeTab === "Following" ? "black" : "gray" },
          ]}
        >
          <Text
            style={
              activeTab === "Following" ? styles.activeTabText : styles.tabText
            }
          >
            Following
          </Text>
        </TouchableOpacity>
      </View>
      {activeTab === "For You" ? (
        <FlatList
          data={posts.users}
          renderItem={({ item }) => <FeedPost post={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Following />
      )}
    </SafeAreaView>
  );
}



