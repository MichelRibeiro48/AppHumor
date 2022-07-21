import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 43,
  },
  image: {
    height: 52,
    width: 52,
    backgroundColor: '#F16063',
    borderRadius: 50,
    padding: 50,
  },
  alterPhotoButton: {
    marginVertical: 40,
    height: 44,
    width: 150,
    backgroundColor: '#304FFE24',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#c0c6f1',
  },
  input: {
    width: '100%',
    padding: 5,
    marginVertical: 5,
    backgroundColor: 'white',
    color: 'black',
    borderWidth: 1,
  },
  saveButton: {
    width: '100%',
    backgroundColor: 'blue',
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 35,
  },
  alterText: {
    color: 'blue',
    fontWeight: 'bold',
  },
});
