import { View, Text, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
// LAYOUTS
import { AppBar } from "../../../../components/layouts";
// CONSTANTS THEMES
import { COLORS } from "../../../../utils/constants/styles/theme";

export default function PlacesByCountry({ navigation }) {
  const router = useRoute();
  const id = router.params;
  // console.log("id, PlacesByCountry :", id);

  return (
    <SafeAreaView style={{ marginHorizontal: 20 }}>
      <View style={{ height: 50 }}>
        <AppBar
          top={10}
          left={0}
          right={0}
          title={"Popular Destinations"}
          color={COLORS.white}
          icon={"search1"}
          color1={COLORS.white}
          onPress={() => navigation.goBack()}
          onPress1={() => navigation.navigate("HotelSearch")}
        />
      </View>
    </SafeAreaView>
  );
}
