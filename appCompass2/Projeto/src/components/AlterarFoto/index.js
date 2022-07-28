import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';

import CloseIcon from 'react-native-vector-icons/AntDesign';
import {api} from '../../service/api';
import Emotes from '../Emotes';
import Fotos from '../Fotos';
import styles from './styles';
export default function AlterarFoto({navigation}) {
  const [photos, setPhotos] = useState();
  const getPhotos = async () => {
    try {
      const response = await api.get(
        'https://shrouded-shelf-01513.herokuapp.com/photos',
      );
      setPhotos(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const updateUserPhoto = async () => {
    try {
      const payload = {
        user: {
          photo_id: emoteAtivo.id,
        },
      };
      const response = await api.put(
        'https://shrouded-shelf-01513.herokuapp.com/user',
        payload,
      );
      if (response.error) {
        alert(response.message);
        return false;
      }
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPhotos();
  }, []);
  const [emoteAtivo, setEmoteAtivo] = useState(null);
  console.log(emoteAtivo);
  const emojis = [
    {
      id: 1,
      emote: require('../../../assets/radiant.png'),
    },
    {
      id: 2,
      emote: require('../../../assets/happy.png'),
    },
    {
      id: 3,
      emote: require('../../../assets/ok.png'),
    },
    {
      id: 4,
      emote: require('../../../assets/sad.png'),
    },
    {
      id: 5,
      emote: require('../../../assets/terrible.png'),
    },
    {
      id: 6,
      emote: require('../../../assets/terrible.png'),
    },
  ];
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
        <Text style={styles.selectionText}>Selecione a foto de perfil</Text>
        <FlatList
          data={photos}
          keyExtractor={item => item.id}
          numColumns={3}
          renderItem={({item}) => (
            <Fotos
              item={item}
              estaAtivo={item.id === emoteAtivo?.id}
              onPress={() =>
                item.id === emoteAtivo?.id
                  ? setEmoteAtivo(null)
                  : setEmoteAtivo(item)
              }
            />
          )}
        />
        <TouchableOpacity style={styles.buttonConfirm}>
          <Text
            style={styles.buttonText}
            onPress={() => {
              updateUserPhoto(), navigation.goBack();
            }}>
            CONFIRMAR
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
