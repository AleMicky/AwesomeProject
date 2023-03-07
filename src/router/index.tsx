import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthScreen, EntidadScreen, HomeScreen, MenuScreen } from "../screens";


const Stack = createNativeStackNavigator();

function Router() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Login" component={AuthScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Entidad" component={EntidadScreen} />
      <Stack.Screen name="Menu" component={MenuScreen} />
    </Stack.Navigator>
  );
}

export default Router;
