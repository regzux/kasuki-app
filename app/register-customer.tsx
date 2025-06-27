import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import globalStyles from "./_styles";

export default function RegisterCustomerScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={globalStyles.container}>
      <Text variant="headlineLarge" style={{ fontWeight: "bold" }}>
        Register As Customer
      </Text>
      <Text variant="titleLarge" style={{ marginTop: 10 }}>
        Join our suki communnity now!
      </Text>
      <View style={{ marginTop: 20, width: "100%", gap: 20 }}>
        <TextInput
          label="Full Name"
          value={name}
          onChangeText={(text) => setName(text)}
          style={{ width: "100%" }}
        />
        <TextInput
          label="Email"
          value={email}
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          style={{ width: "100%" }}
        />
        <TextInput
          label="Password"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          style={{ width: "100%" }}
        />
        <TextInput
          label="Confirm Password"
          value={confirmPassword}
          secureTextEntry
          onChangeText={(text) => setConfirmPassword(text)}
          style={{ width: "100%" }}
        />
        <Button
          mode="contained"
          style={{ height: 50, justifyContent: "center" }}
          labelStyle={{ fontSize: 18 }}
        >
          Create an account
        </Button>
      </View>
    </View>
  );
}
