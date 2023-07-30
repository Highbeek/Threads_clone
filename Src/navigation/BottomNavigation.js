import React from "react";
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
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const isActiveScreen = (screenName) => {
    return navigation.isFocused(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigateToScreen("Home")}
        style={[
          styles.iconContainer,
          isActiveScreen("Home") ? styles.activeIconContainer : null,
        ]}
      >
        <Octicons name="home" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToScreen("Search")}
        style={[
          styles.iconContainer,
          isActiveScreen("Search") ? styles.activeIconContainer : null,
        ]}
      >
        <Octicons name="search" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToScreen("Create Post")}
        style={[
          styles.iconContainer,
          isActiveScreen("Create Post") ? styles.activeIconContainer : null,
        ]}
      >
        <Entypo name="new-message" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToScreen("Activity")}
        style={[
          styles.iconContainer,
          isActiveScreen("Activity") ? styles.activeIconContainer : null,
        ]}
      >
        <Ionicons name="heart-outline" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToScreen("Profile")}
        style={[
          styles.iconContainer,
          isActiveScreen("Profile") ? styles.activeIconContainer : null,
        ]}
      >
        <Ionicons name="person-outline" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 100,
    paddingBottom: 10,
    borderColor: "#ccc",
    backgroundColor: "transparent",
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  activeIconContainer: {
    backgroundColor: "transparent",
  },
});

export default BottomNavigation;
