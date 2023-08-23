import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  //home
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    paddingTop: 20,
    paddingBottom: 15,
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

  //CreatePostScreenStyle
  titleContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingBottom: 20,
    paddingRight: "35%",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center",
  },
  body: {
    paddingHorizontal: 15,
  },
  user: {
    fontWeight: "700",
  },
  postContainer: {
    flexDirection: "row",
    gap: 10,
    paddingVertical: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  newPost: {
    gap: 5,
  },
  inputTxt: {
    fontSize: 16,
    marginBottom: 10,
  },
  attachContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
});
