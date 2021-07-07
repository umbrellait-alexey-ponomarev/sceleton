import { StyleSheet } from 'react-native';
import { lightGrey, yellow } from '../../constants/UIColors';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  info: {
    width: '100%',
    maxHeight: 200,
    flex: 1,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  textTitle: {
    fontSize: 18,
    color: lightGrey,
  },
  textInfo: {
    marginBottom: 20,
    color: yellow,
  },
  image: { width: '100%', height: 300 },
});
