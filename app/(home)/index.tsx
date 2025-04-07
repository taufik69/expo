// app/(home)/index.js

import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>🏠 Home</Text>
      <Button title="Go to Details" onPress={() => router.push("/onbording")} />
    </View>
  );
}
