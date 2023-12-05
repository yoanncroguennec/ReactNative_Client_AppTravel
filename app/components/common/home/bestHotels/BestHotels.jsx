import { FlatList, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
// COMMON
import { HotelCard, Reusable, ReusableText } from "../..";
// CONSTANTS STYLES
import { COLORS, SIZES, TEXT } from "../../../../utils/constants/styles/theme";
// ICONS
import { Feather } from "@expo/vector-icons";
// DATAS
import { dataHotels } from "../../../../utils/constants/data/dataHotels";

export default function BestHotels() {
  // Navigation
  const navigation = useNavigation();

  return (
    <View>
      <View
        style={[Reusable.rowWithSpace("space-between"), { paddingBottom: 20 }]}
      >
        <ReusableText
          color={COLORS.black}
          size={TEXT.large}
          text={"Hôtels à proximité"}
        />
        <TouchableOpacity onPress={() => navigation.navigate("HotelList")}>
          <Feather name='list' size={20} />
        </TouchableOpacity>
      </View>

      <FlatList
        contentContainerStyle={{ columnGap: SIZES.medium }}
        data={dataHotels}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HotelCard
            item={item}
            onPress={() => navigation.navigate("HotelDetails", item.id)}
          />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
