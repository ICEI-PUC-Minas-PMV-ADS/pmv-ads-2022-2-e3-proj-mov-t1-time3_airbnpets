import React, { useState } from "react";
import { View, StyleSheet, Alert, ScrollView } from "react-native";
import { Button, TextInput, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../../config/firebase";
import Input from "../../components/input/input";
import Header from "../../components/Header";

const Cadastro = () => {
  const navigation = useNavigation();

  const [year, setYear] = useState(null);
  const [birthDate, setBirthDate] = useState(null);
  const [name, setName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [phone, setPhone] = useState(null);
  const [number, setNumber] = useState(null);
  const [street, setStreet] = useState(null);
  const [district, setDistrict] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        db.collection("users").add({
          city: city,
          district: district,
          name: name,
          lastName: lastName,
          email: email,
          year: year,
          birthDate: birthDate,
          password: password,
          number: number,
          phone: phone,
          state: state,
          street: street,
          id: authUser.user.uid,
        });
        navigation.navigate("Login");
      })
      .catch(() => {
        Alert.alert("Você deve preencher todos os campos para se cadastrar");
      });
  };

  return (
    <View style={styles.container}>
      <Header rowBack to="Login" />
      <ScrollView style={{ marginTop: 15 }}>
        <Input placeholder="Nome" onChangeText={setName} value={name}></Input>
        <Input
          placeholder="Sobrenome"
          onChangeText={setLastName}
          value={lastName}
        ></Input>
        <Input placeholder="Email" onChangeText={setEmail} value={email} />
        <Input
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
        />
        <Input placeholder="Idade" onChangeText={setYear} value={year}></Input>
        <Input
          placeholder="Data de Nascimento"
          onChangeText={setBirthDate}
          value={birthDate}
        />
        <Input
          placeholder="Rua"
          onChangeText={setStreet}
          value={street}
        ></Input>
        <Input
          placeholder="Número da Rua"
          onChangeText={setNumber}
          value={number}
        ></Input>
        <Input placeholder="Bairro" onChangeText={setDistrict}></Input>
        <Input placeholder="Cidade" onChangeText={setCity} value={city}></Input>
        <Input
          placeholder="Estado"
          onChangeText={setState}
          value={state}
        ></Input>
        <Input
          placeholder="Telefone de Contato"
          onChangeText={setPhone}
          value={phone}
        ></Input>

        <Button
          style={styles.button}
          size={20}
          mode="contained"
          onPress={register}
        >
          {" "}
          CADASTRAR{" "}
        </Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
  },
  nome: {
    flex: 1,
    marginLeft: 20,
    marginRight: 3,
    fontFamily: "Montserrat_400Regular",
    borderRadius: 15,
    overflow: "hidden",
  },
  sobrenome: {
    flex: 1,
    marginLeft: 3,
    marginRight: 20,
    fontFamily: "Montserrat_400Regular",
    borderRadius: 15,
  },
  input: {
    marginTop: 8,
    marginLeft: 20,
    marginRight: 20,
    fontFamily: "Montserrat_400Regular",
    borderRadius: 15,
  },
  button: {
    margin: 30,
    backgroundColor: "#45B5C4",
    fontFamily: "Montserrat_400Regular",
    borderRadius: 13,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default Cadastro;
