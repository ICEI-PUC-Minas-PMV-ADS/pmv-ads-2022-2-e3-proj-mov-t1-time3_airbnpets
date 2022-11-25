import React from 'react'
import { View, Text } from 'react-native'
import Input from '../../components/input/input'

const Contato = () => {
  const text = React.useState('')

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: 'black',
          fontSize: 22,
          fontFamily: 'Montserrat_500Medium',
          textAlign: 'center',
          maxWidth: 300
        }}
      >
        Informações de contato
      </Text>
      <Text style={styles.labelComponente}>Email</Text>
      <Input placeholder="user@gmail.com" />

      <Text style={styles.labelComponente}>Telefone</Text>
      <Input placeholder="09.131.099/0001-12" />
    </View>
  )
}
