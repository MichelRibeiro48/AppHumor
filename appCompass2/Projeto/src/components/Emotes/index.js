import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {traducao} from '../../settings/ptBR';
import styles from './styles';

export default function Emotes({item, estaAtivo, onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View
        style={{
          borderColor: estaAtivo ? 'blue' : 'transparent',
          borderRadius: 100,
          borderWidth: 5,
        }}>
        <Image source={item.emote} style={styles.emojistyles} />
      </View>
      <View>
        <Text
          style={{color: estaAtivo ? '#C801FA' : '#969696', ...styles.teste}}>
          {traducao[item.descricao]}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
