import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
} from "react-native";
import Input from "../../components/input/input";
import FilledButton from "../../components/FilledButton";

const EditPerfil = () => {
  const [text, onChangeText] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <View style={styles.ViewInputnome}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={onChangeText}
            value={text}
            placeholder="Nome"
          />
        </View>

        <View style={styles.ViewInputnome}>
        <Text style={styles.label}>Sobrenome</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={onChangeText}
            value={text}
            placeholder="Sobrenome"
          />

        </View>
      </View>
      <Text style={styles.labelComponente}>Email</Text>
      <Input placeholder="user@gmail.com" />

      <Text style={styles.labelComponente}>CNPJ</Text>
      <Input placeholder="09.131.099/0001-12" />

      <Text style={styles.labelComponente}>Telefone</Text>
      <Input placeholder="(99) 99999-9999" />

      <Text style={styles.labelComponente}>Data Nascimento</Text>
      <Input placeholder="20/02/1997" />

      <Text style={styles.labelComponente}>Senha</Text>
      <Input />

      <FilledButton text='SALVAR' background='#45B5C4' color="#FFF"/>
    </View>
  );
};

export default EditPerfil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "baseline",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  view: {
    flexDirection: "row",
    marginTop: 30,
  },
  ViewInputnome: {
    width: 205,
    height: 80    
  },
  label: {
    color: "rgba(97, 97, 97, 1)",
    fontfamily: 'Montserrat',
    fontSize: 20,
    marginHorizontal: 23,
  },
  textInput: {
    height: 50,
    flex: 1,
    backgroundColor: "#EBEBEB",
    paddingLeft: 10,
    marginHorizontal: 20,
    // marginTop: 6,
    marginBottom: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  labelComponente: {
    fontfamily: 'Montserrat',
    color: "rgba(97, 97, 97, 1)",
    fontSize: 20,
    alignSelf: "flex-start",
    marginLeft: 20,
    marginTop: 10
  }
});