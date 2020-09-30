import { Platform, StyleSheet } from 'react-native';
import { useDarkMode } from 'react-native-dynamic';
import Constants from 'expo-constants';

const black = '#151515';
const dark = '#232323';
const light = '#e4e4e4';
const white = '#ffffff';
const green = '#3de068';

export const colors = {
  background: useDarkMode ? black : white,
  textbox: useDarkMode ? dark : light,
  text: useDarkMode ? white : black,
};

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    paddingTop: Constants.statusBarHeight,
    width: '100%',
    maxWidth: 760,
  },
  spacer: {
    width: '100%',
    height: 15,
  },
  label: {
    paddingBottom: 5,
    fontWeight: '700',
    color: colors.text,
  },
  textsContainer: {
    padding: 15,
  },
  textContainer: {
    width: '100%',
    height: 150,
    backgroundColor: colors.textbox,
    borderRadius: 12,
  },
  text: {
    width: '100%',
    height: '100%',
    color: '#484848',
    fontSize: 20,
    paddingTop: 15,
    paddingRight: 10,
    paddingBottom: 15,
    paddingLeft: 10,
    color: colors.text,
  },
  textInput: {
  },
  textOutput: {
  },
  casingContainer: {
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 15,
  },
  buttons: {
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: '#e4e4e4',
    borderRadius: 12,
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    marginLeft: 15,
  },
  primaryButton: {
    backgroundColor: green,
  },
  secondaryButton: {
    backgroundColor: light,
  },
});

const pickerStyles = {
  paddingTop: 10,
  paddingRight: 30,
  paddingBottom: 10,
  paddingLeft: 10,
  borderRadius: 12,
  backgroundColor: colors.textbox,
  borderWidth: 0,
  color: colors.text,
  fontSize: 16,
};

export const casingStyle = StyleSheet.create({
  inputWeb: pickerStyles,
  inputIOS: pickerStyles,
  inputAndroid: pickerStyles,
  iconContainer: {
    height: '100%',
    justifyContent: 'center',
    paddingTop: 2,
    paddingRight: 15,
  },
});
