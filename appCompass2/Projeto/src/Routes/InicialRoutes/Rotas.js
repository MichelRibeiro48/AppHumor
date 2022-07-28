import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../components/login';
import RegTabScreen from '../RegTabScreen';
import AlterarFoto from '../../components/AlterarFoto';
import NovoRegistro from '../../components/NovoRegistro';
import Detalhes from '../../components/Detalhes';
import MudarPerfil from '../../components/MudarPerfil';

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
        <Stack.Screen name="Details" component={Detalhes} />
        <Stack.Screen name="AlterarFoto" component={AlterarFoto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
