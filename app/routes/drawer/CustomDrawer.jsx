import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
// IMGS
import { bgDrawer, photoProfileDrawer } from "../../utils/assets";
// ICONS
import { Ionicons } from "react-native-vector-icons";

export default function CustomDrawer(props) {
  return (
    <ScrollView style={{ backgroundColor: "#8200d6", flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#8200d6" }}
      >
        <Image
          source={photoProfileDrawer}
          style={{
            height: 80,
            width: 80,
            borderRadius: 40,
            marginBottom: 10,
          }}
        />
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 5,
          }}
        >
          Yoann CROGUENNEC
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 22,
            fontWeight: "bold",
            marginBottom: 5,
          }}
        >
          Développeur React
        </Text>

        <View style={{ flex: 1, backgroundColor: "", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name='share-social-outline' size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}
            >
              Partager
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name='exit-outline' size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}
            >
              Se déconnecter
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
