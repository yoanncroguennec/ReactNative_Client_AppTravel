import { Text, View } from "react-native";
import LottieView from "lottie-react-native";
import { MotiView } from "@motify/components";
// STYLES
import { Styles_AnimationIntro_Lottie } from "./Styles_AnimationIntro_Lottie";

export default function AnimationIntro_Lottie({ lottieRef }) {
  // Styles
  const size = 100;
  const {
    root_AnimationIntro_Lottie,
    styleLottieView,
    stylesMotiView,
    stylesTextLoading,
  } = Styles_AnimationIntro_Lottie;

  // Return
  return (
    <View style={root_AnimationIntro_Lottie}>
      <LottieView
        ref={lottieRef}
        source={require("../../utils/assets/lotties/Animation_For_Intro_Travel.json")}
        style={styleLottieView}
      />
      <MotiView
        animate={{
          borderRadius: (size + 20) / 2,
          borderWidth: size / 10,
          height: size + 20,
          width: size + 20,
        }}
        from={{
          borderRadius: size / 2,
          borderWidth: 0,
          height: size,
          shadowOpacity: 1,
          width: size,
        }}
        style={stylesMotiView(size)}
        transition={{
          duration: 1000,
          loop: true,
          type: "timing",
        }}
      />

      <Text style={stylesTextLoading}>Chargement .....</Text>
    </View>
  );
}
