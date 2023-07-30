import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Fontisto, Entypo } from "@expo/vector-icons";
import menu from "../../assets/menu.png";
import { useRouter, Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import ThreadsTab from "../components/ThreadsTab";
import RepliesTab from "../components/RepliesTab";

const profileImage = "https://randomuser.me/api/portraits/women/9.jpg";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Threads");



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
    <View style={styles.profileContainer}>
      <View style={styles.headerIcon}>
        <Fontisto name="world-o" size={20} color="black" />
        <View style={styles.iconRight}>
          <Entypo name="instagram" size={20} color="black" />
          <Image source={menu} style={styles.menuIcon} />
        </View>
      </View>
      <View style={styles.profile}>
        <View style={styles.profileText}>
          <Text style={styles.profileUsername}>Ibk</Text>
          <Text style={styles.threadUsername}>highbeek</Text>
          <Text style={styles.bio}>Simplicity Speaks Volume</Text>
        </View>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
      </View>
      <View style={styles.profileFooter}>
        <Image source={{ uri: profileImage }} style={styles.footerImage} />

        <View style={styles.img2Container}>
          <Image source={{ uri: profileImage }} style={styles.footerImage} />
        </View>
        <View style={styles.img3Container}>
          <Image source={{ uri: profileImage }} style={styles.footerImage} />
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

const styles = StyleSheet.create({
  profileContainer: {
    marginTop: 50,
  },
  headerIcon: {
    flexDirection: "row",
    marginHorizontal: 15,
  },
  iconRight: {
    marginLeft: "auto",
    flexDirection: "row",
    gap: 10,
  },
  menuIcon: {
    width: 18,
    height: 18,
  },
  profile: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginTop: 30,
  },
  profileText: {
    gap: 10,
  },
  profileImage: {
    width: 65,
    height: 65,
    borderRadius: 50,
  },
  profileUsername: {
    fontSize: 24,
    fontWeight: "700",
  },
  profileFooter: {
    flexDirection: "row",
    position: "relative",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 15,
  },
  footerImage: {
    width: 20,
    height: 20,
    borderRadius: 50,
    alignItems: "center",
  },
  img2Container: {
    width: 24,
    height: 24,
    borderRadius: 50,
    position: "absolute",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    left: 15,
  },
  img3Container: {
    width: 24,
    height: 24,
    borderRadius: 50,
    position: "absolute",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    left: 30,
  },
  footerText: {
    color: "gray",
    marginLeft: 50,
    fontSize: 17,
  },
  profileBtn: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 15,
  },
  btn: {
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    width: 165,
  },
  btnText: {
    fontWeight: "600",
  },
  profilePage: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 20,
    paddingBottom: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "gray",
  },
  // pageTitle: {
  //   fontSize: 18,
  //   fontWeight: "600",
  //   color: activeTabColor,
  // },
});
