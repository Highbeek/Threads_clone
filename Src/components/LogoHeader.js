
import React from "react";
import { View, Image, StyleSheet } from "react-native";
import logoImage from "../../assets/logo.png";

const LogoHeader = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={logoImage} style={styles.logo} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 35, 
    height: 35, 
  },
});

export default LogoHeader;
