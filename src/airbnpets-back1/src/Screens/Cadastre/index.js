import React,{useState} from 'react';
import {View,Text, StyleSheet,Alert} from 'react-native';
import {Button, TextInput, IconButton} from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";

import{register} from '../../services/auth.services';


const Cadastro = () => {

    const navigation= useNavigation();

    const [nome, setNome]=useState('Raphael');
    const [sobrenome,setSobrenome]=useState('Latini');
    const [email,setEmail]=useState('raphael@hotmal.com');
    const [cpf,setCpf]=useState('0252523652');
    const [telefone,setTelefone]=useState('34562536');
    const [data,setData]=useState('01011985');
    const [senha,setSenha]=useState('123456');

    const acionarRegister=()=>{
      register({
        nome:nome,
        sobrenome:sobrenome,
        email:email,
        cpf:cpf,
        telefone:telefone,
        data:data,
        senha:senha

      }).then(res =>{
        console.log(res)
        
      if(res){
        Alert.alert('Usuário Cadastrado com sucesso!',[
          { text: "OK", onPress: () => navigation.goBack() }
        ]);

      }else{

         Alert.alert( 'Usuário não cadastrado! Tente novamente ');
      }
      })

    }

  return(

    <View> 
      <IconButton
    icon="arrow-left"
    iconColor="#EBEBEB"
    size={30}
    onPress={() => console.log('Pressed')}/>
    <View style={styles.row}>
      <TextInput style={styles.nome}
      label="Nome"
      autoComplete="name"
      value={nome}
      onChangeText={text => setNome(text)}/>

      <TextInput style={styles.sobrenome}
      label="Sobrenome"
      autoComplete="name-family"
      value={sobrenome}
      onChangeText={text => setSobrenome(text)}/>
    </View>
      <TextInput style={styles.input}
      label="Email"
      keyboardtype="email-address"
      autoComplete="email"
      selectionColor="#EBEBEB"
      value={email}
      onChangeText={text => setEmail(text)}/>

      <TextInput style={styles.input}
      label="CPF"
      value={cpf}
      onChangeText={text => setCpf(text)}/>

      <TextInput style={styles.input}
      label="Telefone"
      keyboardtype="numeric"
      value={telefone}
      onChangeText={text => setTelefone(text)}/>

      <TextInput style={styles.input}
      label="Data de nascimento"
      value={data}
      onChangeText={text => setData(text)}/>

      <TextInput style={styles.input}
      label="Senha"
      value={senha}
      secureTextEntry
      keyboardtype="visible-password"
      onChangeText={(text)=>setSenha(text)}
      right={<TextInput.Icon icon="eye" />}/>

      

      <Button style={styles.button} 
      size={20} 
      mode="contained" 
      onPress={acionarRegister}> CADASTRAR </Button>
    
    </View>
    
  );

}

const styles = StyleSheet.create({
    nome: {
        flex: 1,
        marginLeft: 20,
        marginRight: 3,
        fontFamily: "Montserrat_400Regular",
        borderRadius: 15,
        overflow: 'hidden'
    },
    sobrenome: {
        flex: 1,
        marginLeft: 3,
        marginRight: 20,
        fontFamily: "Montserrat_400Regular",
        borderRadius: 15
    },
    input: {
        marginTop: 8,
        marginLeft: 20,
        marginRight: 20,
        fontFamily: "Montserrat_400Regular",
        borderRadius: 15,
    },
    button: {
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
      backgroundColor: "#45B5C4",
      fontFamily: "Montserrat_400Regular",
      borderRadius: 13,
    },
    row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
})

export default Cadastro;
