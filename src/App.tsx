import React from "react";
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./api/apiSlice";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./router";

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#600EE6",
    secondary: "#414757",
    error: "#f13a59"
  }
};

export default function App() {
  return (
    <ApiProvider api={apiSlice}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </PaperProvider>
    </ApiProvider>

  );
}
