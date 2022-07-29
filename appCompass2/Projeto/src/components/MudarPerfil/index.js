import React, {useEffect, useState} from 'react';
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
import {format} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import {api} from '../../service/api';
export default function MudarPerfil({route, navigation}) {
  const updateUser = async () => {
    try {
      const payload = {
        user: {
          name: name,
          email: email,
          gender: genero,
          birthdate: dataNasc,
          photo: {
            id: user.photo.id,
            url: user.photo.url,
          },
        },
      };
      const response = await api.put(
        'https://shrouded-shelf-01513.herokuapp.com/user',
        payload,
      );
      if (response.error) {
        // eslint-disable-next-line no-alert
        alert(response.message);
        return false;
      }
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
  const {user} = route.params;
  const [genero, setGenero] = useState();
  const dataFormatada = format(new Date(user?.birthdate), 'P', {locale: ptBR});
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [dataNasc, setDataNasc] = useState(dataFormatada);
  // const [newPhoto, setNewPhoto] = useState(user.photo.url);
  return (
    <KeyboardAvoidingView enabled={true} behavior="position">
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: `https://shrouded-shelf-01513.herokuapp.com${user.photo.url}`,
          }}
        />
        <TouchableOpacity
          style={styles.alterPhotoButton}
          onPress={() => navigation.navigate('AlterarFoto')}>
          <Text style={styles.alterText}>ALTERAR FOTO</Text>
        </TouchableOpacity>

        <Text style={styles.informationType}>NOME</Text>
        <TextInput style={styles.input} onChangeText={setName} value={name} />

        <Text style={styles.informationType}>E-MAIL</Text>
        <TextInput style={styles.input} onChangeText={setEmail} value={email} />

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
        <TextInput
          style={styles.input}
          onChangeText={setDataNasc}
          value={dataNasc}
        />

        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => {
            updateUser(), navigation.goBack();
          }}>
          <Text style={styles.buttonText}>SALVAR</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
