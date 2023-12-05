import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
// COMMON
import { HeightSpacer, ReusableText } from "../../..";
// CONSTANTS STYLES 
import { COLORS, TEXT } from "../../../../../utils/constants/styles/theme";

export default function Country({ item }) {
  // console.log("item Page Country:", item);
  console.log("item.id Page Country:", item.id);
  const { stylesImgNetworkImg } = StylesNetworkImg;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CountryDetails", item.id)}
    >
      <View>
        <Image
          source={{ uri: `${item.imageUrl}` }}
          style={stylesImgNetworkImg()}
        />

        <HeightSpacer height={5} />

        <ReusableText
          text={item.country}
          size={TEXT.medium}
          color={COLORS.black}
          align={"center"}
        />
      </View>
    </TouchableOpacity>
  );
}

const StylesNetworkImg = StyleSheet.create({
  stylesImgNetworkImg: () => ({
    borderRadius: 12,
    height: 85,
    resizeMode: "cover",
    width: 85,
  }),
});
