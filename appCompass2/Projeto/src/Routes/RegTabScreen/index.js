import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Plus from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RotasModal from '../StackModalRoutes';
import RegistroVazio from '../../components/RegistroVazio';
import RotasPerfil from '../RotasPerfil';
import Navigation from '../../components/Navigation';
import NovoRegistro from '../../components/NovoRegistro';
import Registro from '../../components/Registro';
export default function RegTabScreen() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 100,
          backgroundColor: '#FFFFFF',
          borderTopColor: '#C4C4C4',
          borderTopWidth: 2,
        },
        tabBarLabel: () => {
          return null;
        },
      }}>
      <Tab.Screen
        name="TelaRegistro"
        component={Registro}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <Entypo
              name="home"
              size={24}
              color={focused ? 'blue' : 'white'}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                backgroundColor: focused ? '#304ffe1a' : 'blue',
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: 12,
                paddingRight: 12,
                borderRadius: 12,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Mais"
        component={NovoRegistro}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <Plus name="pluscircle" size={52} color={'blue'} />,
        }}
      />
      <Tab.Screen
        name="Lista"
        component={RotasPerfil}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <Feather
              name="list"
              size={24}
              color={focused ? 'blue' : 'white'}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                backgroundColor: focused ? '#304ffe1a' : 'blue',
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: 12,
                paddingRight: 12,
                borderRadius: 12,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
