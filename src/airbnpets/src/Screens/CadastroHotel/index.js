import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Input from "../../components/input/input";
import TextAreaInput from "../../components/TextAreaInput";
import FilledButton from "../../components/FilledButton";

export default function CadastroHotel() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.backgroundAddImages}>
          <Text style={styles.textBackgroudAddImages}>
            Clique no ícone para adicionar imagens do hotel
          </Text>
        </View>
        <Input placeholder="Nome do Hotel"></Input>
        <Input placeholder="Preço (Min e Max)"></Input>
        <TextAreaInput placeholder="Descrição" numberOfLines={6} />
        <Input placeholder="Endereço" />
        <FilledButton text='CADASTRAR HOTEL' background='#45B5C4' color="#FFF"/>
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
