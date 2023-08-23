// index
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Src/screens/HomeScreen";
import ActivityScreen from "./Src/screens/ActivityScreen";
import SearchScreen from "./Src/screens/SearchScreen";
import ProfileScreen from "./Src/screens/ProfileScreen";
import CreatePostScreen from "./Src/screens/CreatePostScreen";
import BottomNavigation from "./Src/navigation/BottomNavigation";
import LogoHeader from "./Src/components/LogoHeader";
import { Provider } from "react-redux";
import { store } from "./store";

export default function Index() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store} style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Create Post"
            component={CreatePostScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Activity"
            component={ActivityScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        <BottomNavigation />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomNavigation: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
  },
});
