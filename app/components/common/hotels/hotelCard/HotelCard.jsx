import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
// COMMON
import { HeightSpacer, NetworkImg, RatingCommon, ReusableText } from "../..";
// CONSTANTS STYLES
import { COLORS, SIZES } from "../../../../utils/constants/styles/theme";

export default function HotelCard({ item, margin, onPress }) {
  // Styles
  const { card, imgContainer, stylesImgNetworkImg } = StylesHotelCard;

  return (
    <TouchableOpacity onPress={onPress} style={card(margin)}>
      <View>
        <View style={imgContainer}>
          <Image
            source={{ uri: `${item.imageUrl}` }}
            style={stylesImgNetworkImg()}
          />

          <NetworkImg
            height={"100%"}
            radius={16}
            source={item.img}
            width={"90%"}
          />
        </View>

        <HeightSpacer height={5} />

        <View style={{ padding: 10 }}>
          <ReusableText
            color={COLORS.black}
            size={SIZES.medium}
            text={item.title}
          />

          <HeightSpacer height={5} />

          <ReusableText
            color={COLORS.gray}
            size={SIZES.medium}
            text={item.location}
          />

          <HeightSpacer height={5} />

          <RatingCommon rating={item.rating} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const StylesHotelCard = StyleSheet.create({
  card: (margin) => ({
    backgroundColor: COLORS.lightWhite,
    borderRadius: 16,
    height: 250,
    marginRight: margin,
    width: SIZES.windowWidth / 2.2,
  }),
  imgContainer: {
    alignItems: "center",
    height: 150,
    marginTop: 10,
  },
  stylesImgNetworkImg: () => ({
    borderRadius: 16,
    height: "100%",
    resizeMode: "cover",
    width: "90%",
  }),
});
