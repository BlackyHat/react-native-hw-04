import React from "react";
import { StyleSheet, View } from "react-native";

const ProfileScreen = () => {
  return <View style={styles.loginContainer}></View>;
};

const styles = StyleSheet.create({
  loginContainer: {
    position: "relative",
    backgroundColor: "red",
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});

export default ProfileScreen;
