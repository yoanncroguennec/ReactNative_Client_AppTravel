import { StyleSheet } from "react-native";

export const stylesReusableText = StyleSheet.create({
  styleText: (color, family, size, align) => ({
    color: color,
    fontSize: size,
    textAlign: "center",
    // textAlign: align,
  }),
});
