import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./Src/screens/HomeScreen";
import SearchScreen from "./Src/screens/SearchScreen";
import ActivityScreen from "./Src/screens/ActivityScreen";

export default function App() {
  return (
    <View style={styles.seacrhContainer}>
      {/* <HomeScreen /> */}
      {/* <SearchScreen /> */}
      <ActivityScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
