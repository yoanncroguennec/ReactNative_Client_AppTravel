import { FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ReusableTitle } from "..";

export default function PopularList({ data }) {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 10 }}>
      <ReusableTitle
        item={item}
        onPress={() => navigation.navigate("PlaceDetails", item.id)}
      />
    </View>
  );

  return (
    <FlatList
      data={data}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
}
