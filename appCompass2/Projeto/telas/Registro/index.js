import React from 'react';
import RegistroCheio from '../RegistroCheio';
import RegistroVazio from '../RegistroVazio';

export default function Registro() {
  const registros = [
    {
      id: '1',
      emote: require('../../assets/happy.png'),
      data: 'Hoje, 23 de Janeiro',
      status: 'BEM',
      hora: '08:35',
      imagemtipo: [
        require('../../assets/atividades/party.png'),
        require('../../assets/atividades/sports.png'),
        require('../../assets/atividades/cooking.png'),
      ],
      tipo: ['festa', 'esporte', 'cozinhar'],
      descricao:
        'Hoje foi um dia muito bom. Joguei futebol no parque, cozinhei uma lasanha para minha família. E à noite, fui à festa de aniversário do meu amigo.',
    },
    {
      id: '2',
      emote: require('../../assets/terrible.png'),
      data: 'Ontem, 22 de Janeiro',
      status: 'MAL',
      hora: '08:35',
      imagemtipo: [
        require('../../assets/atividades/party.png'),
        require('../../assets/atividades/sports.png'),
        require('../../assets/atividades/cooking.png'),
      ],
      tipo: ['festa', 'esporte', 'cozinhar'],
      descricao: 'Lorem Ipsum Dolor Sit',
    },
    {
      id: '3',
      emote: require('../../assets/sad.png'),
      data: '21 de Janeiro',
      status: 'TRISTE',
      hora: '08:35',
      imagemtipo: [
        require('../../assets/atividades/party.png'),
        require('../../assets/atividades/sports.png'),
        require('../../assets/atividades/cooking.png'),
      ],
      tipo: ['festa', 'esporte', 'cozinhar'],
      descricao: 'Lorem Ipsum Dolor Sit',
    },
    {
      id: '4',
      emote: require('../../assets/happy.png'),
      data: '20 de Janeiro',
      status: 'BEM',
      hora: '08:35',
      imagemtipo: [
        require('../../assets/atividades/party.png'),
        require('../../assets/atividades/sports.png'),
        require('../../assets/atividades/cooking.png'),
      ],
      tipo: ['festa', 'esporte', 'cozinhar'],
      descricao: 'Lorem Ipsum Dolor Sit',
    },
    {
      id: '5',
      emote: require('../../assets/happy.png'),
      data: '20 de Janeiro',
      status: 'BEM',
      hora: '08:35',
      imagemtipo: [
        require('../../assets/atividades/party.png'),
        require('../../assets/atividades/sports.png'),
        require('../../assets/atividades/cooking.png'),
      ],
      tipo: ['festa', 'esporte', 'cozinhar'],
      descricao: 'Lorem Ipsum Dolor Sit',
    },
    {
      id: '6',
      emote: require('../../assets/happy.png'),
      data: '20 de Janeiro',
      status: 'BEM',
      hora: '08:35',
      imagemtipo: [
        require('../../assets/atividades/party.png'),
        require('../../assets/atividades/sports.png'),
        require('../../assets/atividades/cooking.png'),
      ],
      tipo: ['festa', 'esporte', 'cozinhar'],
      descricao: 'Lorem Ipsum Dolor Sit',
    },
  ];

  if (registros.length > 0) {
    return <RegistroCheio registros={registros} />;
  } else {
    return <RegistroVazio />;
  }
}
