import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const MoiveDetails = () => {
  const parmas = useLocalSearchParams();
  console.log(parmas);

  return (
    <View>
      <Text>MoiveDetails</Text>
    </View>
  );
};

export default MoiveDetails;
