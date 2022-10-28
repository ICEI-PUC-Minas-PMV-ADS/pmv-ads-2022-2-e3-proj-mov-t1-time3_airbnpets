import * as React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../../components/Header";
import Search from "../../components/Search";


export default function Pesquisa() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <Search placeholder="Buscar por nome ou local..." />
        
        <Text style={styles.tituloresultado}>Resultado da pesquisa</Text>

        <View style={styles.viewimage}>
          <View style={styles.view}>
            <Image
              style={styles.image}
              source={require("../../assets/hotel.jpg")}
            />
            <View style={styles.imageText}>
              <Text style={styles.titulo}>Nome do Hotel</Text>
              <Text>Belo Horizonte</Text>
              <Text>R$ 60 - 200</Text>
            </View>
          </View>

          <View style={styles.view}>
            <Image
              style={styles.image}
              source={require("../../assets/IMG-20210507-WA0192-2-1.jpg.png")}
            />
            <View style={styles.imageText}>
              <Text style={styles.titulo}>Nome do Hotel</Text>
              <Text>Belo Horizonte</Text>
              <Text>R$ 60 - 200</Text>
            </View>
          </View>

          <View style={styles.view}>
            <Image
              style={styles.image}
              source={require("../../assets/creches-para-caes-de-pequeno-porte.jpg")}
            />
            <View style={styles.imageText}>
              <Text style={styles.titulo}>Nome do Hotel</Text>
              <Text>Belo Horizonte</Text>
              <Text>R$ 60 - 200</Text>
            </View>
          </View>
          <View style={styles.view}>
            <Image
              style={styles.image}
              source={require("../../assets/hotel-caes.jpg")}
            />
            <View style={styles.imageText}>
              <Text style={styles.titulo}>Nome do Hotel</Text>
              <Text>Belo Horizonte</Text>
              <Text>R$ 60 - 200</Text>
            </View>
          </View>
          <View style={styles.view}>
            <Image
              style={styles.image}
              source={require("../../assets/csm_Cabralia_1_f6bdccba89.jpg")}
            />
            <View style={styles.imageText}>
              <Text style={styles.titulo}>Nome do Hotel</Text>
              <Text>Belo Horizonte</Text>
              <Text>R$ 60 - 200</Text>
            </View>
          </View>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingTop: 10,   
  },
  tituloresultado: {
    textAlign: "center",
    color: "rgba(97, 97, 97, 1)",
    fontSize: 20,
  },
  viewimage: {
    marginTop: 20,
  },
  view: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 20,
    marginBottom: 15
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 20,
  },
  imageText: {
    marginLeft: 10,
    marginTop: 12,
  },
  titulo: {
    color: "rgba(97, 97, 97, 1)",
    fontSize: 24,
    fontWeight: 'bold',
  }
  
});
