import { View } from "react-native";
import { Text } from "react-native-paper";

export default function RegisterCustomerScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text variant="headlineLarge">Register Customer</Text>
      <Text variant="bodyMedium" style={{ marginTop: 10 }}>
        This is where the customer registration form will go.
      </Text>
      {/* Add your registration form components here */}
    </View>
  );
}
