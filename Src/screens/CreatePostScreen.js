import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Modal,
  Alert,
  Pressable,
} from "react-native";
import { useDispatch } from "react-redux";
import { Entypo } from "@expo/vector-icons";
import { addPost } from "../slices/postsSlice";
import * as ImagePicker from "expo-image-picker";
import { Video } from "expo-av";
import CancelAlert from "../components/CancelAlert";
import { styles } from "../styles/styles";
import { useSelector } from "react-redux";

export default function CreatePostScreen({
  navigation,
  isModalVisible,
  closeCreatePostModal,
}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [newPostText, setNewPostText] = useState("");
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);

  const handleImagePicker = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        if (result.assets && result.assets.length > 0) {
          setSelectedImage(result.assets[0].uri);
        }
      }
    } catch (error) {
      console.error("Error picking image:", error);
    }
  };

  const handleAddPost = () => {
    if (newPostText.trim() !== "") {
      const newPostData = {
        createdAt: "Just now",
        user: {
          id: "u1",
          image: "https://randomuser.me/api/portraits/women/1.jpg",
          name: "Blessing Peter",
        },
        image: selectedImage,
      };

      dispatch(addPost(newPostData));
      setSelectedImage(null);
      setNewPostText("");
      closeCreatePostModal();
    }
  };

  return (
    <Modal
      style={styles.container}
      visible={isModalVisible}
      onRequestClose={closeCreatePostModal}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <View style={[styles.titleContainer, { paddingTop: 30 }]}>
        <CancelAlert closeCreatePostModal={closeCreatePostModal} />

        <Text style={styles.titleText}>New Thread</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.postContainer}>
          <View>
            <Image
              source={{ uri: user.profileImage }}
              style={{ width: 34, height: 34, borderRadius: 100 }}
            />
          </View>
          <View style={styles.newPost}>
            <Text style={styles.user}>{user.threadUsername} </Text>
            <TextInput
              placeholder="Start a thread..."
              multiline={true}
              value={newPostText}
              onChangeText={(text) => setNewPostText(text)}
              style={styles.inputTxt}
            />

            <View style={styles.attachContainer}>
              <Entypo
                name="attachment"
                size={20}
                color="gray"
                onPress={handleImagePicker}
              />
              {selectedImage && (
                <View>
                  {selectedImage.endsWith(".mp4") ? (
                    <Video
                      source={{ uri: selectedImage }}
                      style={{ width: 150, height: 150 }}
                      shouldPlay
                      isLooping
                    />
                  ) : (
                    <Image
                      source={{ uri: selectedImage }}
                      style={{ width: 150, height: 150 }}
                    />
                  )}
                </View>
              )}
            </View>
          </View>
        </View>
        <Button title="Add Post" onPress={handleAddPost} />
      </View>
    </Modal>
  );
}
