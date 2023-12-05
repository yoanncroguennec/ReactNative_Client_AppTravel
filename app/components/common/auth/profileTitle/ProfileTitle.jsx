import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// ICONS
import { AntDesign } from "@expo/vector-icons";
import { Reusable, ReusableText, WidthSpacer } from "../..";
import { COLORS, SIZES } from "../../../../utils/constants/styles/theme";


export default function ProfileTitle({ onPress, title, icon }) {
  return (
    <TouchableOpacity style={styles.tile} onPress={onPress}>
      <View style={Reusable.rowWithSpace("space-between")}>
        <View style={Reusable.rowWithSpace("flex-start")}>
          <AntDesign name={icon} size={20} />

          <WidthSpacer width={15} />

          <ReusableText
            text={title}
            size={SIZES.medium}
            color={COLORS.gray}
          />
        </View>
        <AntDesign name='right' size={20} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tile: {
    backgroundColor: COLORS.lightWhite,
    width: "100%",
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 15,
  },
});
