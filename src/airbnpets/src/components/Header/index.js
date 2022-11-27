import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const logo = require("../../assets/AirbnPetsLogo.png");

export default function Header(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.containerLogo}>
      <View style={styles.arrow}>
        {props.rowBack && (
          <AntDesign
            onPress={() => navigation.navigate(props.to)}
            name="arrowleft"
            size={24}
            color="black"
          />
        )}
      </View>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogo: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  logo: {
    width: 120,
    height: 25,
    top: 8,
  },
  arrow: {
    position: "absolute",
    top: 10,
    left: 10,
  },
});
