import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="bg-red-500 h-full flex-1 justify-center items-center">
      <Text className="text-light-300 font-bold text-center">
        Edit app/index.tsx to edit this screen.
      </Text>
      <Link
        className="text-white-300 font-bold text-center px-10 py-4 rounded-md bg-light-400 mt-10 "
        href={{
          pathname: "/onbording",
        }}
      >
        Go To onbording
      </Link>

      <Link
        className="text-white-300 font-bold text-center px-10 py-4 rounded-md bg-light-400 mt-10 "
        href={{
          pathname: "/details",
        }}
      >
        Go To Home
      </Link>
    </View>
  );
}
