import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';

import CloseIcon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
export default function AlterarFoto({navigation}) {
  return (
    <View style={styles.page}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.exitButton}>
        <CloseIcon
          name="close"
          size={32}
          color={'#4B75E2'}
          style={{marginTop: 4, marginLeft: 3}}
        />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text>Selecione a foto de perfil</Text>
        <FlatList />
      </View>
    </View>
  );
}
