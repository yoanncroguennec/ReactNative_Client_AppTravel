import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const COLORS = {
  black: "#121212",
  blue: "#4267B2",
  dark: "#3D3A45",
  gray: "#8C8896",
  green: "#449282",
  lightBlue: "#6885C1",
  lightGreen: "#73ADA1",
  lightGrey: "#D1CFD5",
  lightRed: "#EB9C9B",
  lightWhite: "#FFF",
  red: "#F00",
  white: "#FBFBFB",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 44,
  windowHeight,
  windowWidth,
};

const TEXT = {
  xxSmall: 11,
  xSmall: 13,
  small: 15,
  medium: 17,
  large: 21,
  xLarge: 27,
  xxLarge: 32,
};

const SHADOWS = {
    small: {
        shadowColor: "#000",
        shadowOffset:{
          height: 2,
          width: 0,
        },
        shadowOpacity: 0.25,
        shadowRadus: 3.84,
        elevation: 2,
    }
}


export { COLORS, SIZES, TEXT, SHADOWS };
