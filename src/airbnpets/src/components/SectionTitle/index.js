import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SectionTitle(props) {
 return (
    <View style={styles.section}>
    <Text style={styles.sectionTitle}>{props.title}</Text>
  </View>
  );
}

const styles = StyleSheet.create({
    section: {
      padding: 10,
      paddingStart: 20
    },
    sectionTitle: {
      fontSize: 18,
      color: "#616161",
      fontFamily: "Montserrat_500Medium"
    }
  });
  