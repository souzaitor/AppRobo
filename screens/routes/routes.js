import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/HomeScreen.js';
import Guia from '../screens/GuiaScreen.js';

const Stack = createStackNavigator();

function RotasApp(){
  return(
    <Stack.Navigator
      screenOptions={{
        orientation: 'portrait',
        headerStyle:{
          backgroundColor:'#4D94DD'
        },
        headerTintColor: '#FFFFFF'
      }}
    >
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name="Guia" component={Guia}/>
    </Stack.Navigator>
  )
}

export default RotasApp;