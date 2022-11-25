import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { db } from "../../config/firebase";

export default function ChatScreen({ route, navigation }) {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    if (route.params && route.params.userName != undefined) {
      alert("Seja bem-vindo ao chat: " + route.params.userName);
    } else {
      navigation.navigate("HomeChat");
    }
    const unsub = db.collection("rooms").onSnapshot(function (snapshot) {
      setRooms(
        snapshot.docs.map((val) => {
          return {
            id: val.id,
            data: val.data(),
          };
        })
      );
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgb(30,30,30)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          borderBottomColor: "white",
          borderBottomWidth: 1,
          flexDirection: "row",
          padding: 10,
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "rgb(52,119,235)", fontSize: 17 }}>
          BroadCast List
        </Text>
        <Text style={{ color: "rgb(52,119,235)", fontSize: 17 }}>
          Nova sala
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        {rooms.map(function (val) {
          return (
            <View
              style={{
                borderBottomColor: "rgba(255,255,255,0.4)",
                borderBottomWidth: 1,
                flexDirection: "row",
                padding: 10,
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Room", { chatName: val.id })
                }
              >
                <Text style={{ color: "white", fontSize: 22 }}>{val.id}</Text>
              </TouchableOpacity>
              <Text style={{ color: "white" }}>
                <Ionicons size={18} name="ios-information-circle" />
                Disponível
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}
