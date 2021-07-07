import { StyleSheet } from 'react-native';
import { deepBlack, yellow } from '../../../constants/UIColors';

export const styles = StyleSheet.create({
  pagination: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: yellow,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: deepBlack,
  },
});
