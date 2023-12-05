import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRoute } from "@react-navigation/native";
// LAYOUTS
import { AppBar } from "../../../../components/layouts";
// COMMON
import {
  ReusableText,
  Reusable,
  HeightSpacer,
  PopularList,
} from "../../../../components/common";
// DATAS
import { dataCountries } from "../../../../utils/constants/data";
// CONSTANTS THEMES
import { COLORS, TEXT } from "../../../../utils/constants/styles/theme";
// ICONS
import { Feather } from "@expo/vector-icons";
// STYLES
import { StylesCountryDetails } from "./StylesCountryDetails";

export default function CountryDetails({ navigation }) {
  const route = useRoute();
  const id = route.params;
  // console.log("id :", id);

  // Styles
  const { stylesImgNetworkImg, description, btnStyle, btnText } = StylesCountryDetails;

  return dataCountries.map((item, index) => {
    if (id === item.id) {
      // console.log("item.country :", item.country);
      // console.log("item.id :", item.id);
      // console.log("Details item :", item);
      return (
        <View key={index}>
          <ScrollView>
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
                title={item.country}
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
                text={item.region}
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

                  {/* <TouchableOpacity
                    onPress={() => navigation.navigate("PlacesByCountry", id)}
                  >
                    <Feather name='list' size={20} />
                  </TouchableOpacity> */}
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
        </View>
      );
    }
  });
}
