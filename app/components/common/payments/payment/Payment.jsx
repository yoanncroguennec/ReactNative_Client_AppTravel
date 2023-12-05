import { View, Switch } from "react-native";
import React, { useState } from "react";
import AssetImage from "../../../layouts/topTab/AssetImage";
import ReusableText from "../../reusable/ReusableText";
import { COLORS, TEXT } from "../../../../utils/constants/styles/theme";
import { Reusable } from "../../reusable/Reusable";


export default function Payment() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View
      style={[
    Reusable.rowWithSpace("space-between"),
        { backgroundColor: COLORS.lightWhite, height: 60, borderRadius: 12 },
      ]}
      onPress={() => {}}
    >
      <AssetImage data={image} height={50} width={50} mode={"contain"} />

      <ReusableText
        text={title}
        size={TEXT.xLarge - 5}
        color={COLORS.black}
      />

      <Switch
        trackColor={{ false: COLORS.lightGrey, true: COLORS.lightGrey }}
        thumbColor={isEnabled ? COLORS.blue : COLORS.lightBlue}
        ios_backgroundColor={COLORS.gray}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}
