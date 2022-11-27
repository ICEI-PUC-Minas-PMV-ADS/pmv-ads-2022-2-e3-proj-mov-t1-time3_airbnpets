import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { auth } from "../../config/firebase";

import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

export default function User() {
  const navigation = useNavigation();

  const user = auth.currentUser;

  const logout = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("Login");
      })
      .catch(() => {
        Alert.alert("Erro ao fazer logout");
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoUser}>
        <FontAwesome5 name="user-circle" size={100} color="black" />
        <Text style={{ fontSize: 30, marginTop: 25 }}>Olá</Text>
        <Text style={{ fontSize: 20 }}>{user.email}</Text>
      </View>
      <View style={styles.optionsUser}>
        <TouchableOpacity
          style={styles.buttonRegisterHotel}
          onPress={() => navigation.navigate("CadastroHotel")}
        >
          <Fontisto name="hotel-alt" size={40} color="black" />
          <Text style={{ fontSize: 18, marginTop: 10 }}>Cadastro Hotel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={logout}>
          <Text style={styles.logout}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  infoUser: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  optionsUser: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  logout: {
    color: "#45B5C4",
    fontSize: 24,
  },
  buttonRegisterHotel: {
    elevation: 5,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
