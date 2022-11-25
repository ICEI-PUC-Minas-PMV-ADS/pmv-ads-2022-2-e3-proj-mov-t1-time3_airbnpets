import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";

export default function HomeChatScreen({ route, navigation }) {
  const [name, setName] = useState("");

  const [definedName, setDefinedName] = useState(false);

  if (!definedName) {
    return (
      <View
        style={{
          backgroundColor: "#FFF",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Seja bem-vindo!</Text>

        {/* <TextInput
          onChangeText={(text) => setName(text)}
          style={{
            margin: 10,
            width: "90%",
            height: 40,
            backgroundColor: "white",
            paddingLeft: 10,
          }}
        ></TextInput> */}

        {/* <TouchableOpacity onPress={() => setDefinedName(true)}>
          <View style={{ backgroundColor: "#069", padding: 10, width: "90%" }}>
            <Text style={{ color: "white", textAlign: "center" }}>
              Trocar meu nome!
            </Text>
          </View>
        </TouchableOpacity> */}
      </View>
    );
  } else {
    return (
      <View
        style={{
          backgroundColor: "#FFF",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Seja Bem-vindo ao Chat {name}</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <View style={{ backgroundColor: "#069", padding: 10, width: "90%" }}>
            <Text style={{ color: "white", textAlign: "center" }}>
              Ir ao Chat
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
