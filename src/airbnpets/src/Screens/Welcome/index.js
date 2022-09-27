import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Welcome({navigation}) {
 return (
   <View style={styles.container}>
    <Text>Tela Welcome</Text>
    <TouchableOpacity style={styles.buttonRota} onPress={()=> navigation.navigate("Home")}>
        <Text style={{color: "#fff"}}>Teste navegação - Ir para login</Text>
    </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonRota: {
        backgroundColor: "#ccc",
        padding: 20,
        marginTop: 20
    }
})