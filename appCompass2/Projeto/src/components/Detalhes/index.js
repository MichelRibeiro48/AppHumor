import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import DetStyle from './DetStyle';

import MaterialC from 'react-native-vector-icons/MaterialCommunityIcons';
import FontA from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function Detalhes({route, navigation}) {
  const {item} = route.params;
  return (
    <View style={DetStyle.container}>
      <TouchableOpacity
        style={DetStyle.button}
        onPress={() => navigation.goBack()}>
        <AntDesign
          name="left"
          size={32}
          color={'#4B75E2'}
          style={{marginTop: 4, marginLeft: 3}}
        />
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <AntDesign
          name="clockcircleo"
          size={20}
          color={'#969696'}
          style={{marginRight: 3}}
        />
        <Text style={DetStyle.text}>{item.hora}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <AntDesign
          name="calendar"
          size={20}
          color={'#969696'}
          style={{marginRight: 3}}
        />
        <Text style={DetStyle.text}>{item.data}</Text>
      </View>
      <Image style={DetStyle.smile} source={item.emote} />
      <Text
        style={
          item.status === 'BEM'
            ? // eslint-disable-next-line react-native/no-inline-styles
              {
                color: '#E24B4B',
                fontSize: 24,
                marginTop: 10,
                fontFamily: 'SourceSansPro-Bold',
              }
            : item.status === 'MAL'
            ? // eslint-disable-next-line react-native/no-inline-styles
              {color: '#4B75E2', fontSize: 24, fontFamily: 'SourceSansPro-Bold'}
            : item.status === 'TRISTE'
            ? // eslint-disable-next-line react-native/no-inline-styles
              {color: '#4BE263', fontSize: 24, fontFamily: 'SourceSansPro-Bold'}
            : null
        }>
        {item.status}
      </Text>
      <View style={DetStyle.square}>
        <View style={DetStyle.squareIcons}>
          <MaterialC
            name="party-popper"
            size={27}
            color={'white'}
            style={DetStyle.icon}
          />
          <FontA
            name="soccer-ball-o"
            size={27}
            color={'white'}
            style={DetStyle.icon}
          />
          <MaterialC
            name="food-turkey"
            size={27}
            color={'white'}
            style={DetStyle.icon}
          />
        </View>
        <View style={DetStyle.textBox}>
          <Text style={DetStyle.TextParty}>Festa</Text>
          <Text style={DetStyle.TextSports}>Esporte</Text>
          <Text style={DetStyle.TextCook}>Cozinhar</Text>
        </View>
      </View>
      <View style={DetStyle.squareDescription}>
        <View>
          <Text style={DetStyle.Text}>{item.descricao}</Text>
        </View>
      </View>
    </View>
  );
}
