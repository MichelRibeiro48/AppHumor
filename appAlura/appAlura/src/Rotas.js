import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Servicos from './telas/Servicos';
import Carrinho from './telas/Carrinho';

import {cores} from './telas/estilos';

const Tab = createBottomTabNavigator();

export default function Rotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarIconStyle: {
            display: 'none',
            height: 70,
          },
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: cores.roxo,
          tabBarActiveBackgroundColor: cores.roxo,
          tabBarLabelStyle: {
            width: '100%',
            flex: 1,
            marginTop: 3,
            paddingTop: 10,
            fontWeight: 'bold',
            fontSize: 16,
            lineHeight: 21,
            backgroundColor: cores.laranja,
          },
        }}>
        <Tab.Screen name="Serviços" component={Servicos} />
        <Tab.Screen name="Carrinho" component={Carrinho} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
