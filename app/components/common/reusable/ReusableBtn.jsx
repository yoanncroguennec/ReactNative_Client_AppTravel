import { StyleSheet, Text, TouchableOpacity } from "react-native";
// STYLES
import { StylesReusableBtn } from "./StylesReusableBtn";
import { SIZES } from "../../../utils/constants/styles/theme";

export default function ReusableBtn({
  backgroundBtn,
  borderColor,
  borderWidth,
  btnText,
  onPress,
  textColor,
  width,
}) {
  // const width = 125;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.btnStyle(backgroundBtn, borderColor, borderWidth, width)}
    >
      <Text style={styles.btnText(textColor)}>{btnText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnText: (textColor) => ({
    fontSize: SIZES.medium,
    color: textColor,
  }),
  btnStyle: (backgroundBtn, borderColor, borderWidth, width) => ({
    alignItems: "center",
    backgroundColor: backgroundBtn,
    borderColor: borderColor,
    borderRadius: SIZES.small,
    borderWidth: borderWidth,
    height: 45,
    justifyContent: "center",
    width: width,
  }),
});
