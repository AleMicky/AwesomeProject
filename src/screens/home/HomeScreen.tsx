import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Logo } from "../../components";
import { Text } from "react-native-paper";
import { Navigation } from "../../types";

export interface IUser {
  id: string;
  name: string;
}

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
  }
];

type Props = {
  navigation: Navigation;
};


export function HomeScreen({navigation}: Props) {
  return (
    <>
      <View style={styles.containerTitle}>
        <Logo />
        <Text style={{ marginBottom: 30 }} variant="headlineMedium">NEXOCORP</Text>
        <Text variant="headlineLarge">BIENVENIDA!</Text>
        <Text style={{ marginBottom: 30 }} variant="headlineLarge">Estefani!</Text>
        <Text variant="titleLarge">Seleciona la unidad de negocio</Text>
        <Text variant="titleLarge">a la que perteneces</Text>
      </View>
      <View style={{ flex: 2, alignItems: "center", marginTop: 30 }}>
        <FlatList
          data={DATA}
          keyExtractor={(item: IUser) => item.id}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={ () => navigation.navigate('Entidad') }
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
    </>
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
