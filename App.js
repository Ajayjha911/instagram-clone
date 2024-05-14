import React, { useState } from "react";
import {
  Button,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { View, Text, TextInput, Image } from "react-native";
import BottomTab from "./navigations/BottomTab";
import InstaLogo from "./assets/images/logo.png";
// const InstaLogo = require("./assets/logo.png");

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState(""); // Define username state
  const [password, setPassword] = useState(""); // Define password state

  const handleLogin = () => {
    const correctUsername = "user";
    const correctPassword = "password";

    if (username === correctUsername && password === correctPassword) {
      setAuthenticated(true);
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        {!authenticated ? (
          <View style={styles.formContainer}>
            <Image source={InstaLogo} style={styles.logoStyle} />
            <TextInput
              style={styles.input}
              placeholder="Phone number, username, or email"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <Button title="Log In" onPress={handleLogin} />
          </View>
        ) : (
          <View>
            <StatusBar backgroundColor="black" />
            <BottomTab />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  formContainer: {
    width: 300,
    height: 400,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logo: {
    marginBottom: 20,
    alignSelf: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  logoStyle: {
    height: 102,
    width: 110,
    backgroundColor: "black",
  },
});
