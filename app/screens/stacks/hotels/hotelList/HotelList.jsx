import { FlatList, SafeAreaView, View } from 'react-native'
// COMMON
import { HeightSpacer, ReusableTitle } from "../../../../components/common";
// LAYOUTS
import { AppBar } from "../../../../components/layouts";
// CONSTANTS STYLES
import { COLORS, SIZES } from "../../../../utils/constants/styles/theme";
// DATAS
import { dataHotels } from '../../../../utils/constants/data';


export default function HotelList({ navigation }) {
  return (
    <SafeAreaView style={{ marginHorizontal: 20 }}>
      <HeightSpacer height={50} />
      <View style={{ height: 50 }}>
        <AppBar
          color={COLORS.white}
          color1={COLORS.white}
          iconName={"search1"}
          left={0}
          onPress={() => navigation.goBack()}
          onPress1={() => navigation.navigate("HotelSearch")}
          right={0}
          title={"Hôtels à proximité"}
          top={10}
        />
      </View>

      <View style={{ paddingTop: 20 }}>
        <FlatList
          contentContainerStyle={{ columnGap: SIZES.medium }}
          data={dataHotels}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <ReusableTitle
                item={item}
                onPress={() => navigation.navigate("HotelDetails", item.id)}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
