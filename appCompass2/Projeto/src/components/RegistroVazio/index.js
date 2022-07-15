import React from 'react';
import {Image, Text, View} from 'react-native';
import regStyles from './regStyles';

export default function RegistroVazio() {
  return (
    <View style={regStyles.container}>
      <Image
        style={regStyles.emote}
        source={require('../../../assets/neutral.png')}
      />
      <Text style={regStyles.text}>
        Você ainda não tem nenhum registro diário. Para começar, toque no ícone
        de adicionar na tela.
      </Text>
    </View>
  );
}
