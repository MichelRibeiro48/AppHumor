import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';
export default function Fotos({item, estaAtivo, onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View
        style={{
          borderColor: estaAtivo ? 'blue' : 'transparent',
          borderRadius: 100,
          borderWidth: 7,
        }}>
        <Image source={item.emote} style={styles.emojiStyles} />
      </View>
    </TouchableOpacity>
  );
}
