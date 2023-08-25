import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Fontisto, Entypo } from "@expo/vector-icons";
import menu from "../../assets/menu.png";
import { useRouter, Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import ThreadsTab from "../components/ThreadsTab";
import RepliesTab from "../components/RepliesTab";
import { styles } from "../styles/styles";
import { useSelector } from "react-redux";



export default function ProfileScreen() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Threads");

   const user = useSelector((state) => state.user.user);

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const pageTitleStyle = (tabName) => ({
    fontSize: 18,
    fontWeight: "600",
    color: activeTab === tabName ? "black" : "gray",
  });

  const router = useRouter();

  const gotoHome = router;

  return (
    <View style={styles.container}>
      <View style={styles.headerIcon}>
        <Fontisto name="world-o" size={20} color="black" />
        <View style={styles.iconRight}>
          <Entypo name="instagram" size={20} color="black" />
          <Image source={menu} style={styles.menuIcon} />
        </View>
      </View>
      <View style={styles.profile}>
        <View style={styles.profileText}>
          <Text style={styles.profileUsername}>{user.threadUsername} </Text>
          <Text style={styles.threadUsername}>{user.username} </Text>
          <Text style={styles.bio}>Simplicity Speaks Volume</Text>
        </View>
        <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
      </View>
      <View style={styles.profileFooter}>
        <Image source={{ uri: user.profileImage }} style={styles.footerImage} />

        <View style={styles.img2Container}>
          <Image source={{ uri: user.profileImage }} style={styles.footerImage} />
        </View>
        <View style={styles.img3Container}>
          <Image source={{ uri: user.profileImage }} style={styles.footerImage} />
        </View>
        <Text style={styles.footerText}>48 followers</Text>
      </View>
      <View style={styles.profileBtn}>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Edit profile</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Share profile</Text>
        </Pressable>
      </View>
      <View style={styles.profilePage}>
        <Pressable onPress={() => handleTabPress("Threads")}>
          <Text style={pageTitleStyle("Threads")}>Threads</Text>
        </Pressable>
        <Pressable onPress={() => handleTabPress("Replies")}>
          <Text style={pageTitleStyle("Replies")}>Replies</Text>
        </Pressable>
      </View>
      {activeTab === "Threads" ? <ThreadsTab /> : <RepliesTab />}
    </View>
  );
}
