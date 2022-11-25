import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeChatScreenNavigation,
  HomeNavigation,
  UserNavigation,
} from "./StackNavigation";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function ShowBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarShowLabel: false }}
      initialRouteName="HomeTab"
    >
      <Tab.Screen
        name="ChatTab"
        component={HomeChatScreenNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="chatbubble-outline"
              size={30}
              color={focused ? "#45B5C4" : "#000000"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HomeTab"
        component={HomeNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              size={30}
              color={focused ? "#45B5C4" : "#000000"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="UserTab"
        component={UserNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="user-circle"
              size={30}
              color={focused ? "#45B5C4" : "#000000"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
