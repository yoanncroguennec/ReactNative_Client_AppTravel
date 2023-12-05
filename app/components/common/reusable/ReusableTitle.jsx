import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
// COMMON
import {
  HeightSpacer,
  NetworkImg,
  RatingCommon,
  Reusable,
  ReusableText,
  WidthSpacer,
} from "..";
// CONSTANTS STYLES
import { COLORS, TEXT } from "../../../utils/constants/styles/theme";

export default function ReusableTitle({ item, onPress }) {
  // Styles
  const { container } = StylesReusableTitle;

  return (
    <TouchableOpacity onPress={onPress} style={container}>
      <View style={Reusable.rowWithSpace("flex-start")}>
        <Image
          source={{ uri: `${item.imageUrl}` }}
          style={StylesReusableTitle.image()}
        />
        <WidthSpacer width={15} />

        <View>
          <ReusableText
            color={COLORS.black}
            size={TEXT.medium}
            text={item.title}
          />

          <HeightSpacer height={8} />

          <ReusableText
            color={COLORS.gray}
            size={14}
            text={item.location}
          />

          <HeightSpacer height={8} />

          <View style={Reusable.rowWithSpace("flex-start")}>
            <RatingCommon rating={item.rating} />

            <WidthSpacer width={5} />

            <ReusableText
              color={COLORS.gray}
              size={14}
              text={`(${item.review})`}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const StylesReusableTitle = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
    padding: 10,
  },
  image: () => ({
    width: 80,
    height: 80,
    borderRadius: 12,
    resizeMode: "cover",
  }),
});
