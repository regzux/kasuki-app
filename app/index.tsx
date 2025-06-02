import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View
} from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function OnboardingScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require("../assets/images/kasuki-hi-res.png")}
          style={styles.logo}
          resizeMode="contain"
          accessibilityLabel="Kasuki Logo"
        />
        <Text variant="headlineLarge">Welcome to Kasuki</Text>
        <Text variant="headlineSmall" style={styles.subtitle}>
          Your Suki Rewards, Digitized!
        </Text>
        <View style={styles.loginFormContainer}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            label="Password"
            value={password}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
          />
          <Button mode="contained" style={styles.loginButton}>
            LOGIN
          </Button>
        </View>
        <View style={styles.signupContainer}>
          <Text variant="bodyMedium">Don't have an account?</Text>
          <Button
            mode="elevated"
            style={styles.signupButton}
            onPress={() => router.push("/signup")}
          >
            Create an account
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 100,
    paddingHorizontal: 38,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 36
  },
  title: {
    fontSize: 30,
    fontWeight: "bold"
  },
  subtitle: {
    marginBottom: 30
  },
  loginFormContainer: {
    display: "flex",
    gap: 10,
    flexDirection: "column",
    width: "100%"
  },
  input: {
    width: "100%"
  },
  loginButton: {
    height: 50,
    justifyContent: "center"
  },
  signupButton: {
    width: "100%",
    height: 50,
    justifyContent: "center"
  },
  signupContainer: {
    marginTop: 50,
    display: "flex",
    gap: 10,
    flexDirection: "column",
    width: "100%",
    alignItems: "center"
  }
});
