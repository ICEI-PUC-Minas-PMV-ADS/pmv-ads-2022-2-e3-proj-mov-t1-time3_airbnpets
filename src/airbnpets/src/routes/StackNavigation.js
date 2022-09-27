import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../Screens/Welcome";
import Login from "../Screens/Login";
import Home from "../Screens/Home";
import Cadastro from "../Screens/Cadastre";

import ShowBottomTabs from "./TabNavigation";

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
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro}/>
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
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

// Obs: Essas 2 telas (Welcome e Login) é só para testar a navegação. Após decidirmos quem vai ser responsável por cada tela melhoramos as que existem e adicionamos as novas.
