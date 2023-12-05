import { View, Image, Alert, TouchableOpacity, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { COLORS, SIZES } from "../../../utils/constants/styles/theme";
import AppBar from "../appBar/AppBar";
import { HeightSpacer, ReusableText } from "../../common";
import styles from "./topTab.style";
import AssetImage from "./AssetImage";
import TopBookings from "../topBookings/TopBookings";
import TopTrips from "../topTrips/TopTrips";
import TopInfo from "../topInfo/TopInfo";
// IMGS
import UserProfile from "./user.png";
import Signin from "../../../screens/auth/signin/Signin";

export default function TopTab({ navigation }) {
  const Tab = createMaterialTopTabNavigator();

  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: COLORS.lightWhite }}>
        <View>
          <AssetImage
            data={require("./travel2.jpg")}
            width={"100%"}
            height={300}
            mode={"cover"}
          />

          <AppBar
            top={40}
            left={20}
            right={20}
            color={COLORS.white}
            icon={"logout"}
            color1={COLORS.white}
            onPress1={() => {
              userLogout();
            }}
          />

          <View style={styles.profile}>
            <Image source={UserProfile} style={styles.image} />

            <HeightSpacer height={5} />

            <View style={{ alignItems: "center" }}>
              <ReusableText
                text={
                  userData
                    ? userData.username
                    : "Impossible de charger votre nom"
                }
                size={SIZES.medium}
                color={COLORS.lightWhite}
              />
            </View>

            <HeightSpacer height={5} />

            <View style={styles.name}>
              <View style={{ alignItems: "center" }}>
                <ReusableText
                  text={
                    userData ? (
                      userData.email
                    ) : (
                      <Button
                        onPress={() => navigation.navigate("Signin")}
                        title="Vous n'êtes pas connecté"
                      />
                    )
                  }
                  size={SIZES.medium}
                  color={COLORS.white}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <Tab.Navigator>
        <Tab.Screen name='Mes réservations' component={TopBookings} />
        <Tab.Screen name='Mes voyages' component={TopTrips} />
        <Tab.Screen name='Mes infos personnel' component={TopInfo} />
        <Tab.Screen name='Se connecter' component={Signin} />
      </Tab.Navigator>
    </View>
  );
}
