import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ActivityScreen from "../screens/ActivityScreen";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CreatePostScreen from "../screens/CreatePostScreen";
import {
  MaterialIcons,
  Entypo,
  Ionicons,
  Octicons,
  Feather,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function MainStackScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialIcons name="home-filled" size={24} color="black" />
            ) : (
              <Feather name="home" size={24} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Feather
              name="search"
              size={24}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="new-message"
              size={24}
              color="gray"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "ios-heart" : "heart-outline"}
              size={24}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={24}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
