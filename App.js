import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackScreen } from "./Src/components/MainStack";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store} style={styles.container}>
      <NavigationContainer>
        <MainStackScreen />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
