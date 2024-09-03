import { View, Text, StyleSheet, TextInput, Image, Alert } from "react-native";
import React, { useState } from "react";
import Button from "@/src/components/Button";
import Colors from "@/src/constants/Colors";
import { Link, router, Stack, useLocalSearchParams, useSegments } from "expo-router";

const SignInScreen = () => {
  const segments = useSegments();
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [errors, setErrors] = useState("");
  const params = useLocalSearchParams();
  const isSignUp:boolean = params.isSignUp === "true";
  console.log(segments);
  console.log("isSignUp", isSignUp);
  const resetFields = () => {
    setEmail("");
    SetPassword("");
  };
  const validateInput = () => {
    setErrors("");
    if (!email) {
      setErrors("email is required");
      return false;
    }
    if (!password) {
      setErrors("password is required");
      return false;
    }
    return true;
  };
  const onCreate = () => {
    if (!validateInput()) {
      return;
    }
    console.warn("creating account", email);
    // submit data to the database
    resetFields();
  };

  const onSignIn = () => {
    if (!validateInput()) {
      return;
    }
    console.warn("signing into account", email);
    // submit data to the database
    resetFields();
  };

  const onSubmit = () => {
    if (isSignUp) {
        onCreate();
    } else {
        onSignIn();
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ title: isSignUp ? "Sign up" : "Sign-in" }}       
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="my_email@swag.com"
        style={styles.input}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={SetPassword}
        secureTextEntry={true}  
        style={styles.input}
      />
      <Text style={{ color: "red" }}>{errors}</Text>
      <Button onPress={onSubmit} text={isSignUp ? "Create account" :"Sign in "} />
        {(isSignUp ? 
        <Link href={`/(auth)/sign-in?isSignUp=false`} style={styles.textButton} >
            Sign-in
        </Link>
        :
        <Link href={`/(auth)/sign-in?isSignUp=true`} style={styles.textButton} >
            Create an account
        </Link>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
    color: "gray",
  },
  label: {
    color: "gray",
    fontSize: 16,
  },
  image: {
    width: "50%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.light.tint,
    marginVertical: 10,
  },
});
export default SignInScreen;
