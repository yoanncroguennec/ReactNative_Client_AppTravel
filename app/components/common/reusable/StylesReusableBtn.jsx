import { StyleSheet } from "react-native";
// CONSTANTS STYLES
import { SIZES } from "../../../utils/constants/styles/theme";

export const StylesReusableBtn = StyleSheet.create({
  btn: (backgroundBtn, borderWidth, borderColor, width) => ({
    alignItems: "center",
    backgroundColor: backgroundBtn,
    borderColor: borderColor,
    borderRadius: SIZES.small,
    borderWidth: borderWidth,
    height: 45,
    justifyContent: "center",
    width: width,
  }),
  stylesBtnText: (textColor) => ({
    color: textColor,
    fontSize: SIZES.medium,
  }),
});
