import { FlatList, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
// COMMON
import { Reusable, ReusableText, ReusableTitle } from "../..";
// CONSTANTS STYLES
import { COLORS, SIZES, TEXT } from "../../../../utils/constants/styles/theme";
// DATAS
import { dataRecommended} from "../../../../utils/constants/data"
// ICONS
import { Feather } from "@expo/vector-icons";

export default function Recommendations() {
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
          text={"Recommandations"}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Recommended")}>
          <Feather name='list' size={20} />
        </TouchableOpacity>
      </View>
      <FlatList
        contentContainerStyle={{ columnGap: SIZES.medium }}
        data={dataRecommended}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ReusableTitle
            item={item}
            onPress={() => navigation.navigate("PlaceDetails", item.id)}
          />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
