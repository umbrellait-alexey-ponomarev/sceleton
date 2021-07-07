import { StyleSheet } from 'react-native';
import { black, lightGrey } from '../../../constants/UIColors';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  content: {
    width: 300,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: lightGrey,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    color: black,
  },
  closeIcon: {
    position: 'absolute',
    right: 10,
    paddingHorizontal: 3,
    paddingBottom: 1,
    lineHeight: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: black,
    borderRadius: 5,
  },
});
