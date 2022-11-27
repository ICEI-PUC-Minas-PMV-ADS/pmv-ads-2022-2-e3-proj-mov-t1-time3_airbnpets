import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Input from "../../components/input/input";
import FilledButton from "../../components/FilledButton";
import { db } from "../../config/firebase";
import { useNavigation } from "@react-navigation/native";

export default function CadastroHotel() {
  const navigation = useNavigation();

  const [name, setName] = useState(null);
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [phone, setPhone] = useState(null);
  const [number, setNumber] = useState(null);
  const [street, setStreet] = useState(null);
  const [district, setDistrict] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [priceMin, setPriceMin] = useState(null);
  const [priceMax, setPriceMax] = useState(null);
  const [CNPJ, setCNPJ] = useState(null);
  const [description, setDescription] = useState(null);
  const [email, setEmail] = useState(null);

  function addHotel() {
    db.collection("hoteis").add({
      CNPJ: CNPJ,
      city: city,
      description: description,
      district: district,
      image: image,
      image2: image2,
      image3: image3,
      name: name,
      number: number,
      phone: phone,
      priceMax: priceMax,
      priceMin: priceMin,
      state: state,
      street: street,
      data: new Date(),
      email: email,
    });
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Input
          placeholder="Link da 1° Imagem do Hotel"
          onChangeText={setImage}
          value={image}
        ></Input>
        <Input
          placeholder="Link da 2° Imagem do Hotel"
          onChangeText={setImage2}
          value={image2}
        ></Input>
        <Input
          placeholder="Link da 3° Imagem do Hotel"
          onChangeText={setImage3}
          value={image3}
        ></Input>
        <Input
          placeholder="Nome do Hotel"
          onChangeText={setName}
          value={name}
        ></Input>
        <Input
          placeholder="Preço Mínimo"
          onChangeText={setPriceMin}
          value={priceMin}
        ></Input>
        <Input
          placeholder="Preço Máximo"
          onChangeText={setPriceMax}
          value={priceMax}
        ></Input>
        <Input
          placeholder="Descrição"
          numberOfLines={6}
          onChangeText={setDescription}
          value={description}
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
        <Input
          placeholder="Bairro"
          onChangeText={setDistrict}
          value={district}
        ></Input>
        <Input placeholder="Cidade" onChangeText={setCity} value={city}></Input>
        <Input
          placeholder="Estado"
          onChangeText={setState}
          value={state}
        ></Input>
        <Input
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        ></Input>
        <Input
          placeholder="Telefone de Contato"
          onChangeText={setPhone}
          value={phone}
        ></Input>
        <Input placeholder="CNPJ" onChangeText={setCNPJ} value={CNPJ}></Input>
        <FilledButton
          text="CADASTRAR HOTEL"
          background="#45B5C4"
          color="#FFF"
          onPress={() => {
            addHotel();
          }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
  backgroundAddImages: {
    backgroundColor: "#ccc",
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  textBackgroudAddImages: {
    fontWeight: " Montserrat_600SemiBold",
    fontSize: 20,
    textAlign: "center",
  },
});
