import React, {useEffect, useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {api} from '../../service/api';
import styles from './styles';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import {traducao} from '../../settings/ptBR';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Perfil({navigation}) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const getUser = async () => {
    try {
      const response = await api.get(
        'https://shrouded-shelf-01513.herokuapp.com/user',
      );
      setUser(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  const confirmAlert = () => {
    Alert.alert('ATENÇÃO', 'Deseja Realmente Sair?', [
      {
        text: 'Sim',
        onPress: () => {
          AsyncStorage.clear();
          navigation.navigate('Login');
        },
      },
      {
        text: 'Não',
        onPress: () => {},
      },
    ]);
  };
  console.log(loading);
  return (
    <View style={styles.container}>
      {loading ? (
        console.log('Carregando')
      ) : (
        <>
          <Image
            style={styles.image}
            source={{
              uri: `https://shrouded-shelf-01513.herokuapp.com${user?.photo.url}`,
            }}
          />
          <Text style={styles.profileText}>Olá {user?.name}</Text>
          <View style={styles.informationBox}>
            <View style={styles.informationRow}>
              <Text style={styles.informationType}>E-MAIL: </Text>
              <Text style={styles.information}>{user?.email}</Text>
            </View>
            <View style={styles.informationRow}>
              <Text style={styles.informationType}>GÊNERO: </Text>
              <Text style={styles.information}>{traducao[user?.gender]}</Text>
            </View>
            <View style={styles.informationRow}>
              <Text style={styles.informationType}>DATA DE NASCIMENTO:</Text>
              <Text style={styles.information}>
                {format(new Date(user?.birthdate), 'P', {
                  locale: ptBR,
                })}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.editProfileButton}
            onPress={() => navigation.navigate('MudarPerfil', {user: user})}>
            <Text style={styles.buttonEditText}>EDITAR PERFIL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.exitProfileButton}
            onPress={confirmAlert}>
            <Text style={styles.buttonExitText}>SAIR</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
