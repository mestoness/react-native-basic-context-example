import {StyleSheet} from 'react-native';
import {MainContext, useContext} from '../../core/context';
export const style = StyleSheet.create({
  view: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  padding_1: {
    padding: 5,
  },
  paddingTop_1: {
    paddingTop: 10,
  },
  headerTitle: {
    fontSize: 25,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'cyan',
    color: 'black',
    padding: 10,
  },
  bgDark: {
    backgroundColor: 'black',
  },
  bgLight: {
    backgroundColor: 'white',
  },
});
