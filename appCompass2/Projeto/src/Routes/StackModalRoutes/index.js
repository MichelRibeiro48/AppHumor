import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Registro from '../../components/Registro';
import Detalhes from '../../components/Detalhes';
import NovoRegistro from '../../components/NovoRegistro';

const StackModal = createNativeStackNavigator();

export default function RotasModal() {
  return (
    <StackModal.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StackModal.Screen name="NovoRegistro" component={NovoRegistro} />
    </StackModal.Navigator>
  );
}
