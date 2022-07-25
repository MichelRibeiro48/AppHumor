import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    padding: 24,
    flex: 1,
    marginTop: 63,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  exitButton: {
    width: 40,
    height: 40,
    alignSelf: 'flex-start',
    marginLeft: 33,
    backgroundColor: '#C6CEFF',
    borderRadius: 10,
    borderWidth: 0,
    elevation: 4,
    marginTop: 32,
  },
  selectionText: {
    color: 'black',
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 24,
    marginBottom: 40,
  },
  buttonConfirm: {
    marginBottom: 80,
    width: '100%',
    backgroundColor: '#304FFE',
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 35,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'SourceSansPro-Bold',
  },
});
