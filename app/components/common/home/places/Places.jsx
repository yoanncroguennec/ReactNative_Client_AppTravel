import { View, VirtualizedList } from "react-native";
// COMMON
import { HeightSpacer } from "../..";
import Country from "./country/Country";
// DATAS
import { dataCountries } from "../../../../utils/constants/data";
// CONSTANTS STYLES
import { SIZES } from "../../../../utils/constants/styles/theme";

// LIST SLIDE HORIZONTAL COUNTRIES 
export default function Places() {

  return (
    <View>
      <HeightSpacer height={20} />

      <VirtualizedList
        data={dataCountries}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        getItemCount={(data) => data.length}
        getItem={(data, index) => data[index]}
        renderItem={({ item, index }) => {
          // console.log("item :", item.countries);
          return (
            <View key={index} style={{ marginRight: SIZES.medium }}>
              <Country item={item} />
            </View>
          );
        }}
      />
    </View>
  );
}
