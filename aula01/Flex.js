import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  // const [nome, setNome] = useState("João Thug Stronda");

  // function teste() {
  //   setNome("Hugo Boss")
  // }

  function Header() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View>
    );
  }

  function Body() {
    return (
      <View style={styles.body}>
        <Text style={styles.bodyText}>Body Content</Text>
      </View>
    );
  }

  function Footer() {
    return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <Body/>


      {/* <Text style={{ fontSize: 20 }}>{nome}</Text> */}
      {/* <Button onPress={teste} title='Alterar nome'/> */}

      {/* <TouchableOpacity onPress={teste} title='Alterar nome'>
        <Text style={{ fontSize: 20 }}>{nome}</Text>
      </TouchableOpacity> */}
      <StatusBar style={{ flex: 1, backgroundColor: '#00401d' }} barStyle="light-content" />
      {/* <View style={{ flex: 1, backgroundColor: "blue" }}>
        <Text>Alexia</Text>
        <Text>Alexia</Text>
        <Text>Alexia</Text>
        <Text>Alexia</Text>
        <Text>Alexia</Text>
      </View>

      <View style={{ flex: 1, backgroundColor: "green" }}>
        <Text>Hugo</Text>
      </View>

      <View style={{ flex: 1, backgroundColor: "red" }}>
        <Text>Duda</Text>
      </View> */}
      <Footer />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
