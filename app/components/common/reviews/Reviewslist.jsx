import { FlatList, StyleSheet, Text, View } from 'react-native'
import ReviewTitle from './ReviewTitle';

export default function Reviewslist({ reviews }) {
  return (
    <FlatList
      data={reviews}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <View style={{ marginBottom: 10 }}>
          <ReviewTitle review={item} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({})