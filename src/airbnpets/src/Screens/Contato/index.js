import React, { useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";
import Input from "../../components/input/input";

const OpenUrlButton = ({ url, children, color }) => {
  const whatsappLink = useCallback(async () => {
    const link = await Linking.canOpenURL(url);
    if (link) {
      await Linking.openURL(url);
    } else {
      Alert.alert("Esse número é invalido");
    }
  }, [url]);

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      title="teste"
      onPress={whatsappLink}
    >
      {children}
    </TouchableOpacity>
  );
};

const Contato = ({ route }) => {
  const linkWpp = `https://wa.me/${route.params.phone}`;
  const linkEmail = route.params.email;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Endereço</Text>
      <Text>
        {route.params.street} - {route.params.number}, {route.params.district},{" "}
        {route.params.city} - {route.params.state}
      </Text>
      {route.params.email && (
        <OpenUrlButton url={linkEmail} color="#fc354c">
          <Text style={{ color: "#fff", fontSize: 20 }}>Email</Text>
        </OpenUrlButton>
      )}

      {route.params.phone && (
        <OpenUrlButton url={linkWpp} color="#59a87d">
          <Text style={{ color: "#fff", fontSize: 20 }}>Whatsapp</Text>
        </OpenUrlButton>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
  },
});

export default Contato;
