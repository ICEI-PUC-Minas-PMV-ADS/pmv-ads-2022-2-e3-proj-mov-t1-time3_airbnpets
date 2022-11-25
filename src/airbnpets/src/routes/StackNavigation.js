import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../Screens/Welcome";
import Login from "../Screens/Login";
import Home from "../Screens/Home";
import Cadastro from "../Screens/Cadastre";
import CadastroHotel from "../Screens/CadastroHotel";
import Details from "../Screens/Details";
import User from "../Screens/User";
import Contato from "../Screens/Contato";

import ShowBottomTabs from "./TabNavigation";
import ChatScreen from "../Screens/Chat";

const Stack = createNativeStackNavigator();

export default (props) => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
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
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen
        name="User"
        component={User}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CadastroHotel"
        component={CadastroHotel}
      ></Stack.Screen>
      <Stack.Screen name="Contato" component={Contato} />
      <Stack.Screen name="HomeChat" component={HomeChatScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
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

export function CadastroHotelNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CadastroHotel"
        component={CadastroHotel}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export function UserNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="User"
        component={User}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export function ContatoNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contato" component={Contato} />
    </Stack.Navigator>
  );
}

export function HomeChatScreenNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeChat" component={HomeChatScreen} />
    </Stack.Navigator>
  );
}

export function ChatScreenNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
}
