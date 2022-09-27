import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import { AntDesign } from '@expo/vector-icons';

export default function Search(props) {
    return (

        <View style={styles.containerSearch}>
            <TouchableOpacity style={styles.iconSearch}>
            <AntDesign name="search1" size={24} color="black" />
            </TouchableOpacity>
            <TextInput placeholder={props.placeholder} style={styles.search} />
        </View>

    );
}

const styles = StyleSheet.create({
    containerSearch: {
        padding: 10,
        paddingStart: 20,
        paddingEnd: 20,
        position: "relative"
    },
    search: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        paddingStart: 50,
        fontSize: 12,
        elevation: 5,
        fontFamily: "Montserrat_500Medium"
    },
    iconSearch: {
        position: "absolute",
        top: "50%",
        marginStart: 35,
        zIndex: 2
    }
});
