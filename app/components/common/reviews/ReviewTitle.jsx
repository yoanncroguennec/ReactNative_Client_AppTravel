import { View } from "react-native";
// COMMON
import {
  RatingCommon,
  Reusable,
  ReusableDescriptionText,
  ReusableText,
  WidthSpacer,
} from "..";
// CONSTANTS THEMES
import { COLORS, SIZES } from "../../../utils/constants/styles/theme";
// STYLES
import styles from "./review.style";
import NetworkImage from "../reusable/reusableImg/NetworkImg";

export default function ReviewTitle({ review }) {
  return (
    <View style={styles.reviewBorder}>
      <View style={Reusable.rowWithSpace("space-between")}>
        <View style={Reusable.rowWithSpace("flex-start")}>
          <NetworkImage
            source={review.user.profile}
            width={54}
            height={54}
            radius={10}
          />

          <WidthSpacer width={20} />

          <View style={{ width: "80%" }}>
            <View style={Reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={review.user.username}
                size={SIZES.small + 2}
                color={COLORS.black}
              />
              <WidthSpacer width={"30%"} />

              <View style={Reusable.rowWithSpace("space-between")}>
                <RatingCommon rating={review.rating} />
                <WidthSpacer width={10} />
                <ReusableText
                  text={review.updatedAt.split("T")[0]}
                  size={SIZES.small + 2}
                  color={COLORS.black}
                />
              </View>
            </View>

            <ReusableDescriptionText text={review.review} lines={2} />
          </View>
        </View>
      </View>
    </View>
  );
}
