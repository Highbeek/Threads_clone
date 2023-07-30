import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import {
  AntDesign,
  Fontisto,
  Entypo,
  Octicons,
  Ionicons,
} from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const BottomNavigation = () => {
  const [activeTab, setActiveTab] = useState("Home");
  
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
    setActiveTab(screenName); 
  };

  const bottomTabStyle = (tabName) => ({
    color: activeTab === tabName ? "black" : "gray",
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigateToScreen("Home")}
        style={styles.iconContainer}
      >
        <Octicons name="home" size={24} color={bottomTabStyle("Home").color} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToScreen("Search")}
        style={styles.iconContainer}
      >
        <Octicons
          name="search"
          size={24}
          color={bottomTabStyle("Search").color}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToScreen("Create Post")}
        style={styles.iconContainer}
      >
        <Entypo
          name="new-message"
          size={24}
          color={bottomTabStyle("Create Post").color}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToScreen("Activity")}
        style={styles.iconContainer}
      >
        <Ionicons
          name="heart-outline"
          size={24}
          color={bottomTabStyle("Activity").color}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToScreen("Profile")}
        style={styles.iconContainer}
      >
        <Ionicons
          name="person-outline"
          size={24}
          color={bottomTabStyle("Profile").color}
  
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    paddingTop:15,
    height: 80,
    paddingBottom: 10,
    borderColor: "#ccc",
    backgroundColor: "transparent",
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "transparent",
  },
});

export default BottomNavigation;
