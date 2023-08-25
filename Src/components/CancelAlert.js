import React from "react";
import { View, Text, Alert, Pressable } from "react-native";

const CancelAlert = ({ closeCreatePostModal }) => {
  const CancelHandler = () => {
    Alert.alert(
      "Discard Thread?",
      "",
      [
        {
          text: "Discard",
          onPress: () => {
            closeCreatePostModal();
            console.log("Discard Pressed");
          },
          style: "destructive",
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <Pressable>
      <Text
        onPress={CancelHandler}
        style={{
          marginRight: "auto",
          fontSize: 20,
        }}
      >
        Cancel
      </Text>
    </Pressable>
  );
};

export default CancelAlert;
