import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Header from '../../components/Header';

<<<<<<< HEAD
export default function Welcome({navigation}) {
 return (
   <View style={styles.container}>
    <Text>Tela Welcome</Text>
    <TouchableOpacity style={styles.buttonRota} onPress={()=> navigation.navigate("Home")}>
        <Text style={{color: "#fff"}}>Teste navegação - Ir para login</Text>
    </TouchableOpacity>
   </View>
  );
=======


export default function Welcome({ navigation }) {
    return (

        <View style={styles.container}>
            <Header />
            <ImageBackground style={styles.image} source={require('../../../assets/hotel-pet.jpg')} />
            <Text>
                <TouchableOpacity style={styles.buttonRota} onPress={() => navigation.navigate("Login")}>
                    <Text style={{ color: "black",fontSize:25 }}>Navegar </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRota} onPress={() => navigation.navigate("Login")}>
                    <Text style={{ color: "black",fontSize:25 }}>Anunciar </Text>
                </TouchableOpacity>
            </Text>
        </View>
    );
>>>>>>> origin/welcome
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonRota: {
        fontSize:40,
        backgroundColor: "#FFF",
        padding: 20,


        marginTop: 20
    },
    image: {

        marginBottom: 30,
        width: 400,
        height: 400,
        resizeMode: 'contain'


    }
})