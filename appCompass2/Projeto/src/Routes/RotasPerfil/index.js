import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MudarPerfil from '../../components/MudarPerfil';
import Perfil from '../../components/Perfil';

const StackProfile = createNativeStackNavigator();

export default function RotasPerfil() {
  return (
    <StackProfile.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StackProfile.Screen name="Perfil" component={Perfil} />
      <StackProfile.Screen name="MudarPerfil" component={MudarPerfil} />
    </StackProfile.Navigator>
  );
}
