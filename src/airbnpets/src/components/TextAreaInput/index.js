import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

export default function TextAreaInput(props) {
  return (
    <View style={styles.container}>
      <TextInput
        multiline={true}
        numberOfLines={props.numberOfLines}
        placeholder={props.placeholder}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
  },
  input: {
    flex: 1,
    backgroundColor: "#EBEBEB",
    paddingLeft: 10,
    marginHorizontal: 20,
    paddingTop: 10,
    borderRadius: 6,
    fontSize: 18,
    fontWeight: "600",
    textAlignVertical: 'top'
  },
});
