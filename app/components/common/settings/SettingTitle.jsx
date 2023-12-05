import { StyleSheet, Image, TouchableOpacity, View } from "react-native";
// ICONS
import { AntDesign } from "@expo/vector-icons";
import { Reusable } from "../reusable/Reusable";
import ReusableText from "../reusable/ReusableText";
import { COLORS, TEXT } from "../../../utils/constants/styles/theme";
import WidthSpacer from "../reusable/WidthSpacer";


export default function SettingTitle({ title, title1, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[Reusable.rowWithSpace("space-between"), styles.container]}
    >
      <ReusableText text={title} size={TEXT.large} color={COLORS.dark} />

      {title === "Language" ? (
        <View style={Reusable.rowWithSpace("flex-start")}>
          <Image
            // source={require("../../../assets/images/USA.png")}
            style={styles.image}
          />
          <WidthSpacer width={5} />
          <ReusableText
            text={"Français"}
            size={TEXT.large}
            color={COLORS.gray}
          />
          <WidthSpacer width={5} />
          <AntDesign name='right' size={20} color={COLORS.dark} />
        </View>
      ) : (
        <View style={Reusable.rowWithSpace("flex-start")}>
          <ReusableText
            text={title1}
            family={"regular"}
            size={TEXT.large}
            color={COLORS.gray}
          />
          <WidthSpacer width={5} />
          <AntDesign name='right' size={20} color={COLORS.dark} />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: COLORS.lightGrey,
    paddingVertical: 15,
  },
  image: { width: 40, height: 30, resizeMode: "contain" },
});
