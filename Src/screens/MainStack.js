import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import ActivityScreen from "./ActivityScreen";
import SearchScreen from "./SearchScreen";
import ProfileScreen from "./ProfileScreen";
import { MaterialIcons, Entypo, Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CreatePostScreen from "./CreatePostScreen";

const Tab = createBottomTabNavigator();

export function MainStackScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [lastActiveTab, setLastActiveTab] = useState("Home");
  const [activeTab, setActiveTab] = useState("Home");

  const openCreatePostModal = (tabName) => {
    setLastActiveTab(tabName);
    setActiveTab(tabName);
    setIsModalVisible(true);
  };

  const closeCreatePostModal = () => {
    setIsModalVisible(false);
  };

  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", (e) => {
      setLastActiveTab(activeTab);
      openCreatePostModal(activeTab);
    });

    return unsubscribe;
  }, [navigation, activeTab]);

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: [{ display: "flex" }, null],
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
          name="Post"
          component={CreatePostScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Entypo name="new-message" size={24} color="gray" />
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
      {isModalVisible && (
        <CreatePostScreen
          isModalVisible={isModalVisible}
          closeCreatePostModal={closeCreatePostModal}
          activeTab={lastActiveTab}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
