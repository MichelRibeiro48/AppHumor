import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Circle from 'react-native-vector-icons/FontAwesome';
import RegFStyles from './RegFStyles';
import {EMOJIS} from '../../settings/images';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import {traducao} from '../../settings/ptBR';
import {ACTIVITIESICON} from '../../settings/activitiesIcon';
export default function RegistroCheio({registros}) {
  const Navigation = useNavigation();

  return (
    <SafeAreaView style={RegFStyles.marginToScroll}>
      <FlatList
        data={registros}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={RegFStyles.container}
            onPress={() => Navigation.navigate('Details', {item: item})}>
            <View style={RegFStyles.informationContainer}>
              <Image style={RegFStyles.smile} source={EMOJIS[item.mood]} />
              <View>
                <View style={RegFStyles.information}>
                  <Text style={RegFStyles.title}>
                    {format(new Date(item.created_at), 'PPP', {
                      locale: ptBR,
                    })}
                  </Text>
                </View>
                <View style={RegFStyles.informationRow}>
                  <Text
                    style={
                      item.mood === 'happy'
                        ? // eslint-disable-next-line react-native/no-inline-styles
                          {
                            color: '#E24B4B',
                            fontSize: 24,
                            fontFamily: 'SourceSansPro-Bold',
                          }
                        : item.mood === 'sad'
                        ? // eslint-disable-next-line react-native/no-inline-styles
                          {
                            color: '#4B75E2',
                            fontSize: 24,
                            fontFamily: 'SourceSansPro-Bold',
                          }
                        : item.mood === 'terrible'
                        ? // eslint-disable-next-line react-native/no-inline-styles
                          {
                            color: '#4BE263',
                            fontSize: 24,
                            fontFamily: 'SourceSansPro-Bold',
                          }
                        : item.mood === 'radiant'
                        ? {
                            color: '#29ACE9',
                            fontSize: 24,
                            fontFamily: 'SourceSansPro-Bold',
                          }
                        : item.mood === 'ok'
                        ? {
                            color: '#889BA4',
                            fontSize: 24,
                            fontFamily: 'SourceSansPro-Bold',
                          }
                        : null
                    }>
                    {traducao[item.mood]}
                  </Text>
                  <Text style={RegFStyles.hora}>
                    {format(new Date(item.created_at), 'HH:mm', {
                      locale: ptBR,
                    })}
                  </Text>
                </View>
              </View>
            </View>
            <View style={RegFStyles.typeInformation}>
              <Image
                style={RegFStyles.icon}
                source={ACTIVITIESICON[item.activities[0].name]}
              />
              <Text style={RegFStyles.textColor}>
                {traducao[item.activities[0].name]}
              </Text>
              <Circle
                name={'circle'}
                size={8}
                color={'black'}
                style={RegFStyles.circleStyle}
              />
              <Image
                style={RegFStyles.icon}
                source={ACTIVITIESICON[item.activities[1].name]}
              />
              <Text style={RegFStyles.textColor}>
                {traducao[item.activities[1].name]}
              </Text>
              <Circle
                name={'circle'}
                size={8}
                color={'black'}
                style={RegFStyles.circleStyle}
              />
              <Image
                style={RegFStyles.icon}
                source={ACTIVITIESICON[item.activities[2].name]}
              />
              <Text style={RegFStyles.textColor}>
                {traducao[item.activities[2].name]}
              </Text>
            </View>
            <Text style={RegFStyles.descricao} numberOfLines={1}>
              {item.short_description}
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
