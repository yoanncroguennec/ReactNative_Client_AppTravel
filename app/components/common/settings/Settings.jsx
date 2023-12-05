import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../../utils/constants/styles/theme';
import { AppBar } from '../../layouts';
import ReusableText from '../reusable/ReusableText';
import HeightSpacer from '../reusable/HeightSpacer';
import SettingTitle from './SettingTitle';

export default function Settings({ navigation }) {
  return (
    <View style={{ backgroundColor: COLORS.lightWhite, flex: 1 }}>
      <View style={{ height: 120 }}>
        <AppBar
          top={50}
          left={20}
          right={20}
          color={COLORS.white}
          onPress={() => navigation.goBack()}
        />
      </View>

      <View style={{ marginHorizontal: 20 }}>
        <ReusableText
          text={"Paramètres du compte"}
          size={SIZES.xLarge}
          color={COLORS.black}
        />
        <HeightSpacer height={10} />

        <SettingTitle title={"Langue"} />

        <HeightSpacer height={3} />

        <SettingTitle title={"Pays"} title1={"France"} />

        <HeightSpacer height={3} />

        <SettingTitle title={"Monnaie"} title1={"EUR"} />

        <HeightSpacer height={40} />

        <ReusableText
          text={"Support"}
          size={SIZES.xLarge}
          color={COLORS.black}
        />
        <HeightSpacer height={10} />

        <SettingTitle title={"Aide"} title1={""} />

        <HeightSpacer height={3} />

        <SettingTitle title={"Donner un retour d'information"} title1={""} />

        <HeightSpacer height={40} />

        <Juridique
          text={"Juridique"}
          size={SIZES.xLarge}
          color={COLORS.black}
        />
        <HeightSpacer height={10} />

        <SettingTitle title={"Conditions d'utilisation"} title1={""} />

        <HeightSpacer height={3} />

        <SettingTitle title={"Politique de confidentialité"} title1={""} />
      </View>
    </View>
  );
}