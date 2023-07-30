import React from "react";
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
  return (
    <View style={styles.actContainer}>
      <Text style={styles.activityHeader}>Activity</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.linksContainer}
      >
        {links.map((item) => (
          <TouchableOpacity key={item.name} style={styles.activityBtn}>
            <Text style={styles.btnText}>{item.name} </Text>
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
          <Text style={styles.notText}>Turn On</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {users.map((user, index) => (
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

const styles = StyleSheet.create({
  actContainer: {
    marginTop: 50,
  },
  activityHeader: {
    fontSize: 40,
    fontWeight: "700",
    marginHorizontal: 10,
  },
  linksContainer: {
    marginLeft: 10,
  },
  activityBtn: {
    borderWidth: 1,
    paddingHorizontal: 25,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 10,
    marginVertical: 10,
    width: 120,
    alignItems: "center",
  },
  btnText: {
    fontWeight: "600",
  },
  notification: {
    flexDirection: "row",
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 15,
    paddingBottom: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  notificationIcon: {},
  notificationText: {
    width: 200,
    paddingHorizontal: 10,
  },
  notificationBtn: {
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  userdetails: {},
  usern: {
    flexDirection: "row",
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    marginHorizontal:10
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  username: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  followDay:{
color:'gray',
paddingHorizontal:10
  },
  followBtn: {
    borderWidth: 1,
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderRadius: 10,
    marginLeft: "auto",
    
  },
  followBtnText:{
    fontWeight:'600'
  }
});
