import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';
export default function Fotos({item, estaAtivo, onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View
        style={{
          borderColor: estaAtivo ? '#304FFE' : 'transparent',
          borderRadius: 100,
          borderWidth: 5,
        }}>
        <Image
          source={{
            uri: `https://shrouded-shelf-01513.herokuapp.com${item.url}`,
          }}
          style={styles.emojiStyles}
        />
      </View>
    </TouchableOpacity>
  );
}
