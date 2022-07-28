import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 38,
  },
  smile: {
    width: 57,
    height: 57,
    marginTop: 32,
  },
  text: {
    color: '#969696',
    fontSize: 16,
  },
  smileContainer: {
    alignItems: 'center',
  },
  square: {
    backgroundColor: '#FFFFFF',
    width: 350,
    margin: 21,
    borderRadius: 20,
    paddingVertical: 58,
  },
  squareIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  squareDescription: {
    backgroundColor: '#FFFFFF',
    overflow: 'scroll',
    maxHeight: 100,
    width: 350,
    margin: 10,
    borderRadius: 20,
    textAlign: 'center',
    paddingHorizontal: 38,
    paddingVertical: 13,
  },
  Text: {
    fontSize: 13,
    color: 'black',
    fontFamily: 'SourceSansPro-SemiBold',
  },
  TextCook: {
    fontSize: 13,
    color: 'black',
    fontFamily: 'SourceSansPro-Bold',
    marginTop: 9,
  },
  TextSports: {
    fontSize: 13,
    color: 'black',
    fontFamily: 'SourceSansPro-Bold',
    marginTop: 9,
  },
  TextParty: {
    fontSize: 13,
    color: 'black',
    fontFamily: 'SourceSansPro-Bold',
    marginTop: 9,
  },
  textBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight: 6,
  },
  icon: {
    padding: 12,
    borderRadius: 50,
    backgroundColor: '#304FFE',
  },
  button: {
    width: 40,
    height: 40,
    alignSelf: 'flex-start',
    marginLeft: 33,
    backgroundColor: '#C6CEFF',
    borderRadius: 10,
    borderWidth: 0,
    elevation: 4,
  },
});
