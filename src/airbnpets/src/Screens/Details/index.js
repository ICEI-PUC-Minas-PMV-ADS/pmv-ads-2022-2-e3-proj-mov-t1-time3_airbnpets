import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Details({route}) {
 return (
   <View style={styles.container}>
        <Text style={{marginTop: 100}}>{route.params.name}</Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})