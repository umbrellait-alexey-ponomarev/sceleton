import { StyleSheet } from 'react-native';
import { black, deepBlack, yellow } from '../../../constants/UIColors';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 20,
    backgroundColor: deepBlack,
  },
  link: {
    padding: 10,
    marginBottom: 10,
    textAlign: 'center',
    backgroundColor: black,
    borderRadius: 6,
  },
  text: {
    color: yellow,
  },
});
