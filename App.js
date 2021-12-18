import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_700Bold,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import WelcomeScreen from "./src/screens/WelcomeScreen/WelcomeScreen";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./src/store";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <WelcomeScreen />
          <StatusBar style="auto" />
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
