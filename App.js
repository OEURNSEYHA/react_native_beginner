import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
// const logoImage = require("./assets/adaptive-icon.png");
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "plum",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <View style={{ width: 200, height: 200, backgroundColor: "white" }}>
        <Image
          source={{ uri: "https://picsum.photos/300" }}
          style={{ width: 200, height: 200, objectFit: "cover" }}
        />
      </View> */}
      <View style={{width: 200, height: 150}}> 
      <ImageBackground
        source={{ uri: "https://picsum.photos/300" }}
        style={{ flex: 1 }}
      >
        <Text> hello </Text>
      </ImageBackground>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#3498db",
  },
});
