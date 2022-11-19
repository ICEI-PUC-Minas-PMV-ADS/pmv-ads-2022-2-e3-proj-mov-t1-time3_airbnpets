import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Header from "../../components/Header";
import SectionTitle from "../../components/SectionTitle";
import Section from "../../components/Section";
import SmallSection from "../../components/SmallSection";
import Search from "../../components/Search";
import { db } from "../../config/firebase";

export default function Home() {
  const [hoteis, setHoteis] = useState([]);

  useEffect(() => {
    db.collection("hoteis")
      .orderBy("data", "desc")
      .onSnapshot((snapshot) => {
        setHoteis(
          snapshot.docs.map((doc) => {
            return { info: doc.data() };
          })
        );
      });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />

        <Search placeholder="Buscar por nome ou local..." />

        {/* Imagens apenas de Placeholder */}

        <SectionTitle title={"Hotéis Novos"} />

        {hoteis.map((hotel, index) => {
          return (
            <ScrollView
            key={index}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ paddingStart: 10 }}
            >
              <Section
                cover={{uri: hotel.info.image}}
                nameHotel={hotel.info.name}
                localHotel={hotel.info.address}
              />
            </ScrollView>
          );
        })}

        <SectionTitle title={"Sugestões para você"} />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingStart: 10 }}
        >
          <SmallSection
            cover={require("../../assets/hotel.jpg")}
            nameHotel="Nome do Hotel"
            localHotel="Belo Horizonte"
          />
          <SmallSection
            cover={require("../../assets/IMG-20210507-WA0192-2-1.jpg.png")}
            nameHotel="Nome do Hotel"
            localHotel="Belo Horizonte"
          />
          <SmallSection
            cover={require("../../assets/creches-para-caes-de-pequeno-porte.jpg")}
            nameHotel="Nome do Hotel"
            localHotel="Belo Horizonte"
          />
          <SmallSection
            cover={require("../../assets/hotel-caes.jpg")}
            nameHotel="Nome do Hotel"
            localHotel="Belo Horizonte"
          />
          <SmallSection
            cover={require("../../assets/csm_Cabralia_1_f6bdccba89.jpg")}
            nameHotel="Nome do Hotel"
            localHotel="Belo Horizonte"
          />
          <SmallSection
            cover={require("../../assets/img-20191219-wa0034_198451576792561.jpg")}
            nameHotel="Nome do Hotel"
            localHotel="Belo Horizonte"
          />
        </ScrollView>

        <SectionTitle title={"Bem avaliados"} />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingStart: 10 }}
        >
          <Section
            cover={require("../../assets/hotel.jpg")}
            nameHotel="Nome do Hotel"
            localHotel="Belo Horizonte"
          />
          <Section
            cover={require("../../assets/IMG-20210507-WA0192-2-1.jpg.png")}
            nameHotel="Nome do Hotel"
            localHotel="Belo Horizonte"
          />
          <Section
            cover={require("../../assets/creches-para-caes-de-pequeno-porte.jpg")}
            nameHotel="Nome do Hotel"
            localHotel="Belo Horizonte"
          />
          <Section
            cover={require("../../assets/hotel-caes.jpg")}
            nameHotel="Nome do Hotel"
            localHotel="Belo Horizonte"
          />
          <Section
            cover={require("../../assets/csm_Cabralia_1_f6bdccba89.jpg")}
            nameHotel="Nome do Hotel"
            localHotel="Belo Horizonte"
          />
          <Section
            cover={require("../../assets/img-20191219-wa0034_198451576792561.jpg")}
            nameHotel="Nome do Hotel"
            localHotel="Belo Horizonte"
          />
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingTop: 24,
  },
  containerSearch: {
    padding: 10,
    paddingStart: 20,
    paddingEnd: 20,
    position: "relative",
  },
  search: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    paddingStart: 50,
    fontSize: 15,
    elevation: 5,
  },
  iconSearch: {
    position: "absolute",
    top: "50%",
    marginStart: 35,
    zIndex: 2,
  },
});
