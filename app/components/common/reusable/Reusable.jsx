import { StyleSheet } from "react-native";

export const Reusable = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  rowWithSpace: (justifyContent) => ({
    alignItems: "center",
    flexDirection: "row",
    justifyContent: justifyContent,
  }),
});
