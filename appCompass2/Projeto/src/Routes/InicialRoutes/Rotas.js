import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../components/login';
import RegTabScreen from '../RegTabScreen';
import AlterarFoto from '../../components/AlterarFoto';

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
        <Stack.Screen name="AlterarFoto" component={AlterarFoto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
