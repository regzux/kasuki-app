import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider
} from "react-native-paper";
import "react-native-reanimated";

const theme = {
  ...DefaultTheme,
  dark: false,
  roundness: 2,
  colors: {
    primary: "rgb(4, 30, 66)",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(206, 220, 240)",
    onPrimaryContainer: "rgb(0, 18, 41)",
    secondary: "rgb(255, 199, 44)",
    onSecondary: "rgb(0, 0, 0)",
    secondaryContainer: "rgb(255, 236, 166)",
    onSecondaryContainer: "rgb(60, 48, 0)",
    tertiary: "rgb(194, 91, 86)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(255, 218, 215)",
    onTertiaryContainer: "rgb(69, 21, 19)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(255, 251, 255)",
    onBackground: "rgb(29, 27, 30)",
    surface: "rgb(255, 251, 255)",
    onSurface: "rgb(29, 27, 30)",
    surfaceVariant: "rgb(224, 227, 235)",
    onSurfaceVariant: "rgb(66, 70, 78)",
    outline: "rgb(118, 121, 129)",
    outlineVariant: "rgb(196, 199, 207)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(50, 47, 51)",
    inverseOnSurface: "rgb(245, 239, 244)",
    inversePrimary: "rgb(160, 198, 255)",
    elevation: {
      level0: "transparent",
      level1: "rgb(245, 243, 249)",
      level2: "rgb(239, 237, 245)",
      level3: "rgb(232, 235, 241)",
      level4: "rgb(230, 233, 240)",
      level5: "rgb(226, 231, 238)"
    },
    surfaceDisabled: "rgba(29, 27, 30, 0.12)",
    onSurfaceDisabled: "rgba(29, 27, 30, 0.38)",
    backdrop: "rgba(51, 47, 55, 0.4)"
  }
};

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf")
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}
