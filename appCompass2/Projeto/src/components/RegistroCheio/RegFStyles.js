import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    margin: 15,
    borderRadius: 20,
    paddingHorizontal: 28,
    paddingVertical: 18,
  },
  informationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  information: {
    flexDirection: 'column',
  },
  informationRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  typeInformation: {
    flexDirection: 'row',
    marginTop: 17,
  },
  smile: {
    width: 57,
    height: 57,
    marginRight: 16,
  },
  title: {
    fontSize: 21,
    color: '#ACACAC',
  },
  hora: {
    marginLeft: 7,
    color: '#ACACAC',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 11,
  },
  textColor: {
    color: '#000000',
    fontFamily: 'SourceSansPro-SemiBold',
  },
  circleStyle: {
    marginLeft: 11,
    marginTop: 7,
    marginRight: 11,
  },
  descricao: {
    marginTop: 12,
    lineHeight: 20,
    width: 215,
    fontSize: 13,
    color: '#ACACAC',
  },
  marginToScroll: {
    marginBottom: 100,
    paddingTop: 18,
  },
});
