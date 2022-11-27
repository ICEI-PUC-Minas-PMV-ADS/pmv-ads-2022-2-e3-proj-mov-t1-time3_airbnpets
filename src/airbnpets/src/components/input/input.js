import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const Input = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        autoComplete={props.type}
        value={props.value}
        onChangeText={props.onChangeText}
        style={[styles.input, { height: props.height || 50 }]}
        placeholder={props.placeholder}
        type={props.type}
      />
    </View>
  );
};

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
    borderRadius: 6,
    fontSize: 18,
    fontWeight: "600",
  },
});

export default Input;
