import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {api} from '../../service/api';
import RegistroCheio from '../RegistroCheio';
import RegistroVazio from '../RegistroVazio';

export default function Registro() {
  const [atividades, setAtividades] = useState(null);
  const getActivities = async () => {
    try {
      const response = await api.get(
        'https://shrouded-shelf-01513.herokuapp.com/daily_entries',
      );
      setAtividades(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getActivities();
  }, []);
  const registros = [
    {
      id: '1',
      emote: require('../../../assets/happy.png'),
      data: 'Hoje, 23 de Janeiro',
      status: 'BEM',
      hora: '08:35',
      imagemtipo: [
        require('../../../assets/atividades/party.png'),
        require('../../../assets/atividades/sports.png'),
        require('../../../assets/atividades/cooking.png'),
      ],
      tipo: ['festa', 'esporte', 'cozinhar'],
      descricao:
        'Hoje foi um dia muito bom. Joguei futebol no parque, cozinhei uma lasanha para minha família. E à noite, fui à festa de aniversário do meu amigo.',
    },
    {
      id: '2',
      emote: require('../../../assets/terrible.png'),
      data: 'Ontem, 22 de Janeiro',
      status: 'MAL',
      hora: '08:35',
      imagemtipo: [
        require('../../../assets/atividades/party.png'),
        require('../../../assets/atividades/sports.png'),
        require('../../../assets/atividades/cooking.png'),
      ],
      tipo: ['festa', 'esporte', 'cozinhar'],
      descricao: 'Lorem Ipsum Dolor Sit',
    },
    {
      id: '3',
      emote: require('../../../assets/sad.png'),
      data: '21 de Janeiro',
      status: 'TRISTE',
      hora: '08:35',
      imagemtipo: [
        require('../../../assets/atividades/party.png'),
        require('../../../assets/atividades/sports.png'),
        require('../../../assets/atividades/cooking.png'),
      ],
      tipo: ['festa', 'esporte', 'cozinhar'],
      descricao: 'Lorem Ipsum Dolor Sit',
    },
    {
      id: '4',
      emote: require('../../../assets/happy.png'),
      data: '20 de Janeiro',
      status: 'BEM',
      hora: '08:35',
      imagemtipo: [
        require('../../../assets/atividades/party.png'),
        require('../../../assets/atividades/sports.png'),
        require('../../../assets/atividades/cooking.png'),
      ],
      tipo: ['festa', 'esporte', 'cozinhar'],
      descricao: 'Lorem Ipsum Dolor Sit',
    },
    {
      id: '5',
      emote: require('../../../assets/happy.png'),
      data: '20 de Janeiro',
      status: 'BEM',
      hora: '08:35',
      imagemtipo: [
        require('../../../assets/atividades/party.png'),
        require('../../../assets/atividades/sports.png'),
        require('../../../assets/atividades/cooking.png'),
      ],
      tipo: ['festa', 'esporte', 'cozinhar'],
      descricao: 'Lorem Ipsum Dolor Sit',
    },
    {
      id: '6',
      emote: require('../../../assets/happy.png'),
      data: '20 de Janeiro',
      status: 'BEM',
      hora: '08:35',
      imagemtipo: [
        require('../../../assets/atividades/party.png'),
        require('../../../assets/atividades/sports.png'),
        require('../../../assets/atividades/cooking.png'),
      ],
      tipo: ['festa', 'esporte', 'cozinhar'],
      descricao: 'Lorem Ipsum Dolor Sit',
    },
  ];
  if (atividades.length > 0) {
    return <RegistroCheio registros={atividades} />; // caso tenha registro, mostra Lista, se não mostra Tela sem Conteudo (planos futuros)
  } else {
    return <RegistroVazio />;
  }
}
