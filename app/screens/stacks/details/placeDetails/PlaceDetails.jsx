import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
// LAYOUTS
import { AppBar } from "../../../../components/layouts";
import {
  HeightSpacer,
  Reusable,
  ReusableText,
  PopularList,
} from "../../../../components/common";
// ICONS
import { Feather } from "@expo/vector-icons";
// UTILS CONSTANTS THEME
import { COLORS, TEXT } from "../../../../utils/constants/styles/theme";
// UTILS DATA
import { dataRecommended } from "../../../../utils/constants/data";
// STYLES
import { StylesPlaceDetails } from "./StylesPlaceDetails";

export default function PlaceDetails({ navigation }) {
  // Styles
  const { stylesImgNetworkImg, description, btnStyle, btnText } =
    StylesPlaceDetails;

  const route = useRoute();
  const id = route.params;

  return dataRecommended.map((item, index) => {
    if (id === item.id) {
      console.log("Details item :", item);
      return (
        <ScrollView key={index}>
          {/* IMG URL STATE + APP BAR */}
          <View>
            <Image
              source={{ uri: `${item.imageUrl}` }}
              style={stylesImgNetworkImg()}
            />
            <AppBar
              top={40}
              left={20}
              right={20}
              title={item.title}
              color={COLORS.white}
              icon={"search1"}
              color1={COLORS.white}
              onPress={() => navigation.goBack()}
              onPress1={() => {}}
            />
          </View>

          {/* DESCRIPTION : REGION + DESC */}
          <View style={description}>
            <ReusableText
              text={item.location}
              size={TEXT.xLarge}
              color={COLORS.black}
            />

            <ReusableText
              text={item.desc}
              size={TEXT.medium}
              color={COLORS.black}
            />

            {/* LIST POPULAR DESTINATIONS + BTN */}
            <View style={{ alignContent: "center" }}>
              <HeightSpacer height={20} />

              <View style={Reusable.rowWithSpace("space-between")}>
                <ReusableText
                  text={"Destinations populaires"}
                  size={TEXT.large}
                  color={COLORS.black}
                />

                <TouchableOpacity
                  onPress={() => navigation.navigate("PlacesByCountry", id)}
                >
                  <Feather name='list' size={20} />
                </TouchableOpacity>
              </View>

              <HeightSpacer height={20} />

              <PopularList data={item.popular} />

              <TouchableOpacity
                onPress={() => navigation.navigate("HotelSearch")}
                style={btnStyle()}
              >
                <Text style={btnText()}>Trouver les meilleurs hôtels</Text>
              </TouchableOpacity>

              <HeightSpacer height={50} />
            </View>
          </View>
        </ScrollView>
      );
    }
  });
}
