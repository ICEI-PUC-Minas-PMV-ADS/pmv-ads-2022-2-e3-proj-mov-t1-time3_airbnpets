import React from "react";
import { View, Text, StyleSheet, FlexStyle } from "react-native";
import { Button, TextInput, IconButton } from "react-native-paper";

const Cadastro = () => {
  const [text, setText, flexDirection, setflexDirection] = React.useState("");

  return (
    <View>
      <IconButton
        icon="arrow-left"
        iconColor="#EBEBEB"
        size={30}
        onPress={() => console.log("Pressed")}
      />
      <View style={styles.row}>
        <TextInput
          style={styles.nome}
          label="Nome"
          autoComplete="name"
          value={text}
          onChangeText={(text) => setText(text)}
        />

        <TextInput
          style={styles.sobrenome}
          label="Sobrenome"
          autoComplete="name-family"
          value={text}
          onChangeText={(text) => setText(text)}
        />
      </View>
      <TextInput
        style={styles.input}
        label="Email"
        keyboardtype="email-address"
        autoComplete="email"
        selectionColor="#EBEBEB"
        value={text}
        onChangeText={(text) => setText(text)}
      />

      <TextInput
        style={styles.input}
        label="CPF"
        value={text}
        onChangeText={(text) => setText(text)}
      />

      <TextInput
        style={styles.input}
        label="Telefone"
        keyboardtype="numeric"
        value={text}
        onChangeText={(text) => setText(text)}
      />

      <TextInput
        style={styles.input}
        label="Data de nascimento"
        value={text}
        onChangeText={(text) => setText(text)}
      />

      <TextInput
        style={styles.input}
        label="Senha"
        autoCorrect="false"
        keyboardtype="visible-password"
        autoComplete="password"
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
      />

      <TextInput
        style={styles.input}
        label="Confirme a senha"
        autoCorrect="false"
        keyboardtype="visible-password"
        autoComplete="password"
        secureTextEntry
        right={<TextInput.Icon icon="eye" secureTextEntry={false} />}
      />

      <Button
        style={styles.button}
        size={20}
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        {" "}
        CADASTRAR{" "}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  nome: {
    flex: 1,
    marginLeft: 20,
    marginRight: 3,
    fontFamily: "Montserrat_400Regular",
    borderRadius: 15,
    overflow: "hidden",
  },
  sobrenome: {
    flex: 1,
    marginLeft: 3,
    marginRight: 20,
    fontFamily: "Montserrat_400Regular",
    borderRadius: 15,
  },
  input: {
    marginTop: 8,
    marginLeft: 20,
    marginRight: 20,
    fontFamily: "Montserrat_400Regular",
    borderRadius: 15,
  },
  button: {
    margin: 20,
    backgroundColor: "#45B5C4",
    fontFamily: "Montserrat_400Regular",
    borderRadius: 13,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default Cadastro;
