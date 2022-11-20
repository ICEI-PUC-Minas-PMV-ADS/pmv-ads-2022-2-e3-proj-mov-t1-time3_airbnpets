import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Section(props) {

    const navigation = useNavigation()

  return (
    <TouchableOpacity style={styles.container} onPress={()=> navigation.navigate("Details", {
        name: props.nameHotel,
        image: props.cover,
        priceMin: props.priceMin
    })}>
      <Image source={props.cover} style={styles.cover} />
      <View>
        <Text style={styles.nameHotel}>{props.nameHotel}</Text>
        <View style={{flexDirection: "row"}}>
          <Text style={styles.price}>R${props.priceMin} - </Text>
          <Text style={styles.price}>R${props.priceMax}</Text>
        </View>
        <Text style={styles.localHotel}>{props.localHotel}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: 200,
    height: 200,
    padding: 10,
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
