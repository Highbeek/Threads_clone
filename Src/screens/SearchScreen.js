import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const followers = [
  {
    profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
    username: "user1",
    name: "John Doe",
    noOfFollowers: "1.5k",
  },
  {
    profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
    username: "user2",
    name: "Jane Smith",
    noOfFollowers: "2.3k",
  },
  {
    profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
    username: "user3",
    name: "Michael Johnson",
    noOfFollowers: "3.2k",
  },
  {
    profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
    username: "user4",
    name: "Emily Parker",
    noOfFollowers: "5k",
  },
  {
    profileImage: "https://randomuser.me/api/portraits/women/5.jpg",
    username: "user5",
    name: "David Lee",
    noOfFollowers: "4.1k",
  },
];

export default function SearchScreen() {
  const [description, setDescription] = useState("");
  return (
    <View style={styles.searchContainer}>
      <View style={styles.SearchHeader}>
        <Text style={styles.searchText}>Search</Text>
      </View>
      <View style={styles.searchInput}>
        <EvilIcons name="search" size={24} color="gray" />
        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="Search"
          multiline
        />
      </View>
      <View style={styles.follows}>
        {followers.map((item) => (
          <View key={item.username}>
            <View style={styles.followerDetails}>
              <Image
                src={item.profileImage}
                style={styles.followerProfileImage}
              />
              <View style={styles.followDetails}>
                <Text style={styles.username}>{item.username} </Text>
                <Text style={styles.name}>{item.name}</Text>
                <Text>{item.noOfFollowers} followers </Text>
              </View>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}> Follow</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 50,
    marginHorizontal: 20,
  },
  header: {},
  searchText: {
    fontSize: 38,
    fontWeight: "900",
  },
  searchInput: {
    flexDirection: "row",
    marginVertical: 8,
    backgroundColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  follows: {},
  followDetails: {
    paddingLeft: 20,
  },
  followerDetails: {
    flexDirection: "row",
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  followerProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  username: {},
  name: {},
  btn: {
    borderWidth: StyleSheet.hairlineWidth,
    marginLeft: "auto",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 3,
    borderRadius: 10,
  },
});
