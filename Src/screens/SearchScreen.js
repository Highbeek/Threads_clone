import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { styles } from "../styles/styles";

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
  const [scrollY, setScrollY] = useState(0);
  const [isSearchHidden, setIsSearchHidden] = useState(false);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;
    setScrollY(scrollPosition);
    setIsSearchHidden(scrollPosition > 10 && description === "");
  };

  return (
    <View style={styles.searchContainer}>
      <View style={[styles.SearchHeader, { opacity: isSearchHidden ? 0 : 1 }]}>
        <Text style={styles.searchText}>Search</Text>
      </View>
      <View
        style={[styles.searchInput, isSearchHidden && styles.fixedSearchInput]}
      >
        <EvilIcons name="search" size={24} color="gray" />
        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="Search"
        />
      </View>
      <ScrollView
        style={styles.follows}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {followers.map((item) => (
          <View key={item.username}>
            <View style={styles.followerDetails}>
              <Image
                source={{ uri: item.profileImage }}
                style={styles.followerProfileImage}
              />
              <View style={styles.followDetails}>
                <Text style={styles.username}>{item.username}</Text>
                <Text style={styles.name}>{item.name}</Text>
                <Text>{item.noOfFollowers} followers</Text>
              </View>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Follow</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

