import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    padding: 15,
  },
  container: {
    marginTop: 60,
    alignItems: 'center',
  },
  exitButton: {
    width: 40,
    height: 40,
    alignSelf: 'flex-start',
    backgroundColor: '#C6CEFF',
    borderRadius: 10,
    borderWidth: 0,
    elevation: 4,
  },
  dataHoraContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  EspacoTexto: {
    color: '#969696',
    marginLeft: 10,
  },
  FonteTexto: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'SourceSansPro-Bold',
  },
  emojistyles: {
    width: 43,
    height: 43,
  },
  button: {
    margin: 10,
    alignItems: 'center',
  },
  teste: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  boxActivities: {
    marginTop: 25,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
  },
  input: {
    borderColor: 'black',
    borderRadius: 20,
    borderWidth: 1,
    marginTop: 15,
    backgroundColor: 'white',
    color: 'black',
  },
  saveButton: {
    width: '100%',
    backgroundColor: 'blue',
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 25,
  },
});
