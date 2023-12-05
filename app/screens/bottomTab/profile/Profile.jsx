import {
  View,
  Image,
  Alert,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { COLORS, SIZES } from "../../../utils/constants/styles/theme";
import styles from "./topTab.style";
import {
  HeightSpacer,
  ReusableBtn,
  ReusableText,
} from "../../../components/common";
import { AppBar } from "../../../components/layouts";

export default function Profile({ navigation }) {
const Tab = createMaterialTopTabNavigator();


  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);

  const userLogout = async () => {};

  //  if (userLogin === false) {
  //    return (
  //      <View
  //        style={{
  //          flex: 1,
  //          backgroundColor: COLORS.lightWhite,
  //          justifyContent: "center",
  //        }}
  //      >
  //        <View>
  //          <Image
  //            source={require("./bg2.png")}
  //            style={StylesProfile.image()}
  //          />

  //          <HeightSpacer height={90} />

  //          <View style={{ marginLeft: 30 }}>
  //            <ReusableBtn
  //              onPress={() => navigation.navigate("AuthTop")}
  //              btnText={"S I G N I N"}
  //              width={SIZES.width - 60}
  //              backgroundColor={COLORS.green}
  //              borderColor={COLORS.green}
  //              borderWidth={0}
  //              textColor={COLORS.white}
  //            />
  //          </View>
  //        </View>
  //      </View>
  //    );
  //  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: COLORS.lightWhite }}>
        <View>
          <Image source={require("./travel.jpg")} style={styles.image} />
          {/* 
        <AssetImage
          data={require("../assets/images/travel.jpg")}
          width={"100%"}
          height={300}
          mode={"cover"}
        /> */}

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
            <Image
              source={{
                uri: "https://d326fntlu7tb1e.cloudfront.net/uploads/c87b6dfb-ee4b-47fa-9c02-6ccca2893a6f-vinci_06.jpg",
              }}
              style={styles.image}
            />

            <HeightSpacer height={5} />

            <View style={{ alignItems: "center" }}>
              <ReusableText
                text={userData ? userData.username : "Could not load you name"}
                size={SIZES.medium}
                color={COLORS.lightWhite}
              />
            </View>

            <HeightSpacer height={5} />

            <View style={styles.name}>
              <View style={{ alignItems: "center" }}>
                <ReusableText
                  text={userData ? userData.email : "gfadghasdfh@gmail.com"}
                  size={SIZES.medium}
                  color={COLORS.white}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* <Tab.Navigator>
      <Tab.Screen name='Bookings' component={TopBookings} />
      <Tab.Screen name='Trips' component={TopTrips} />
      <Tab.Screen name='Info' component={TopInfo} />
    </Tab.Navigator> */}
    </View>
  );
}

const StylesProfile = StyleSheet.create({
  image: () => ({
    width: "100%",
    height: 300,
    borderRadius: 0,
    resizeMode: "contain",
  }),
});
