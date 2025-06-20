import { View, Text, StyleSheet } from "react-native";

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
      <View style={styles.box}></View>
      <View style={styles.box}></View>
      <View style={styles.box}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "silver",
    flexDirection: "column",
  },
  box: {
    flex: 1, 
    height: 100,
    backgroundColor: "lightgray",
    margin: 10,
  },
});
