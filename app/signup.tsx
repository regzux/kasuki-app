import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View
} from "react-native";
import { Button, Card, Text, useTheme } from "react-native-paper";

export default function SignupScreen() {
  const theme = useTheme();

  const [role, setRole] = useState<"customer" | "storeOwner">("customer");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View
          style={{
            display: "flex",
            gap: 12
          }}
        >
          <Text variant="displayLarge">Kumusta, Suki!</Text>
          <Text variant="headlineSmall" style={{ color: theme.colors.outline }}>
            Tell us how you will be using the app:
          </Text>
        </View>
        <Card
          mode={role === "storeOwner" ? "elevated" : "contained"}
          style={{ width: "100%" }}
          onPress={() => {
            setRole("customer");
          }}
        >
          <Card.Content>
            <Text variant="titleLarge">I am a Customer</Text>
            <Text variant="bodyMedium">
              Earn points, discover kasuki stores, and redeem exciting rewards!
            </Text>
          </Card.Content>
        </Card>
        <Card
          mode={role === "customer" ? "elevated" : "contained"}
          style={{ width: "100%" }}
          onPress={() => {
            setRole("storeOwner");
          }}
        >
          <Card.Content>
            <Text variant="titleLarge">I am a Store Owner</Text>
            <Text variant="bodyMedium">
              Manage loyalty, track customers, and grow your store!
            </Text>
          </Card.Content>
        </Card>
        <Button
          mode={role ? "contained" : "outlined"}
          disabled={!role}
          style={{
            width: "100%",
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          labelStyle={{ fontSize: 18 }}
          onPress={() => {}}
        >
          Continue
        </Button>
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
    justifyContent: "center",
    width: "100%",
    gap: 20
  }
});
