import { useRoute } from "@react-navigation/native";
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import { Rating } from "react-native-stock-star-rating";
// COMMON
import {
  HeightSpacer,
  Reusable,
  ReusableBtn,
  ReusableText,
} from "../../../../components/common";
// LAYOUTS
import { AppBar } from "../../../../components/layouts";
// CONSTANTS THEMES
import { COLORS, SIZES, TEXT } from "../../../../utils/constants/styles/theme";
// DATAS
import { dataHotels } from "../../../../utils/constants/data";
// ICONS
import { Feather } from "@expo/vector-icons";
import HotelMap from "../../../../components/common/hotels/hotelMap/HotelMap";
import Reviewslist from "../../../../components/common/reviews/Reviewslist";
import { StylesHotelDetails } from "./StylesHotelDetails";

export default function HotelDetails({ navigation }) {
    const route = useRoute();
    const id = route.params;

  // Styles
  const {
    container,
    titleContainer,
    titleColumn,
    bottom,
    stylesImgNetworkImg,
  } = StylesHotelDetails;

  return dataHotels.map((item, index) => {
    if (id === item.id) {
      // console.log("Details item :", item);
      return (
        <ScrollView key={index}>
          <View style={{ height: 80 }}>
            <AppBar
              top={50}
              left={20}
              right={20}
              title={item.title}
              color={COLORS.white}
              icon={"message1"}
              color1={COLORS.white}
              onPress={() => navigation.goBack()}
              // onPress1={handleReviews}
            />
          </View>

          <View>
            <View style={container}>
              {/* IMG DE HOTEL */}
              <Image
                source={{ uri: `${item.imageUrl}` }}
                style={stylesImgNetworkImg()}
              />

              <View style={titleContainer}>
                <View style={titleColumn}>
                  {/* NOM DE L'HOTEL + ADDRESSE DE L'HOTEL */}
                  <ReusableText
                    text={item.title}
                    size={SIZES.xLarge}
                    color={COLORS.black}
                  />

                  <HeightSpacer height={10} />
                  <ReusableText
                    text={item.location}
                    size={SIZES.medium}
                    color={COLORS.black}
                  />

                  <HeightSpacer height={15} />

                  <View style={Reusable.rowWithSpace("space-between")}>
                    {/* ETOILES + NOMBRES D'AVIS */}
                    <Rating
                      maxStars={5}
                      stars={item.rating}
                      bordered={false}
                      color={"#FD9942"}
                    />

                    {/* {item.reviews.length === 0 ? (
                      <Text>0 avis</Text>
                    ) : (
                      <ReusableText
                        text={`(${item.reviews.length} avis)`}
                        size={SIZES.medium}
                        color={COLORS.gray}
                      />
                    )} */}
                  </View>
                </View>
              </View>
            </View>

            <View style={[container, { paddingTop: 90 }]}>
              {/* DESC DE L'HOTEL */}
              <ReusableText
                text={"Description"}
                size={SIZES.large}
                color={COLORS.black}
              />

              <HeightSpacer height={10} />

              <ReusableText
                text={item.desc}
                size={TEXT.medium}
                color={COLORS.black}
              />

              <HeightSpacer height={10} />

              {/* LOCALISATION DE L'HOTEL SUR LA CARTE */}
              <ReusableText
                text={"Localisation"}
                size={SIZES.large}
                color={COLORS.black}
              />

              <HeightSpacer height={15} />

              <HotelMap coordinates={item.coordinates} />

              <ReusableBtn
                onPress={() => navigation.navigate("SelectRoom")}
                btnText={"Select Room"}
                // width={45}
                // width={(SIZES.windowWidth - 50) / 2.2}
                backgroundColor={COLORS.green}
                borderColor={COLORS.green}
                borderWidth={0}
                textColor={COLORS.white}
              />

              <View style={Reusable.rowWithSpace("space-between")}>
                <ReusableText
                  text={"Avis"}
                  size={SIZES.large}
                  color={COLORS.black}
                />

                {/* <TouchableOpacity
                  onPress={() => navigation.navigate("AllReviews", id)}
                >
                  <Feather name='list' size={20} />
                </TouchableOpacity> */}
              </View>

              <HeightSpacer height={10} />

              <Reviewslist reviews={item.reviews} />
            </View>
            <View style={[Reusable.rowWithSpace("space-between"), bottom]}>
              <View>
                {/* PRICE ROOM BY NIGHT + DATE  */}
                <ReusableText
                  text={`${item.price} € / nuit`}
                  size={SIZES.large}
                  color={COLORS.black}
                />
                <HeightSpacer height={5} />

                <ReusableText
                  text={"Dec 01 - Janvier 25"}
                  size={SIZES.medium}
                  color={COLORS.gray}
                />
              </View>

              {/* SELECT ROOM  */}
              <ReusableBtn
                onPress={() => navigation.navigate("SelectRoom")}
                btnText={"Select Room"}
                // width={(SIZES.width - 50) / 2.2}
                backgroundColor={COLORS.green}
                borderColor={COLORS.green}
                borderWidth={0}
                textColor={COLORS.white}
              />
            </View>
          </View>
        </ScrollView>
      );
    }
  });
}


