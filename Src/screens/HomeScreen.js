import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "../styles/styles";
import Posts from "../components/Posts";

export default function HomeScreen() {
  return (
    <View style={styles.homeContainer}>
     <Posts/>
     <Posts/>
     <Posts/>
    </View>
  );
}
