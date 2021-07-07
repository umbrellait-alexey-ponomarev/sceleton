import { StyleSheet } from 'react-native';
import { black, red, yellow } from '../../constants/UIColors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  imageWrapp: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 125,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 'auto',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  button: {
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: yellow,
    backgroundColor: black,
  },
  buttonText: {
    textAlign: 'center',
    color: yellow,
  },
  buttonStop: {
    width: 100,
    backgroundColor: red,
  },
});
