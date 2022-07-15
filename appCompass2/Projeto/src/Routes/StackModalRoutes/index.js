import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Registro from '../../../telas/Registro';
import Detalhes from '../../../telas/Detalhes';

const StackModal = createNativeStackNavigator();

export default function RotasModal() {
  return (
    <StackModal.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StackModal.Screen name="Registro" component={Registro} />
      <StackModal.Screen name="Details" component={Detalhes} />
    </StackModal.Navigator>
  );
}
