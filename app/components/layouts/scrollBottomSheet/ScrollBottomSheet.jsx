import { StyleSheet, View, Text, ScrollView } from "react-native";
import BottomSheet from "react-native-simple-bottom-sheet";

export default function ScrollBottomSheet() {
  return (
    <BottomSheet isOpen={false}>
      {(onScrollEndDrag) => (
        <ScrollView onScrollEndDrag={onScrollEndDrag}>
          {[...Array(18)].map((_, index) => (
            <View key={`${index}`} style={{}}>
              <Text>Pas encore d'hotels, ni de chambre réservé</Text>
              {/* <Text>{`List Item ${index + 1}`}</Text> */}
            </View>
          ))}
        </ScrollView>
      )}
    </BottomSheet>
  );
}

const styles = StyleSheet.create({})