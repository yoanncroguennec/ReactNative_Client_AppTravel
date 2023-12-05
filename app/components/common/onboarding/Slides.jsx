import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
// COMMONS
import { HeightSpacer, ReusableBtn, ReusableText } from "..";
// CONSTANTS STYLES
import { COLORS, SIZES } from "../../../utils/constants/styles/theme";
// STYLES
import { stylesSlides } from "./StylesSlides";

export default function Slides({ item }) {
  // Props
  const { img, title } = item;

  // Styles
  const { styleImg, stack } = stylesSlides;

  // Nav
  const navigation = useNavigation();

  return (
    <View>
      <Image source={img} style={styleImg} />
      <View style={stack}>
        <ReusableText color={COLORS.white} size={SIZES.xxLarge} text={title} />

        <HeightSpacer height={40} />

        <ReusableBtn
          backgroundBtn={COLORS.white}
          borderColor={COLORS.red}
          borderWidth={3}
          btnText={"C'est parti"}
          onPress={() => navigation.navigate("modalHomeTheApplication")}
          // onPress={() => navigation.navigate("BottomTabApp_Routes")}
          textColor={COLORS.black}
          width={(SIZES.windowWidth - 50) / 2.2}
        />
      </View>
    </View>
  );
}
