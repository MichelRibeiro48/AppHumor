import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';
export default function ActivitiesIcon({item, estaAtivo, onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height: 59,
          width: 59,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: estaAtivo ? 'blue' : 'transparent',
          borderRadius: 50,
          borderWidth: 1,
          borderColor: estaAtivo ? 'blue' : 'black',
          marginBottom: 10,
        }}>
        <Image source={item.icon} style={styles.iconStyles} />
      </View>
      <View>
        <Text
          style={{
            color: 'black',
            fontFamily: 'SourceSansPro-SemiBold',
            alignSelf: 'center',
          }}>
          {item.descricao}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
