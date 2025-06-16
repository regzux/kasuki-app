import { View } from "react-native";
import { Text } from "react-native-paper";

export default function RegisterStoreOwnerScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text variant="headlineLarge">Register Store Owner</Text>
      <Text variant="bodyMedium" style={{ marginTop: 10 }}>
        This is where the store owner registration form will go.
      </Text>
      {/* Add your registration form components here */}
    </View>
  );
}
