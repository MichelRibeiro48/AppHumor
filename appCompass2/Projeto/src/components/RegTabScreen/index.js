import React from 'react';
import Registro from '../../../telas/Registro';
import Entypo from 'react-native-vector-icons/Entypo';
import Plus from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Detalhes from '../../../telas/Detalhes';
export default function RegTabScreen() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 100,
          backgroundColor: '#FFFFFF',
          position: 'absolute',
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
        component={Registro}
        options={{
          tabBarIcon: () => <Plus name="pluscircle" size={52} color={'blue'} />,
        }}
      />
      <Tab.Screen
        name="Detalhes"
        component={Detalhes}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => (
            <Feather
              name="list"
              size={24}
              color={'blue'}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                backgroundColor: '#304ffe1a',
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
