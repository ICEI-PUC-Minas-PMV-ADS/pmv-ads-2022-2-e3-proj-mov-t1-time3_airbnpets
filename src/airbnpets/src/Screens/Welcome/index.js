import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Header from "../../components/Header";

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <ImageBackground
        style={styles.image}
        source={require("../../assets/imageWelcome.png")}
      />
      <View style={styles.containerButtons}>
        <Text
          style={{
            color: "black",
            fontSize: 22,
            fontFamily: "Montserrat_500Medium",
            textAlign: "center",
            maxWidth: 300,
          }}
        >
          Econtre hotéis para pets pertinho de você!
        </Text>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => navigation.navigate("Login")}
        >
          <Text
            style={{
              color: "#FFF",
              fontSize: 18,
              fontFamily: "Montserrat_600SemiBold",
            }}
          >
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  buttonLogin: {
    fontSize: 40,
    backgroundColor: "#45B5C4",
    padding: 20,

    alignItems: "center",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    flex: 4,
    marginTop: 10,
  },
  containerButtons: {
    flex: 2,
    justifyContent: "space-around",
  },
});
