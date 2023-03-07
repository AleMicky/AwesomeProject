import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Header } from "../../components";

export function HomeScreen() {
  return (
    <>
      <View style={{ flex: 2, backgroundColor: "red", alignItems: "center", justifyConten: "center" }}>
        <Header>NEXOCORP</Header>

      </View>
      <View style={{ flex: 2, backgroundColor: "black" }}>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
