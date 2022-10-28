import React from "react";
import { View, StyleSheet, TextInput} from "react-native";

const Input = () => {
  return (
    <View style={styles.containe}>
      <TextInput 
        style={styles.input} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containe: {
    flexDirection: 'row',
    marginTop: 20
  },
  input: {
    height: 50,
    flex: 1,
    backgroundColor: '#EBEBEB',
    paddingLeft: 10,
    marginHorizontal: 20,
    // marginLeft: 35,
    borderRadius: 6,
    fontSize: 18,
  },
});

export default Input
