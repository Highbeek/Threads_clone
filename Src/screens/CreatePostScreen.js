import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { addPost } from "../slices/userSlice";

export default function CreatePostScreen({ navigation }) {
  const [newPostText, setNewPostText] = useState("");
  const dispatch = useDispatch();

  const handleAddPost = () => {
    if (newPostText.trim() !== "") {
      const newPostData = {
        createdAt: "Just now",
        user: {
          id: "u1",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          name: "Blessing Peter",
        },
      };

      dispatch(addPost(newPostData));
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text>Create Post</Text>
      <TextInput
        placeholder="Enter your post text..."
        value={newPostText}
        onChangeText={(text) => setNewPostText(text)}
      />
      <Button title="Add Post" onPress={handleAddPost} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
});
