import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from '../../components/Header';

import Input from "../../components/input/input"

export default function User() {

const navigation = useNavigation(); 

  return (
   
    <View style={styles.container}>
      <Header />
      <Image style={styles.image} source={require('../../assets/usuário.jpg')} />
      <Text style={styles.titleText}>Bem-vindo, User!</Text>
      <Text style={styles.baseText}>user@gmail.com</Text>

      <Image style={styles.image} source={require('../../assets/dados.jpg')} />
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Useredit")}>
        <Text style={styles.buttonText}>MEUS DADOS</Text>
      </TouchableOpacity>

      <Image style={styles.image} source={require('../../assets/cadatrarhotel.jpg')} />
       <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Cadastrohotel")}>
        <Text style={styles.buttonText}>CADASTRAR HOTEL</Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.buttonsair} onPress={()=> navigation.navigate("Welcome")}>
        <Text style={styles.buttonText}>SAIR</Text>
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
    backgroundColor: '#EBEBEB',
    borderRadius: 6,
  },
    buttonsair: {
    marginTop: 20,
    // marginLeft: 20,
    alignItems: 'center',
    width: 350,
    padding: 10,
    backgroundColor: '#45B5C4',
    borderRadius: 6,
  },
    image: {
    height: 150,
    width: 150,
    borderRadius: 20,
  },

  buttonText: {
    margin: 5,
    fontWeight: 'bold',
    color: '#000000',
  }, 
  linkText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#45B5C4',
    }
});
