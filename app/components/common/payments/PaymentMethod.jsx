import { View, StyleSheet } from "react-native";
import { COLORS, SIZES, TEXT } from "../../../utils/constants/styles/theme";
import AppBar from "../../layouts/appBar/AppBar";
import HeightSpacer from "../reusable/HeightSpacer";
import ReusableText from "../reusable/ReusableText";
import Payment from "./payment/Payment";
import ReusableBtn from "../reusable/ReusableBtn";

export default function PaymentMethod({ navigation }) {
  return (
    <View style={{ backgroundColor: COLORS.lightWhite, flex: 1 }}>
      <View style={{ height: 60, marginTop: 50 }}>
        <AppBar
          top={10}
          left={15}
          title={"Payment Methods"}
          onPress={() => navigation.goBack()}
        />
      </View>

      <View style={{ marginHorizontal: 25 }}>
        <HeightSpacer height={20} />
        <ReusableText
          text={"Select Your Payment Method"}
          size={TEXT.xLarge - 5}
          color={COLORS.black}
        />

        <HeightSpacer height={20} />

        <Payment
          title={"Visa Card"}
          image={require("./Visa.png")}
        />

        <HeightSpacer height={20} />

        <Payment
          title={"Mastercard"}
          image={require("./Mastercard.png")}
        />

        <HeightSpacer height={20} />

        <Payment
          title={"PayPal"}
          image={require("./PayPal.png")}
        />

        {/* <View style={{ position: "absolute", top: SIZES.height - 260 }}>
          <ReusableBtn
            btnText={"Add Payment Method"}
            // width={SIZES.width - 50}
            backgroundColor={COLORS.white}
            borderColor={COLORS.blue}
            borderWidth={0.5}
            textColor={COLORS.blue}
          />
          <HeightSpacer height={10} />
          <ReusableBtn
            onPress={() => navigation.navigate("AddCard")}
            btnText={"Add Card"}
            // width={SIZES.width - 50}
            backgroundColor={COLORS.red}
            borderColor={COLORS.red}
            borderWidth={0.5}
            textColor={COLORS.white}
          />
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    alignSelf: "center",
  },
});
