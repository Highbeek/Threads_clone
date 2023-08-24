import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert, Text } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { login } from "../slices/userSlice";
import users from "../../assets/data/user";

export default function SignInScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSignIn = () => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      dispatch(login(user));
      setUsername("");
      setPassword("");
      navigation.navigate("MainApp");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Sign In" onPress={handleSignIn} />
        {errorMessage ? (
          <View style={styles.error}>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <Text style={styles.errorMessage}>Try again</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  formContainer: {
    width: "100%",
    maxWidth: 300,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  error: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  errorMessage: {
    color: "red",
    marginTop: 10,
  },
});
