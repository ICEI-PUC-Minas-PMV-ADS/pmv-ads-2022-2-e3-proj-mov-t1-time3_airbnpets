import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../Screens/Welcome";
import Login from "../Screens/Login";

const Stack = createNativeStackNavigator();

export default (props) => {
  return (
    <Stack.Navigator
    initialRouteName="Welcome"
  >
    <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
    <Stack.Screen name="Login" component={Login}/>
  </Stack.Navigator>
  )
};

// Obs: Essas 2 telas (Welcome e Login) é só para testar a navegação. Após decidirmos quem vai ser responsável por cada tela melhoramos as que existem e adicionamos as novas.