import { StyleSheet } from "react-native";
import { COLORS } from "../../../../utils/constants/styles/theme";

export const StylesHotelDetails = StyleSheet.create({
  stylesImgNetworkImg: () => ({
    borderRadius: 25,
    height: 220,
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
  container: {
    paddingTop: 20,
    marginHorizontal: 20,
  },
  titleContainer: {
    margin: 15,
    backgroundColor: COLORS.lightWhite,
    height: 120,
    position: "absolute",
    top: 170,
    left: 0,
    right: 0,
    borderRadius: 20,
  },
  titleColumn: {
    padding: 15,
  },
  bottom: {
    paddingHorizontal: 30,
    backgroundColor: COLORS.lightWhite,
    height: 90,
    paddingVertical: 20,
  },
});