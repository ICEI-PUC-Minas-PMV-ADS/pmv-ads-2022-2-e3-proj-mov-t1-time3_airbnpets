import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";

export default function Details({ route }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView vertical>
        <Swiper
          style={styles.wrapper}
          dotStyle={{
            backgroundColor: "#ccc",
            width: 10,
            height: 10,
            borderRadius: 10,
          }}
          activeDotColor="#45B5C4"
          activeDotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
          }}
        >
          <View style={styles.slide}>
            <ImageBackground
              source={{ uri: route.params.image }}
              style={{ width: "100%", height: 300 }}
            />
          </View>

          <View style={styles.slide}>
            <ImageBackground
              source={{ uri: route.params.image2 }}
              style={{ width: "100%", height: 300 }}
            />
          </View>

          <View style={styles.slide}>
            <ImageBackground
              source={{ uri: route.params.image3 }}
              style={{ width: "100%", height: 300 }}
            />
          </View>
        </Swiper>

        <View style={styles.containerInfo}>
          <Text style={styles.nameHotel}>{route.params.name}</Text>
          <Text style={styles.price}>
            R${route.params.priceMin} - R${route.params.priceMax}
          </Text>
          <Text style={styles.title}>Descrição</Text>
          <Text style={styles.contentSection}>{route.params.description}</Text>
          <TouchableOpacity
            style={styles.buttonContato}
            onPress={() =>
              navigation.navigate("Contato", {
                phone: route.params.phone,
                email: route.params.email,
                street: route.params.street,
                number: route.params.number,
                district: route.params.district,
                state: route.params.state,
                city: route.params.city,
              })
            }
          >
            <Text style={{ color: "#FFF", fontSize: 25 }}>
              Dados de Contato
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  containerInfo: {
    padding: 15,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  nameHotel: {
    fontSize: 22,
    fontFamily: "Montserrat_600SemiBold",
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: "#616161",
    fontFamily: "Montserrat_500Medium",
    marginBottom: 10,
  },
  buttonContato: {
    backgroundColor: "#45B5C4",
    padding: 15,
    textAlign: "center",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 10,
  },
  title: {
    fontSize: 15,
    color: "#616161",
    fontFamily: "Montserrat_600SemiBold",
    marginBottom: 5,
  },
  contentSection: {
    fontSize: 13,
    color: "#616161",
    marginBottom: 20,
  },
  wrapper: {
    height: 300,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
