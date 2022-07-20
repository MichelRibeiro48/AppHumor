import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles';
export default function MudarPerfil({navigation}) {
  return (
    <KeyboardAvoidingView enabled={true} behavior="position">
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../../assets/atividades/games.png')}
        />
        <TouchableOpacity
          style={styles.alterPhotoButon}
          onPress={() => navigation.navigate('AlterarFoto')}>
          <Text>ALTERAR FOTO</Text>
        </TouchableOpacity>

        <Text style={{alignSelf: 'flex-start'}}>NOME</Text>
        <TextInput style={styles.input} />

        <Text style={{alignSelf: 'flex-start'}}>E-MAIL</Text>
        <TextInput style={styles.input} />

        <Text style={{alignSelf: 'flex-start'}}>GÊNERO</Text>
        <TextInput style={styles.input} />

        <Text style={{alignSelf: 'flex-start'}}>DATA DE NASCIMENTO</Text>
        <TextInput style={styles.input} />

        <TouchableOpacity style={styles.saveButton}>
          <Text style={{color: 'white'}}>SALVAR</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
