import React from "react";
import { View } from "react-native";
import { Appbar, List, Text } from "react-native-paper";
import { Navigation } from "../../types";

type Props = {
  navigation: Navigation;
};

export function MenuScreen({ navigation }: any) {
  const _goBack = () => navigation.goBack();

  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => console.log("Shown more");
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header mode={"center-aligned"}>
        <Appbar.Action icon="format-align-justify" onPress={_goBack} />
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="Menu" />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
      <View style={{ flex: 1 }}>
        <List.Item title="Mi cuenta" />
        <List.Item title="Nuestra vision" />
        <List.Item title="Politicas Nexocorp" />
        <List.Item title="HCM tus cursos online" />
        <List.Item title="Tus logros" />

      </View>
    </View>
  );
}

