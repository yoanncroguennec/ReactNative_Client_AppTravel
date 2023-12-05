import { StyleSheet, Text } from "react-native";
// CONSTANTS THEME
import { TEXT } from "../../../utils/constants/styles/theme";

export default function ReusableDescriptionText({ lines, text }) {
  return (
    <Text numberOfLines={lines} style={styles.description}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  description: {
    paddingVertical: 10,
    textAlign: "justify",
    fontSize: TEXT.medium - 2,
  },
});
