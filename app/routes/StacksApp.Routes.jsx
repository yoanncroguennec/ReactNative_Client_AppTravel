import { createStackNavigator } from "@react-navigation/stack";
// ROUTES
import BottomTabApp_Routes from "./BottomTabApp.Routes";
// SCREENS
import {
  CountryDetails,
  HotelList,
  Onboarding,
  PlacesByCountry,
  PlaceDetails,
  Recommended,
  HotelDetails,
} from "../screens";
// LAYOUTS
import { ModalHomeTheApplication } from "../components/layouts";

export default function StacksAppRoutes() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Onboarding}
        name='Onboarding'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={ModalHomeTheApplication}
        name='modalHomeTheApplication'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={BottomTabApp_Routes}
        name='BottomTabApp_Routes'
        options={{ headerShown: false }}
      />

      <Stack.Screen
        component={Recommended}
        name='Recommended'
        options={{ headerShown: false }}
      />

      {/* COUNTRIES */}
      <Stack.Screen
        component={CountryDetails}
        name='CountryDetails'
        options={{ headerShown: false }}
      />

      {/* PLACES */}
      <Stack.Screen
        component={PlacesByCountry}
        name='PlacesByCountry'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={PlaceDetails}
        name='PlaceDetails'
        options={{ headerShown: false }}
      />

      {/* HOTELS */}
      <Stack.Screen
        component={HotelList}
        name='HotelList'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={HotelDetails}
        name='HotelDetails'
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
