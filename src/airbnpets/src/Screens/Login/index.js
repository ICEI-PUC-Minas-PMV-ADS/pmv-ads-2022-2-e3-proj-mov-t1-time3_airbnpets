import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from '../../components/Header';

import Input from "../../components/input/input"

export default function Login() {

  const navigation = useNavigation();
 
  return (
   
    <View style={styles.container}>
      <Header />
      <Text style={styles.titleText}>Bem-vindo!</Text>
      <Text style={styles.baseText}>Faça login para acessar o app</Text>
      <Input />
      <Input />

      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Home")}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>

      
        <Text style={styles.titleText}>Ou</Text>
        <Text style={styles.baseText}>
          Ainda não é cadastrado em nosso app?
        </Text>

       <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Cadastro")}>
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
    alignItems: 'center'
    
  },
  titleText: {
    fontFamily: "sans-serif",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 35,
    // marginLeft: 30,

  },
  baseText: {
    flexDirection: 'row',
    fontFamily: "sans-serif",
    fontSize: 20,
    marginTop: 16,
    // marginLeft: 30,
    marginBottom: 40
  },
  button: {
    marginTop: 20,
    // marginLeft: 20,
    alignItems: 'center',
    width: 350,
    padding: 10,
    backgroundColor: '#45B5C4',
    borderRadius: 6,
  },
  buttonText: {
    margin: 5,
    fontWeight: 'bold',
    color: '#ffff',
  }, 
  linkText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#45B5C4',
  }
});
