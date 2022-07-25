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
    backgroundColor: '#304FFE',
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
  profileText: {
    marginTop: 46,
    fontFamily: 'SourceSansPro-Regular',
    color: 'black',
    fontSize: 36,
  },
  buttonEditText: {
    color: 'white',
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 15,
  },
  buttonExitText: {
    color: 'black',
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 15,
  },
  informationBox: {
    alignSelf: 'flex-start',
    marginTop: 17,
  },
  informationType: {
    fontFamily: 'SourceSansPro-Bold',
    color: 'black',
  },
  information: {
    color: 'black',
  },
  informationRow: {
    flexDirection: 'row',
  },
});
