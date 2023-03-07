import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { Navigation } from "../../types";
import { theme } from "../../App";
import { Button, Header, Logo, TextInput } from "../../components";
import { Avatar, Checkbox, IconButton, MD3Colors, Text } from "react-native-paper";

type Props = {
  navigation: Navigation;
};

const Remember = () => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Text style={styles.label}>Remember me </Text>
    </View>
  );
};

const ICON = [
  {
    name: "chat-processing"
  },
  {
    name: "git"
  },
  {
    name: "gamepad"
  },
  {
    name: "bank"
  },
  {
    name: "reddit"
  }
];

const EntidadButton = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {
        ICON.map((data: { name: string }, index: number) => (
          <IconButton
            key={index}
            icon={data.name}
            iconColor={theme.colors.primary}
            size={40}
            onPress={() => console.log("Pressed")}
          />
        ))
      }
    </View>
  );
};

export function AuthScreen({navigation}: Props) {

  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={(Platform.OS === "ios") ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={{   justifyContent: "center",
            alignItems: "center",}}>
            <Logo />
            <Header>NEXOCORP</Header>
          </View>
          <View style={styles.subView}>
            <Avatar.Icon size={90} icon="camera" />
            <TextInput
              label="Username"
              returnKeyType="next"
              value={email.value}
              onChangeText={text => setEmail({ value: text, error: "" })}
              error={!!email.error}
              errorText={email.error}
            />
            <TextInput
              label="Password"
              returnKeyType="done"
              value={password.value}
              onChangeText={text => setPassword({ value: text, error: "" })}
              error={!!password.error}
              errorText={password.error}
              secureTextEntry
            />

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Remember />
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Text style={styles.link}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <Button mode="contained" onPress={() => navigation.navigate('Home')}>
              Login
            </Button>
          </View>
          <View style={styles.viewFooter}>
            <EntidadButton />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignSelf: "center",
    justifyContent: "center"
  },
  subView: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    height: 400,
    marginHorizontal: 25,
    borderRadius: 40
  },
  viewFooter:{
    height: 100,
    position:'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  label: {
    color: theme.colors.secondary
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary
  }
});


