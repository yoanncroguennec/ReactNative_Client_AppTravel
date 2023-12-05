import { StyleSheet } from "react-native";

export const Styles_AnimationIntro_Lottie = StyleSheet.create({
  root_AnimationIntro_Lottie: {
    alignItems: "center",
    backgroundColor: "#000",
    flex: 1,
    justifyContent: "space-evenly",
  },
  styleLottieView: { height: 400, width: "100vw" },
  stylesMotiView: (size) => ({
    borderColor: "#FFF",
    borderRadius: size / 2,
    borderWidth: size / 2,
    height: size,
    shadowColor: "#FFF",
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    width: size,
  }),
  stylesTextLoading: {
    color: "#FFF",
    fontSize: 25,
    fontWeight: "bold",
  },
});
