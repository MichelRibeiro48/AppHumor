import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Login from '../telas/login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RegTabScreen from '../src/components/RegTabScreen';
import Detalhes from '../telas/Detalhes';

const Stack = createNativeStackNavigator();

export default function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={RegTabScreen} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
