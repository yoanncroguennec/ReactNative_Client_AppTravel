import { FlatList } from "react-native";
// COMMON
import { Slides } from "../../../components/common";
// DATAS
import { dataSlidesOnboarding } from "../../../utils/constants/data";

export default function Onboarding() {
  return (
      <FlatList
        data={dataSlidesOnboarding}
        horizontal
        keyExtractor={(item) => item.id}
        pagingEnabled
        renderItem={({ item }) => <Slides item={item} />}
        showsHorizontalScrollIndicator={false}
      />
  );
}
