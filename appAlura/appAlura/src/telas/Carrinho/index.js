import React from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Item from './item';

import estilosGlobal from '../estilos';
import TelaPadrao from '../../components/TelaPadrao';
import StatusCarrinho from '../../components/StatusCarrinho';
const servicos = [
  {
    id: 1,
    nome: 'Banho',
    preco: 79.9,
    descricao: 'NÃO DE BANHO NO SEU GATO! mas se precisar nós damos.',
    quantidade: 1,
  },
  {
    id: 2,
    nome: 'Vacina V4',
    preco: 89.9,
    descricao: 'Uma dose da vacina V4. Seu gato precisa de duas.',
    quantidade: 2,
  },
  {
    id: 3,
    nome: 'Vacina Antirrábica',
    preco: 99.9,
    descricao:
      'Uma dose da vacina antirrabica. Seu gato precisa de uma por ano.',
    quantidade: 1,
  },
];
export default function Carrinho() {
  const total = servicos.reduce(
    (soma, {preco, quantidade}) => soma + preco * quantidade,
    0,
  );
  return (
    <TelaPadrao>
      <StatusCarrinho total={total} />
      <FlatList
        data={servicos}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={({id}) => String(id)}
      />
    </TelaPadrao>
  );
}
