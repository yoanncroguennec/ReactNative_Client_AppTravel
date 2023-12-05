import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// SCREENS
import { Home, Location, Chat } from "../screens";
// CONSTANTS THEMES
import { COLORS } from "../utils/constants/styles/theme";
// ICONS
import Ionicons from "@expo/vector-icons/Ionicons";
import DrawerAppRoutes from "./drawer/DrawerApp.Routes";
import { ScrollBottomSheet } from "../components/layouts";
// import TopTab from "../components/layouts/topTab/TopTab";
// import AuthTopTab from "../screens/auth/AuthTopTab";

export default function BottomTabApp_Routes() {
  const Tab = createBottomTabNavigator();

  // Styles
  const tabBarStyle = {
    backgroundColor: "#000",
    borderRadius: 12,
    bottom: 60,
    height: 55,
    left: 20,
    paddingBottom: 10,
    paddingTop: 10,
    position: "absolute",
    right: 20,
  };

  return (
    <>
      <Tab.Navigator
        activeColor='#EB6A58'
        barStyle={{ paddingBottom: 48 }}
        headerShown={false}
        inactiveColor='#3E2465'
        initialRouteName='Home'
        tabBarHideKeyBoard={true}
      >
        <Tab.Screen
          component={Home}
          name='Home'
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                color={focused ? COLORS.red : COLORS.gray}
                name={focused ? "grid" : "grid-outline"}
                size={26}
              />
            ),
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: tabBarStyle,
          }}
        />
        <Tab.Screen
          component={Location}
          name='Location'
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                color={focused ? COLORS.red : COLORS.gray}
                name={focused ? "location" : "location-outline"}
                size={26}
              />
            ),
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: tabBarStyle,
          }}
        />
        <Tab.Screen
          component={Chat}
          name='Chat'
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                color={focused ? COLORS.red : COLORS.gray}
                name={
                  focused
                    ? "chatbubble-ellipses"
                    : "chatbubble-ellipses-outline"
                }
                size={26}
              />
            ),
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: tabBarStyle,
          }}
        />
        {/* <Tab.Screen
        name='Profile'
        component={TopTab}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={focused ? COLORS.red : COLORS.gray}
              size={26}
            />
          ),
        }}
      /> */}
        {/* <Tab.Screen
        component={Profile}
        name='Profile'
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              color={focused ? COLORS.red : COLORS.gray}
              name={focused ? "person" : "person-outline"}
              size={26}
            />
          ),
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: tabBarStyle,
        }}
      /> */}
      </Tab.Navigator>
      <ScrollBottomSheet />
    </>
  );
}
