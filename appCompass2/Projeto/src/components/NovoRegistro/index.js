import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

import CloseIcon from 'react-native-vector-icons/AntDesign';
import CalendarIcon from 'react-native-vector-icons/AntDesign';
import HourIcon from 'react-native-vector-icons/Ionicons';
import Emotes from '../Emotes';
export default function NovoRegistro({navigation}) {
  const [emoteAtivo, setEmoteAtivo] = useState(null);
  const emojis = [
    {
      id: 1,
      emote: require('../../../assets/radiant.png'),
      descricao: 'RADIANTE',
    },
    {
      id: 2,
      emote: require('../../../assets/happy.png'),
      descricao: 'FELIZ',
    },
    {
      id: 3,
      emote: require('../../../assets/ok.png'),
      descricao: 'OK',
    },
    {
      id: 4,
      emote: require('../../../assets/sad.png'),
      descricao: 'TRISTE',
    },
    {
      id: 5,
      emote: require('../../../assets/terrible.png'),
      descricao: 'ACABADO',
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
        <Text style={styles.FonteTexto}>Como você está?</Text>
        <FlatList />
      </View>
      <View style={styles.dataHoraContainer}>
        <CalendarIcon name="calendar" />
        <Text>HOJE, 23 DE JANEIRO</Text>
        <HourIcon name="stopwatch-outline" style={styles.EspacoTexto} />
        <Text>08:35</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <FlatList
          data={emojis}
          horizontal={true}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Emotes
              item={item}
              estaAtivo={item.id === emoteAtivo?.id}
              onPress={() => setEmoteAtivo(item)}
            />
          )}
        />
      </View>
      <View style={styles.boxActivities}>
        <Text>Teste</Text>
      </View>
      <View style={styles.input}>
        <TextInput placeholder="Escreva aqui o que aconteceu hoje..." />
      </View>
      <TouchableOpacity style={styles.saveButton}>
        <Text style={{color: 'white'}}>SALVAR</Text>
      </TouchableOpacity>
    </View>
  );
}
