/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
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
import Fotos from '../Fotos';
import ActivitiesIcon from '../ActivitiesIcon';
import {api} from '../../service/api';
export default function NovoRegistro({navigation}) {
  const postActivities = async () => {
    try {
      const payload = {
        'daily_entry': {
          'mood': emoteAtivo.descricao,
          'activity_ids': array,
          'description': texto,
      },
    };
      const response = await api.post(
        'https://shrouded-shelf-01513.herokuapp.com/daily_entries', payload
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

  const [texto, setTexto] = useState(null);
  const [emoteAtivo, setEmoteAtivo] = useState(null);
  const [iconAtivo, setIconAtivo] = useState(null);
  const [array, setArray] = useState([]);
  const verificarId = id => {
    if (array.length < 3 && !array.includes(id)) {
      array.push(id);
    } else if (array.includes(id)) {
      const remove = array.indexOf(id);
      array.splice(remove, 1);
    }
  };

  const activities = [
    {
      id: 1,
      icon: require('../../../assets/atividades/rest.png'),
      descricao: 'descanso',
    },
    {
      id: 2,
      icon: require('../../../assets/atividades/date.png'),
      descricao: 'encontro',
    },
    {
      id: 3,
      icon: require('../../../assets/atividades/movies.png'),
      descricao: 'filmes e series',
    },
    {
      id: 4,
      icon: require('../../../assets/atividades/shopping.png'),
      descricao: 'compras',
    },
    {
      id: 5,
      icon: require('../../../assets/atividades/good_meal.png'),
      descricao: 'boa refeição',
    },
    {
      id: 6,
      icon: require('../../../assets/atividades/party.png'),
      descricao: 'festa',
    },
    {
      id: 7,
      icon: require('../../../assets/atividades/sports.png'),
      descricao: 'esporte',
    },
    {
      id: 8,
      icon: require('../../../assets/atividades/cooking.png'),
      descricao: 'esporte',
    },
    {
      id: 9,
      icon: require('../../../assets/atividades/games.png'),
      descricao: 'cozinhar',
    },
  ];
  const emojis = [
    {
      id: 1,
      emote: require('../../../assets/radiant.png'),
      descricao: 'radiant',
    },
    {
      id: 2,
      emote: require('../../../assets/happy.png'),
      descricao: 'happy',
    },
    {
      id: 3,
      emote: require('../../../assets/ok.png'),
      descricao: 'ok',
    },
    {
      id: 4,
      emote: require('../../../assets/sad.png'),
      descricao: 'sad',
    },
    {
      id: 5,
      emote: require('../../../assets/terrible.png'),
      descricao: 'terrible',
    },
  ];
  return (
    <View style={styles.page}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate('TelaRegistro')}
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
        </View>
        <View style={styles.dataHoraContainer}>
          <CalendarIcon name="calendar" color={'#969696'} />
          <Text style={{color: '#969696'}}>HOJE, 23 DE JANEIRO</Text>
          <HourIcon name="stopwatch-outline" style={styles.EspacoTexto} />
          <Text style={{color: '#969696'}}>08:35</Text>
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
                onPress={() =>
                  item.id === emoteAtivo?.id
                    ? setEmoteAtivo(null)
                    : setEmoteAtivo(item)
                }
              />
            )}
          />
        </View>
        <View style={styles.boxActivities}>
          <FlatList
            data={activities}
            numColumns={3}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <ActivitiesIcon
                item={item} // array.push(item.id)
                estaAtivo={array.includes(item.id)} // array.include(item.id)
                onPress={() => {
                  item.id === iconAtivo?.id
                    ? setIconAtivo(null)
                    : setIconAtivo(item);
                    verificarId(item.id);
                }}
              />
            )}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={{marginBottom: 50}}
            onChangeText={setTexto}
            value={texto}
            placeholder="Escreva aqui o que aconteceu hoje..."
            placeholderTextColor={'#969696'}
          />
        </View>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => {postActivities(), navigation.goBack();}}>
          <Text style={{color: 'white'}}>SALVAR</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
