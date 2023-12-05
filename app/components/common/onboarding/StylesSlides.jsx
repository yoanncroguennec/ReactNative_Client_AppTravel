import { StyleSheet } from "react-native";
import { SIZES } from "../../../utils/constants/styles/theme";

export const stylesSlides = StyleSheet.create({
  styleImg: {
    resizeMode: "cover",
    height: SIZES.windowHeight,
    width: SIZES.windowWidth,
  },
  stack: {
    bottom: 0,
    marginBottom: 60,
    marginHorizontal: 20,
    position: "absolute",
  },
});
