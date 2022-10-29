import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../Screens/Welcome";
import Login from "../Screens/Login";
import Home from "../Screens/Home";
import Cadastro from "../Screens/Cadastre";
import CadastroHotel from "../Screens/CadastroHotel";

import ShowBottomTabs from "./TabNavigation";

const Stack = createNativeStackNavigator();

export default (props) => {
  return (
    <Stack.Navigator initialRouteName="CadastroHotel">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={ShowBottomTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro}/>
      <Stack.Screen name="CadastroHotel" component={CadastroHotel} options={{title: ''}}/>
    </Stack.Navigator>
  );
};

export function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export function LoginNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export function CadastroHotelNavigation(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="CadastroHotel" component={CadastroHotel}></Stack.Screen>
    </Stack.Navigator>
  )
}
