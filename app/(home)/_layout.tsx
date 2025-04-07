import React from "react";
import { Stack } from "expo-router";

const HomeLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "blue",
        },

        headerTintColor: "red",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        animation: "flip", // অথবা 'slide' বা 'flip'
      }}
    >
      <Stack.Screen name="index" options={{ title: "🏠 Home Screen" }} />
      <Stack.Screen
        name="details"
        options={{ title: "👤  Details Screen 🏠" }}
      />
    </Stack>
  );
};

export default HomeLayout;
