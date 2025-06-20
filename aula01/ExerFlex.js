import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'

export default function App() {
  return (
      <View style={styles.container}>
          <StatusBar backgroundColor='gray' barStyle='light-content' />
          <View style={styles.box}>
              <TouchableOpacity><Text>Voltar</Text></TouchableOpacity>
              <TouchableOpacity><Text>Home</Text></TouchableOpacity>
              <TouchableOpacity><Text>Detalhes</Text></TouchableOpacity>
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    },
    box: {
        flex: 0.1,
        backgroundColor: "gray",
        flexDirection: "row",
        color: "black"
        
    }
});