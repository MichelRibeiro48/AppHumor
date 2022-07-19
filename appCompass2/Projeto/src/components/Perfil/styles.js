import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 84,
    padding: 43,
  },
  image: {
    height: 52,
    width: 52,
    backgroundColor: '#F16063',
    borderRadius: 50,
    padding: 50,
  },
  editProfileButton: {
    width: '100%',
    backgroundColor: 'blue',
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 42,
    marginBottom: 16,
  },
  exitProfileButton: {
    width: '100%',
    backgroundColor: 'white',
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    borderColor: 'black',
    borderWidth: 2,
  },
});
