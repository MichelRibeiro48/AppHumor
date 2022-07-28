import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import DetStyle from './DetStyle';

import MaterialC from 'react-native-vector-icons/MaterialCommunityIcons';
import FontA from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {EMOJIS} from '../../settings/images';
import {traducao} from '../../settings/ptBR';
import {api} from '../../service/api';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
export default function Detalhes({route, navigation}) {
  const {item} = route.params;
  const [loading, setLoading] = useState(true);
  const [activitiesDetailed, setActivitiesDetailed] = useState(null);
  const getActivitiesDetailed = async () => {
    try {
      const response = await api.get(
        `https://shrouded-shelf-01513.herokuapp.com/daily_entries/${item.id}`,
      );
      setActivitiesDetailed(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getActivitiesDetailed();
  }, []);
  console.log(activitiesDetailed.activities[0]);
  return (
    <View style={DetStyle.container}>
      {loading ? (
        console.log('Carregando')
      ) : (
        <>
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
            <Text style={DetStyle.text}>
              {format(new Date(activitiesDetailed?.created_at), 'HH:mm', {
                locale: ptBR,
              })}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <AntDesign
              name="calendar"
              size={20}
              color={'#969696'}
              style={{marginRight: 3}}
            />
            <Text style={DetStyle.text}>
              {format(new Date(activitiesDetailed?.created_at), 'PPPP', {
                locale: ptBR,
              })}
            </Text>
          </View>
          <Image
            style={DetStyle.smile}
            source={EMOJIS[activitiesDetailed?.mood]}
          />
          <Text
            style={
              activitiesDetailed?.mood === 'happy'
                ? // eslint-disable-next-line react-native/no-inline-styles
                  {
                    color: '#E24B4B',
                    fontSize: 24,
                    marginTop: 10,
                    fontFamily: 'SourceSansPro-Bold',
                  }
                : activitiesDetailed?.mood === 'sad'
                ? // eslint-disable-next-line react-native/no-inline-styles
                  {
                    color: '#4B75E2',
                    fontSize: 24,
                    fontFamily: 'SourceSansPro-Bold',
                  }
                : activitiesDetailed?.mood === 'terrible'
                ? // eslint-disable-next-line react-native/no-inline-styles
                  {
                    color: '#4BE263',
                    fontSize: 24,
                    fontFamily: 'SourceSansPro-Bold',
                  }
                : null
            }>
            {traducao[activitiesDetailed?.mood]}
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
              <Text style={DetStyle.TextParty}>
                {activitiesDetailed?.activities[0].name}
              </Text>
              <Text style={DetStyle.TextSports}>
                {activitiesDetailed?.activities[1].name}
              </Text>
              <Text style={DetStyle.TextCook}>
                {activitiesDetailed?.activities[2].name}
              </Text>
            </View>
          </View>
          <View style={DetStyle.squareDescription}>
            <View>
              <Text style={DetStyle.Text}>
                {activitiesDetailed?.description}
              </Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
}
