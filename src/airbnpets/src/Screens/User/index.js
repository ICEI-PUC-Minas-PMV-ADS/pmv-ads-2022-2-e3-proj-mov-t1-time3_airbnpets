import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function User() {

  const navigation = useNavigation();

 return (
   <View style={styles.container}>
      <Text> Tela User </Text>
      <TouchableOpacity onPress={()=> navigation.navigate("CadastroHotel")}>
        <Text>Ir para cadastro Hotel</Text>
      </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24
  }
})
