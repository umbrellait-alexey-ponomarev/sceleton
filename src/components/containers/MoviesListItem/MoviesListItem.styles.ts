import { StyleSheet } from 'react-native';
import { white, yellow } from '../../../constants/UIColors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  imageWrapper: {
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    width: 210,
    height: 140,
  },
  info: {
    maxWidth: 150,
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    width: 80,
    padding: 10,
    borderWidth: 1,
    borderColor: yellow,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: yellow,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: white,
  },
});
