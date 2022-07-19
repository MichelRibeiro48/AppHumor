import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

export default function Perfil({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/atividades/games.png')}
      />
      <Text style={{marginTop: 46}}>Oi Nope</Text>
      <TouchableOpacity
        style={styles.editProfileButton}
        onPress={() => navigation.navigate('MudarPerfil')}>
        <Text style={{color: 'white'}}>EDITAR PERFIL</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.exitProfileButton}>
        <Text style={{color: 'black'}}>SAIR</Text>
      </TouchableOpacity>
    </View>
  );
}
