import React, {useState} from 'react';
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
import {Picker} from '@react-native-picker/picker';
export default function MudarPerfil({navigation}) {
  const [genero, setGenero] = useState();
  return (
    <KeyboardAvoidingView enabled={true} behavior="position">
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../../assets/atividades/games.png')}
        />
        <TouchableOpacity
          style={styles.alterPhotoButton}
          onPress={() => navigation.navigate('AlterarFoto')}>
          <Text style={styles.alterText}>ALTERAR FOTO</Text>
        </TouchableOpacity>

        <Text style={styles.informationType}>NOME</Text>
        <TextInput style={styles.input} />

        <Text style={styles.informationType}>E-MAIL</Text>
        <TextInput style={styles.input} />

        <Text style={styles.informationType}>GÊNERO</Text>
        <View style={styles.pickerBorder}>
          <Picker
            style={styles.pickerStyle}
            selectedValue={genero}
            onValueChange={(itemValue, itemIndex) => setGenero(itemValue)}>
            <Picker.Item label="Masculino" value="Masculino" />
            <Picker.Item label="Feminino" value="Feminino" />
            <Picker.Item label="Outro" value="Outro" />
          </Picker>
        </View>

        <Text style={styles.informationType}>DATA DE NASCIMENTO</Text>
        <TextInput style={styles.input} />

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.buttonText}>SALVAR</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
