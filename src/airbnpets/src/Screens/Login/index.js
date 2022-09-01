import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Login({navigation}) {
 return (
   <View style={styles.container}>
    <Text>Tela Login</Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
})