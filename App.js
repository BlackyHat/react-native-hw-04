import React from "react";
// import { View, StyleSheet } from "react-native";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import * as SplashScreen from "expo-splash-screen";
import { createStackNavigator } from "@react-navigation/stack";

SplashScreen.preventAutoHideAsync();
const MainStack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer onLayout={onLayoutRootView}>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

{
  /* <View style={styles.container} onLayout={onLayoutRootView}></View>
const styles = StyleSheet.create({
  container: { flex: 1, fontFamily: "Roboto" },
}); */
}
