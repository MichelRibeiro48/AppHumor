import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#304FFE',
    padding: 40,
  },
  logo: {
    width: 228,
    height: 228,
    marginBottom: 58,
  },
  input: {
    width: '100%',
    borderRadius: 10,
    margin: 12,
    padding: 10,
    backgroundColor: 'white',
    color: 'black',
    elevation: 4,
  },
  buttonEnter: {
    margin: 68,
    width: 138,
    paddingHorizontal: 40,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C6CEFF',
    borderRadius: 10,
    borderWidth: 0,
    elevation: 4,
  },
  buttonText: {
    color: '#304FFE',
    fontFamily: 'SourceSansPro-Black',
  },
});
