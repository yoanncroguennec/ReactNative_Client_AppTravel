import { StyleSheet } from "react-native";
// CONSTANTS THEMES
import { COLORS, SIZES } from "../../../../utils/constants/styles/theme";

export const StylesCountryDetails = StyleSheet.create({
  stylesImgNetworkImg: () => ({
    borderRadius: 30,
    height: 350,
    resizeMode: "cover",
    width: "100%",
  }),
  description: {
    marginHorizontal: 20,
    paddingTop: 20,
  },
  btnText: () => ({
    fontSize: SIZES.medium,
    color: COLORS.white,
  }),
  btnStyle: () => ({
    width: SIZES.windowWidth - 40,
    backgroundColor: COLORS.green,
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    borderRadius: SIZES.small,
    borderColor: COLORS.green,
    borderWidth: 0,
  }),
});