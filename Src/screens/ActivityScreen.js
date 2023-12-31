import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import users from "../../assets/data/user";
import { styles } from "../styles/styles";
const links = [
  { name: "All" },
  { name: "Follows" },
  { name: "Replies" },
  { name: "Mentions" },
  { name: "Quotes" },
  { name: "Reposts" },
  { name: "Verified" },
];

export default function ActivityScreen() {
  const [activeButton, setActiveButton] = useState("All");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <View style={styles.actContainer}>
      <Text style={styles.activityHeader}>Activity</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.linksContainer}
      >
        {links.map((item) => (
          <TouchableOpacity
            key={item.name}
            style={[
              styles.activityBtn,
              activeButton === item.name && styles.activeButton,
            ]}
            onPress={() => handleButtonClick(item.name)}
          >
            <Text
              style={[
                styles.btnText,
                activeButton === item.name && styles.activeButtonText,
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.notification}>
        <Octicons
          name="bell"
          size={24}
          color="black"
          style={styles.notificationIcon}
        />
        <Text style={styles.notificationText}>
          Get notified when people follow you and like or reply to your posts.
        </Text>
        <TouchableOpacity style={styles.notificationBtn}>
          <Text>Turn On</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {activeButton === "All" &&
          
          users.map((user, index) => (
            <View key={index} style={styles.userContainer}>
              <Image
                source={{ uri: user.profileImage }}
                style={styles.profileImage}
              />
              <View style={styles.userdetails}>
                <View style={styles.usern}>
                  <Text style={styles.username}>{user.username}</Text>
                  <Text style={styles.followDay}>{user.followDay} ago</Text>
                </View>
                <Text>{user.status}</Text>
              </View>
              <TouchableOpacity style={styles.followBtn}>
                <Text style={styles.followBtnText}>Follow</Text>
              </TouchableOpacity>
            </View>
          ))}
       
      </ScrollView>
    </View>
  );
}
