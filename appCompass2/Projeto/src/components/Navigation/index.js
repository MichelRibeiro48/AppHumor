import React, {useEffect} from 'react';
import {Text} from 'react-native';

export default function Navigation({navigation}) {
  useEffect(() => {
    navigation.navigate('NovoRegistro');
  }, [navigation]);
  return <Text>Carregando</Text>;
}
