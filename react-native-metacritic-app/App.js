import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/icon.png")}
        style={{ width: 100, height: 100 }}
      />
      <Text>Open up App.js !</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09f",
    alignItems: "center",
    justifyContent: "center",
  },
});
