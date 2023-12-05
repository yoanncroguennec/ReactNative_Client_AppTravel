import { StyleSheet, Image } from "react-native";

export default function Local_Image({ local_image_path, width, height, radius }) {
  return (
    <Image
      source={`${local_image_path}`}
      style={styles.image(width, height, radius)}
    />
  );
}

const styles = StyleSheet.create({
  image: (width, height, radius) => ({
    width: width,
    height: height,
    borderRadius: radius,
    resizeMode: "cover",
  }),
});
