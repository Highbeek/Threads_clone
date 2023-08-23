import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import {
  Ionicons,
  Entypo,
  Feather,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import share from "../../assets/share.png";

export default function FeedPost({ post }) {
  const hasImageOrDescription = post.image || post.description;

  return (
    <View style={styles.container}>
      <View style={styles.post}>
        <View style={styles.profile}>
          <Image
            source={{ uri: post.User.image }}
            style={styles.profileImage}
          />
          <View style={styles.followContainer}>
            <MaterialIcons
              name="add-circle"
              size={24}
              color="black"
              style={styles.followIcon}
            />
          </View>
          {hasImageOrDescription ? <View style={styles.line} /> : null}
          <View style={styles.response}>
            <View style={styles.responseProfileContainer}>
              <Image
                source={{ uri: post.User.image }}
                style={[
                  styles.responseProfile,
                  { height: 18, width: 18, top: 20 },
                ]}
              />
              <Image
                source={{ uri: post.User.image }}
                style={[
                  styles.responseProfile,
                  { height: 20, width: 20, top: 5, right: 10 },
                ]}
              />
              <Image
                source={{ uri: post.User.image }}
                style={[
                  styles.responseProfile,
                  { height: 16, width: 16, bottom: 0, right: 40, top: 30 },
                ]}
              />
            </View>
            <View style={styles.likesAndReplies}>
              <Text style={{ color: "gray" }}>
                {post.numberOfReplies} replies
              </Text>
              <Text style={{ color: "gray" }}>{post.numberOfLikes} likes</Text>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.profileDetails}>
            <Text style={styles.name}>{post.User.name}</Text>
            <View style={styles.profileright}>
              <Text style={styles.createdAt}>{post.createdAt}</Text>
              <Entypo name="dots-three-horizontal" size={18} color="black" />
            </View>
          </View>

          {post.description ? (
            <Text style={styles.description}>{post.description}</Text>
          ) : null}

          {post.image && (
            <Image source={{ uri: post.image }} style={styles.image} />
          )}

          <View style={styles.iconBtns}>
            <Feather name="heart" size={20} color="black" />
            <Ionicons name="md-chatbubble-outline" size={20} color="black" />
            <AntDesign name="retweet" size={20} color="black" />
            <Image source={share} style={{ width: 20, height: 20 }} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  post: {
    marginTop: 50,
    flexDirection: "row",
    width: "auto",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 20,
  },
  profile: {
    alignItems: "center",
    marginRight: 10,
    justifyContent: "center",
    height: "auto",
    position: "relative",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  followContainer: {
    width: 25,
    height: 25,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 25,
    right: 5,
    margin: 5,
    zIndex: 999,
    borderRadius: 50,
  },
  followIcon: {},

  welcomeText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },

  line: {
    backgroundColor: "gray",
    width: StyleSheet.hairlineWidth,
    flex: 1,
    marginVertical: 10,
    marginBottom: 20,
  },

  response: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  likesAndReplies: {
    flexDirection: "row",
    position: "absolute",
    justifyContent: "center",
    gap: 10,
    left: 90,
  },

  content: {
    flex: 1,
    paddingRight: 25,
    marginBottom: 20,
  },
  profileDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
  },
  createdAt: {
    color: "gray",
  },
  profileright: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  description: {
    marginTop: 10,
    marginBottom: 5,
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
    marginTop: 10,
    borderRadius: 10,
  },
  iconBtns: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  responseProfileContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    top: -20,
  },
  responseProfile: {
    borderRadius: 15,
    marginHorizontal: 5,
    backgroundColor: "blue",
  },
});
