import { StyleSheet, Text, View } from "react-native";

import { useState } from "react";
import { MyInput } from "./components";


function App() {

  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <MyInput
        text={text}
        setText={setText}
        placeholder="Enter your text"
        customStyle={{ backgroundColor: "white" }}
      />
    </View>
  );
}

let AppEntryPoint = App;

if (process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true") {
  AppEntryPoint = require("./.ondevice").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;
