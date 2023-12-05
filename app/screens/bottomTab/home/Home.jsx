import { View, TouchableOpacity, ScrollView } from "react-native";
// COMMON
import {
  BestHotels,
  HeightSpacer,
  Places,
  Recommendations,
  Reusable,
  ReusableText,
} from "../../../components/common";
// ICONS
import { AntDesign } from "@expo/vector-icons";
// DATAS
import { COLORS, SIZES } from "../../../utils/constants/styles/theme";
// STYLES
import { StylesHome } from "./StylesHome";

export default function Home({ navigation }) {
  // STYLES
  const { box } = StylesHome;

  return (
    <View style={[Reusable.container, {}]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeightSpacer height={50} />
        <View>
          <View style={Reusable.rowWithSpace("space-between")}>
            <ReusableText
              color={COLORS.black}
              size={SIZES.large}
              text={"Bienvenue voyageur(euse) !"}
            />

            <TouchableOpacity
              onPress={() => navigation.navigate("Search")}
              style={box}
            >
              <AntDesign name='search1' size={26} />
            </TouchableOpacity>
          </View>
          <HeightSpacer height={SIZES.xLarge} />
          {/* LIST SLIDE HORIZONTAL COUNTRIES */}
          <Places />
          <HeightSpacer height={35} />
          {/* LIST SLIDE HORIZONTAL ATTRACTIONS */}
          <Recommendations />
          <HeightSpacer height={30} />
          {/* LIST SLIDE HORIZONTAL HOTELS */}
          <BestHotels />
          <HeightSpacer height={150} />
        </View>
      </ScrollView>
    </View>
  );
}
