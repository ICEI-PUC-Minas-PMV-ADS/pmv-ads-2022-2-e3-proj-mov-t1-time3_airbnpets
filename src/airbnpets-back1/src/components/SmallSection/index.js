import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function SmallSection(props) {
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={props.cover} style={styles.cover} />
            <View>
                <Text style={styles.nameHotel}>{props.nameHotel}</Text>
                <Text style={styles.localHotel}>{props.localHotel}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: 140,
        height: 140,
        padding: 10
    },
    cover: {
        width: "100%",
        height: 80,
        borderRadius: 10
    },
    nameHotel: {
        marginTop: 5,
        fontSize: 15
    },
    localHotel: {
        fontSize: 12,
        color: "#616161"
    }
})