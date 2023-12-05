import { FlatList, SafeAreaView, View } from "react-native";
// COMMON
import { ReusableTitle } from "../../../components/common";
// LAYOUTS
import { AppBar } from "../../../components/layouts";
// CONSTANTS STYLES
import { COLORS, SIZES } from "../../../utils/constants/styles/theme";
// DATAS
import { dataRecommended } from "../../../utils/constants/data";

export default function Recommended({ navigation }) {
  return (
    <SafeAreaView style={{ marginHorizontal: 20 }}>
      <View style={{ height: 50 }}>
        <AppBar
          color={COLORS.white}
          color1={COLORS.white}
          iconName={"search1"}
          left={0}
          onPress={() => navigation.goBack()}
          right={0}
          title={"Recommendation"}
          top={10}
        />
      </View>

      <View style={{ paddingTop: 20 }}>
        <FlatList
          contentContainerStyle={{ columnGap: SIZES.medium }}
          data={dataRecommended}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <ReusableTitle
                item={item}
                onPress={() => navigation.navigate("PlaceDetails", item.id)}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
