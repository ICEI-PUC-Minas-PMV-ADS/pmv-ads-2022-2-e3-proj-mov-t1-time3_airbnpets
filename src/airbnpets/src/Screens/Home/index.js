import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  BackHandler,
} from "react-native";

import Header from "../../components/Header";
import { auth, db } from "../../config/firebase";
import { useNavigation } from "@react-navigation/native";

export default function Home(props) {
  const navigation = useNavigation();
  const [hoteis, setHoteis] = useState([]);

  useEffect(() => {
    db.collection("hoteis")
      .orderBy("data", "desc")
      .onSnapshot((snapshot) => {
        const list = [];
        snapshot.docs.map((doc) => {
          list.push({ ...doc.data(), id: doc.id });
        });
        setHoteis(list);
      });

    BackHandler.addEventListener("backPress", () => true);
    return () => BackHandler.removeEventListener("backPress", () => true);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={hoteis}
        keyExtractor={(item) => item.id}
        numColumns={2}
        style={styles.containerHoteis}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.hotel}
              onPress={() =>
                navigation.navigate("Details", {
                  name: item.name,
                  image: item.image,
                  image2: item.image2,
                  image3: item.image3,
                  priceMin: item.priceMin,
                  priceMax: item.priceMax,
                  description: item.description,
                  phone: item.phone,
                  street: item.street,
                  state: item.state,
                  number: item.number,
                  district: item.district,
                  city: item.city,
                  email: item.email,
                })
              }
            >
              <Image source={{ uri: item.image }} style={styles.cover} />
              <View>
                <Text style={styles.nameHotel}>{item.name}</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.price}>R${item.priceMin} - </Text>
                  <Text style={styles.price}>R${item.priceMax}</Text>
                </View>
                <Text style={styles.localHotel}>{item.city}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingTop: 24,
    flexDirection: "column",
    justifyContent: "center",
  },
  containerHoteis: {
    flex: 1,
    maxWidth: "100%",
    width: "100%",
    marginTop: 20,
  },
  hotel: {
    marginBottom: 20,
    marginStart: 20,
  },
  cover: {
    width: 175,
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
