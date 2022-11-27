import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import { auth } from "../../config/firebase";

import Input from "../../components/input/input";

export default function Login() {
  console.disableYellowBox = true;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageSucess, setMessageSucess] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const navigation = useNavigation();

  const login = () => {
    if (email === null || password === null) {
      setMessageError(true);
    }
    auth
      .signInWithEmailAndPassword(email, password)
      .then((resData) => {
        let user = resData.user;
        setMessageSucess(true);
        navigation.navigate("Home", {
          uid: user.uid,
          emailUser: user.email,
        });
        setEmail(null);
        setPassword(null);
        setMessageSucess(false);
      })
      .catch((error) => {
        Alert.alert(error);
      });
  };

  return (
    <View style={styles.container}>
      <Header rowBack to={"Welcome"} />
      <Text style={styles.titleText}>Bem-vindo!</Text>
      <Text style={styles.baseText}>Faça login para acessar o app</Text>
      {messageSucess && <Text>Login efetuado com sucesso!</Text>}
      {messageError && <Text>Email ou senha inválidos!</Text>}
      <Input value={email} onChangeText={(text) => setEmail(text)} />
      <Input value={password} onChangeText={(text) => setPassword(text)} />
      {email === "" || password === "" ? (
        <TouchableOpacity style={styles.button} disabled={true}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.titleText}>Ou</Text>
      <Text style={styles.baseText}>Ainda não é cadastrado em nosso app?</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Cadastro")}
      >
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "baseline",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 24,
  },
  titleText: {
    fontFamily: "sans-serif",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 15,
  },
  baseText: {
    flexDirection: "row",
    fontFamily: "sans-serif",
    fontSize: 20,
    marginTop: 16,
    // marginLeft: 30,
    marginBottom: 40,
  },
  button: {
    marginTop: 20,
    // marginLeft: 20,
    alignItems: "center",
    width: 350,
    padding: 10,
    backgroundColor: "#45B5C4",
    borderRadius: 6,
  },
  buttonText: {
    margin: 5,
    fontWeight: "bold",
    color: "#ffff",
  },
  linkText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#45B5C4",
  },
  input: {
    flex: 1,
    backgroundColor: "#EBEBEB",
    paddingLeft: 10,
    marginHorizontal: 20,
    borderRadius: 6,
    fontSize: 18,
    fontWeight: "600",
    width: "100%",
  },
});
