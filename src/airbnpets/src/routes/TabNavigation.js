import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeNavigation } from "./StackNavigation";

import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function ShowBottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <AntDesign name="home" size={30} color="#45B5C4" />;
            }

            return <AntDesign name="home" size={30} color="black" />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
