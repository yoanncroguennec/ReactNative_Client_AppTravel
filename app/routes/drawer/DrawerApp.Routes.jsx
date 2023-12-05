import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home, Products } from "../../screens";
// ICONS
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomDrawer from "./CustomDrawer";

export default function DrawerAppRoutes() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        drawerActiveBackgroundColor: "#aa18ea",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen
        name='Accueil'
        component={Home}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='home-outline' size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='Produits'
        component={Products}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='person-outline' size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
