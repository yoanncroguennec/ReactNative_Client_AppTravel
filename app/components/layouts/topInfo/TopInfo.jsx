import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileTitle from '../../auth/profileTitle/ProfileTitle';

export default function TopInfo({ navigation }) {
  return (
    <View style={{ margin: 20 }}>
      <ProfileTitle
        title={"Personal Information"}
        icon={"user"}
        onPress={() => {}}
      />
      <ProfileTitle
        title={"Payments"}
        icon={"creditcard"}
        onPress={() => navigation.navigate("Payments")}
      />
      <ProfileTitle
        title={"Settings"}
        icon={"setting"}
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
}
