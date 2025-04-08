import { View, Image, TextInput } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

type props = {
  handleSearch?: () => void;
  pleceholder: string;
};
const Search = ({ handleSearch, pleceholder }: props) => {
  const handleinput = () => {
    console.log("hi");
  };
  return (
    <View
      className="flex-row  rounded-full mt-10 w-full"
      style={{
        backgroundColor: "white",
        paddingBottom: 10,
        paddingTop: 10,
        marginTop: 12,
      }}
    >
      <Image
        source={icons.search}
        style={{ marginLeft: 20 }}
        tintColor="#AB8BFF"
        resizeMode="cover"
      />
      <TextInput
        placeholder={pleceholder}
        style={{
          marginLeft: 10,
          color: "#A8B5DB",
        }}
        onChangeText={() => {}}
        value=""
        placeholderTextColor="#A8B5DB"
        onPress={handleSearch}
      />
    </View>
  );
};

export default Search;
