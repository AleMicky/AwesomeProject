import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { Appbar, Avatar, Text } from "react-native-paper";
import { theme } from "../../App";
import { IUser } from "../home/HomeScreen";
import { Navigation } from "../../types";
type Props = {
  navigation: Navigation;
};
const DATA = [
  {
    id: "1",
    name: "1"
  },
  {
    id: "2",
    name: "2"
  },
  {
    id: "3",
    name: "3"
  },
  {
    id: "4",
    name: "4"
  },
  {
    id: "5",
    name: "5"
  },
  {
    id: "6",
    name: "6"
  },
  {
    id: "7",
    name: "7"
  },
  {
    id: "8",
    name: "8"
  },
  {
    id: "9",
    name: "9"
  }
];

export function EntidadScreen({navigation}: Props) {
  const _goBack = () => console.log("Went back");


  const _handleMore = () => navigation.navigate('Menu') ;

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Action icon="format-align-justify" onPress={_goBack} />
        <Appbar.Content title=" " />
        <Appbar.Action icon="cog" onPress={_handleMore} />
      </Appbar.Header>
      <View style={{ flex: 2, alignItems: "center", marginTop: 30 }}>
        <Avatar.Icon size={150} icon="account-circle" />
        <Text style={{ marginTop: 10 }} variant="headlineMedium">Estafani Aviles Muriillo</Text>
        <Text style={{ marginBottom: 10 }} variant="titleLarge">avilesa@farmacorp.com</Text>
        <View style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          borderWidth: 1,
          borderColor: theme.colors.primary,
          marginHorizontal: 30
        }}>
          <Text variant="displaySmall">32240</Text>
          <Text variant="headlineMedium">Puntos Nexoclub</Text>
        </View>
      </View>
      <View style={{ flex: 2, alignItems: "center", marginTop: 30 }}>
        <FlatList
          data={DATA}
          keyExtractor={(item: IUser) => item.id}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={ () => console.log(1) }
            >
              <View style={{
                ...styles.boton,
                backgroundColor: "#9B9B9B",
                width: 80
              }}>
                <Text style={{
                  ...styles.botonTexto,
                  color: "white"
                }}>{item.name}</Text>
              </View>

            </TouchableOpacity>
          )}
          onEndReachedThreshold={0.4}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerTitle: {
    flex: 2,
    backgroundColor: "mistyrose",
    alignItems: "center",
    justifyContent: "center"
  },
  boton: {
    height: 80,
    width: 80,
    backgroundColor: "#2D2D2D",
    borderRadius: 100,
    justifyContent: "center",
    marginHorizontal: 20,
    marginVertical: 20
  },
  botonTexto: {
    textAlign: "center",
    padding: 10,
    fontSize: 30,
    color: "white",
    fontWeight: "300"
  }
});
