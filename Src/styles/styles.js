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
    position: "fixed",
    justifyContent: "space-around",
    marginTop: 20,
    paddingTop: 20,
    paddingBottom: 15,
    borderColor: "gray",
    borderBottomWidth: 0.2,
    // borderBottomColor: "#ccc",
    borderBottomColor: "rgba(0, 0, 0, 0.02)",
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

  //ActivityScreens
  actContainer: {
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  activityHeader: {
    fontSize: 40,
    fontWeight: "700",
    marginHorizontal: 10,
    marginVertical:10
  },
  linksContainer: {
    marginLeft: 10,
  },
  activityBtn: {
    borderWidth: StyleSheet.hairlineWidth,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 100,
  },

  activeButton: {
    backgroundColor: "#000",
  },
  activeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  notification: {
    flexDirection: "row",
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 15,
    paddingBottom: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  notificationIcon: {},
  notificationText: {
    width: 200,
    paddingHorizontal: 10,
  },
  notificationBtn: {
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  userdetails: {},
  usern: {
    flexDirection: "row",
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    marginHorizontal: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  username: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  followDay: {
    color: "gray",
    paddingHorizontal: 10,
  },
  followBtn: {
    borderWidth: 1,
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderRadius: 10,
    marginLeft: "auto",
  },
  followBtnText: {
    fontWeight: "600",
  },

  //SeacrhScreen

  searchContainer: {
    marginTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  header: {},
  searchText: {
    fontSize: 38,
    fontWeight: "900",
  },
  searchInput: {
    flexDirection: "row",
    marginVertical: 8,
    backgroundColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  follows: {},
  followDetails: {
    paddingLeft: 20,
    gap: 5,
  },
  followerDetails: {
    flexDirection: "row",
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  followerProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  username: {},
  name: {
    marginBottom: 10,
  },
  noOfFollowers: {},
  btn: {
    borderWidth: 1,
    marginLeft: "auto",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  btnText: {
    fontWeight: "600",
  },
  fixedSearchInput: {
    position: "sticky",
    top: 0,
    zIndex: 1,
    elevation: 1,
  },
  //ProfileScreen
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

  //SeacrhScreenss
  searchContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  SearchHeader: {},
  searchText: {
    fontSize: 38,
    fontWeight: "900",
  },
  searchInput: {
    flexDirection: "row",
    marginVertical: 8,
    backgroundColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  follows: {},
  followDetails: {
    paddingLeft: 20,
    gap: 5,
  },
  followerDetails: {
    flexDirection: "row",
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  followerProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  username: {},
  name: {
    marginBottom: 10,
  },
  noOfFollowers: {},
  btn: {
    borderWidth: 1,
    marginLeft: "auto",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  btnText: {
    fontWeight: "600",
  },
  fixedSearchInput: {
    position: "sticky",
    top: 0,
    zIndex: 1,
    elevation: 1,
  },
});
