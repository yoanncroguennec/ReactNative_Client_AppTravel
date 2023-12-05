import { View } from "react-native";
// COMMON
import { Reusable, ReusableText, WidthSpacer } from "..";
// ICONS
import { MaterialIcons } from "@expo/vector-icons";

export default function RatingCommon({ rating }) {
  return (
    <View style={Reusable.rowWithSpace("flex-start")}>
      <MaterialIcons color={"#FD9942"} name='star' size={20} />

      <WidthSpacer width={5} />

      <ReusableText
        color={"#FD9942"}
        size={14}
        text={rating}
      />
    </View>
  );
}
