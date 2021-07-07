import { StyleSheet } from 'react-native';
import { lightGrey } from '../../constants/UIColors';

export const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'flex-start',
  },

  input: {
    width: '100%',
    maxWidth: 370,
    marginTop: 20,
    marginBottom: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,

    borderWidth: 1,
    borderColor: lightGrey,
    borderRadius: 5,
    fontSize: 16,
    color: lightGrey,
  },
});
