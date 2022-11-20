import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

import Header from "../../components/Header";
import SectionTitle from "../../components/SectionTitle";
import Search from "../../components/Search";
import { db } from "../../config/firebase";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  const [hoteis, setHoteis] = useState([]);

  useEffect(() => {
    db.collection("hoteisNovos")
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

        <SectionTitle title={"Hotéis Novos"} />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingStart: 10 }}
        >
          {hoteis.map((hotel, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.container}
                onPress={() =>
                  navigation.navigate("Details", {
                    name: hotel.info.name,
                    image: hotel.info.image,
                    image2: hotel.info.image2,
                    image3: hotel.info.image3,
                    priceMin: hotel.info.priceMin,
                    priceMax: hotel.info.priceMax,
                    description: hotel.info.description,
                    phone: hotel.info.phone,
                    street: hotel.info.street,
                    number: hotel.info.number,
                    district: hotel.info.district,
                    city: hotel.info.city,
                  })
                }
              >
                <Image
                  source={{ uri: hotel.info.image }}
                  style={styles.cover}
                />
                <View>
                  <Text style={styles.nameHotel}>{hotel.info.name}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.price}>R${hotel.info.priceMin} - </Text>
                    <Text style={styles.price}>R${hotel.info.priceMax}</Text>
                  </View>
                  <Text style={styles.localHotel}>{hotel.info.city}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/*  <SectionTitle title={"Sugestões para você"} />

        <SectionTitle title={"Bem avaliados"} /> */}
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
  cover: {
    width: 180,
    height: 130,
    borderRadius: 10,
  },
  nameHotel: {
    marginTop: 5,
    fontSize: 15,
    fontFamily: "Montserrat_600SemiBold",
  },
  localHotel: {
    fontSize: 12,
    color: "#616161",
    fontFamily: "Montserrat_400Regular",
  },
  price: {
    fontSize: 12,
    color: "#616161",
    fontFamily: "Montserrat_500Medium",
  },
});
