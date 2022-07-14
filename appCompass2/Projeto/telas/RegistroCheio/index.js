import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Circle from 'react-native-vector-icons/FontAwesome';
import RegFStyles from './RegFStyles';
export default function RegistroCheio({registros}) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={RegFStyles.marginToScroll}>
      <FlatList
        data={registros}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={RegFStyles.container}
            onPress={() => navigation.navigate('Detalhes', {item: item})}>
            <View style={RegFStyles.informationContainer}>
              <Image style={RegFStyles.smile} source={item.emote} />
              <View>
                <View style={RegFStyles.information}>
                  <Text style={RegFStyles.title}>{item.data}</Text>
                </View>
                <View style={RegFStyles.informationRow}>
                  <Text
                    style={
                      item.status === 'BEM'
                        ? // eslint-disable-next-line react-native/no-inline-styles
                          {
                            color: '#E24B4B',
                            fontSize: 24,
                            fontFamily: 'SourceSansPro-Bold',
                          }
                        : item.status === 'MAL'
                        ? // eslint-disable-next-line react-native/no-inline-styles
                          {
                            color: '#4B75E2',
                            fontSize: 24,
                            fontFamily: 'SourceSansPro-Bold',
                          }
                        : item.status === 'TRISTE'
                        ? // eslint-disable-next-line react-native/no-inline-styles
                          {
                            color: '#4BE263',
                            fontSize: 24,
                            fontFamily: 'SourceSansPro-Bold',
                          }
                        : null
                    }>
                    {item.status}
                  </Text>
                  <Text style={RegFStyles.hora}>{item.hora}</Text>
                </View>
              </View>
            </View>
            <View style={RegFStyles.typeInformation}>
              <Image style={RegFStyles.icon} source={item.imagemtipo[0]} />
              <Text style={RegFStyles.textColor}>{item.tipo[0]}</Text>
              <Circle
                name={'circle'}
                size={8}
                color={'black'}
                style={RegFStyles.circleStyle}
              />
              <Image style={RegFStyles.icon} source={item.imagemtipo[1]} />
              <Text style={RegFStyles.textColor}>{item.tipo[1]}</Text>
              <Circle
                name={'circle'}
                size={8}
                color={'black'}
                style={RegFStyles.circleStyle}
              />
              <Image style={RegFStyles.icon} source={item.imagemtipo[2]} />
              <Text style={RegFStyles.textColor}>{item.tipo[2]}</Text>
            </View>
            <Text style={RegFStyles.descricao} numberOfLines={1}>
              {item.descricao}
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
