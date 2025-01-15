import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Image,
  Button,
} from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/icon.png")}
        style={{ width: 100, height: 100 }}
      />
      <Text>Open up App.js !</Text>
      <Button
        title="Pulsa aquí"
        onPress={() => {
          alert("Hola Mundo");
        }}
      />
      <TouchableHighlight
        underlayColor={"#f00"}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "red",
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => alert("Hola")}
      >
        <Text style={{ color: "white" }}>Touch me</Text>
      </TouchableHighlight>
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
