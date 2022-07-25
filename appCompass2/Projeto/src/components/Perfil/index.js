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
      <Text style={styles.profileText}>Olá Fulana</Text>
      <View style={styles.informationBox}>
        <View style={styles.informationRow}>
          <Text style={styles.informationType}>E-MAIL: </Text>
          <Text style={styles.information}>FULANA@GMAIL.COM</Text>
        </View>
        <View style={styles.informationRow}>
          <Text style={styles.informationType}>GÊNERO: </Text>
          <Text style={styles.information}>FEMININO</Text>
        </View>
        <View style={styles.informationRow}>
          <Text style={styles.informationType}>DATA DE NASCIMENTO:</Text>
          <Text style={styles.information}> 15/12/1998</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.editProfileButton}
        onPress={() => navigation.navigate('MudarPerfil')}>
        <Text style={styles.buttonEditText}>EDITAR PERFIL</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.exitProfileButton}>
        <Text style={styles.buttonExitText}>SAIR</Text>
      </TouchableOpacity>
    </View>
  );
}
