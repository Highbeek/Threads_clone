import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  //home
  container: {
    backgroundColor: "#fff",
    paddingTop:20
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    paddingTop: 20,
    paddingBottom:15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "gray",
  },
  tabText: {
    fontWeight: "600",
    color: "gray",
  },
  activeTabText: {
    fontWeight: "600",
    color: "black",
  },
});
