import React from "react";
import { TouchableOpacity, Text, View, StyleSheet} from "react-native";

export default function FilledButton(props) {
  return (
    <View style={styles.container}>
        <TouchableOpacity
      style={[styles.input, {
        backgroundColor: props.background,
      }]}
    >
      <Text {...props} style={[styles.text, {color: props.color}]}>{props.text}</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    input: {
        flex: 1,
        padding:20,
        margin: 20,
        fontFamily: "Montserrat_400Regular",
        borderRadius: 13,
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'Montserrat_600SemiBold',
    }
  });
