import { useNavigation } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View
} from "react-native";
import { Button, Card, Icon, Text, useTheme } from "react-native-paper";

export default function SignupScreen() {
  const theme = useTheme();
  const navigation = useNavigation();

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
          <Text
            variant="headlineSmall"
            style={{ color: theme.colors.outline, fontWeight: "300" }}
          >
            Tell us how you will be using the app:
          </Text>
        </View>
        <Card
          mode={role === "storeOwner" ? "elevated" : "contained"}
          style={{
            width: "100%",
            borderColor: theme.colors.primary,
            borderWidth: role === "customer" ? 1 : 0
          }}
          onPress={() => {
            setRole("customer");
          }}
        >
          <Card.Content>
            <View
              style={{
                display: "flex",
                gap: 8,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Icon source="account" size={48} />
              <Text variant="titleLarge">I am a Customer</Text>
              <Text variant="bodyMedium" style={{ textAlign: "center" }}>
                Earn points, discover kasuki stores, and redeem exciting
                rewards!
              </Text>
            </View>
          </Card.Content>
        </Card>
        <Card
          mode={role === "customer" ? "elevated" : "contained"}
          style={{
            width: "100%",
            borderColor: theme.colors.primary,
            borderWidth: role === "storeOwner" ? 1 : 0
          }}
          onPress={() => {
            setRole("storeOwner");
          }}
        >
          <Card.Content>
            <View
              style={{
                display: "flex",
                gap: 8,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Icon source="store" size={48} />
              <Text variant="titleLarge">I am a Store Owner</Text>
              <Text variant="bodyMedium" style={{ textAlign: "center" }}>
                Manage loyalty, track customers, and grow your store!
              </Text>
            </View>
          </Card.Content>
        </Card>
        <Button
          mode={role ? "contained" : "outlined"}
          icon="arrow-right"
          contentStyle={{ flexDirection: "row-reverse" }}
          disabled={!role}
          style={{
            width: "100%",
            height: 50,
            display: "flex",
            justifyContent: "center"
          }}
          labelStyle={{ fontSize: 18 }}
          onPress={() => {
            console.log(`Selected role: ${role}`);
          }}
        >
          Continue
        </Button>
        <Button
          mode="text"
          onPress={() => {
            navigation.navigate("index");
          }}
          style={{ width: "100%" }}
          labelStyle={{ fontSize: 16, color: theme.colors.primary }}
        >
          Back to Login
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
