import { useState } from 'react'
import {Text, TextInput, SafeAreaView, StyleSheet, StatusBar } from 'react-native'

export default function App() {
  const [nome, setNome] = useState();
  function buscarNome(texto) {
        texto.length > 0? setNome("Bem vindo, " + texto + "!"): setNome();
  }

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar />
        <TextInput style={styles.input}
        keyboardType="default"
        placeholder="Digite seu nome"
        onChangeText={(texto) => buscarNome(texto)}
      />
      <Text>{nome}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 50,
    borderWidth: 5
  },
});
