import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Header from "../../components/Header";

export default function Home() {
  return (
    <View style={styles.container}>
        <Header/>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={styles.testeExample}>Screen Home do App</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 24,
  },
  buttonRota: {
    backgroundColor: "#ccc",
    padding: 20,
    marginTop: 20,
  },
  testeExample: {
    textAlign: "center",
    fontSize: 40,
    marginEnd: 50,
    marginStart: 50,
    color: "#555555",
  },
});
