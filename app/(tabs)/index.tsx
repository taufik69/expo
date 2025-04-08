import { Link, useRouter } from "expo-router";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import { fetchmoive } from "@/service/api";

import { usefetch } from "@/service/useFetch";
import Moivecard from "@/components/Moivecard";

export default function Index() {
  const router = useRouter();
  const { data, loading, error } = usefetch(fetchmoive, true);

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="w-full  absolute  " />

      {/* scrollview */}
      <ScrollView
        className="flex-1 px-5  bg-primary"
        showsVerticalScrollIndicator={false}
        // keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View>
          <Image
            source={icons.logo}
            className=" w-12 h-12 mt-24 mx-auto  mb-4"
          />

          <SearchBar
            handleSearch={() => router.push("/search")}
            pleceholder="Search through 300+ movies online"
          />

          {/* data arrived here */}

          {loading ? (
            <ActivityIndicator size="large" color="#A8B5DB" />
          ) : error ? (
            <Text>{error.message}</Text>
          ) : (
            <View>
              <Text className="text-lg text-white font-bold mt-5 mb-3">
                Latest Movies
              </Text>

              <FlatList
                data={data}
                renderItem={({ item }) => <Moivecard {...item} />}
                keyExtractor={(item) => item.id.toString()}
                scrollEnabled={false}
                columnWrapperStyle={{
                  justifyContent: "center",
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 40,
                }}
                numColumns={2}
                className="mt-2 pb-32"
              />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
