import React from "react";
import { View, StyleSheet, Image } from "react-native";

const logo = require("../../assets/AirbnPetsLogo.png");

export default function Header() {
  return (
    <View style={styles.containerLogo}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogo: {
    height: 50,
    justifyContent: "center",
  },
  logo: {
    width: 120,
    height: 25,
  },
});
