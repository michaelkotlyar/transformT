import { Platform, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { merge } from 'lodash';

export const colors = {
  black: '#151515',
  dark: '#232323',
  light: '#e4e4e4',
  white: '#ffffff',
  green: '#3de068',
};

/** Main Styles */
export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
  },
  wrapperLight: {
    backgroundColor: colors.white,
  },
  wrapperDark: {
    backgroundColor: colors.black,
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
  title: {
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  spacer: {
    width: '100%',
    height: 15,
  },
  label: {
    paddingBottom: 5,
    fontWeight: '700',
  },
  labelLight: {
    color: colors.black,
  },
  labelDark: {
    color: colors.white,
  },
  textsContainer: {
    padding: 15,
  },
  textContainer: {
    width: '100%',
    height: 150,
    borderRadius: 12,
  },
  textContainerLight: {
    backgroundColor: colors.light,
  },
  textContainerDark: {
    backgroundColor: colors.dark,
  },
  text: {
    width: '100%',
    height: '100%',
    fontSize: 20,
    paddingTop: 15,
    paddingRight: 10,
    paddingBottom: 15,
    paddingLeft: 10,
  },
  textLight: {
    color: colors.black,
  },
  textDark: {
    color: colors.white,
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
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
  },
  buttonsSpacer: {
    width: 15
  },
  button: {
    flex: 1,
    borderRadius: 12,
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  primaryButton: {
    backgroundColor: colors.green,
  },
  secondaryButtonLight: {
    backgroundColor: colors.light,
  },
  secondaryButtonDark: {
    backgroundColor: colors.dark,
  },
  secondaryButtonTextLight: {
    color: colors.black,
  },
  secondaryButtonTextDark: {
    color: colors.white,
  },
  buttonText : {
    width: '100%',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/** Picker Styles */
const inputStyles = {
  paddingTop: 10,
  paddingRight: 30,
  paddingBottom: 10,
  paddingLeft: 10,
  borderRadius: 12,
  borderWidth: 0,
  fontSize: 20,
};

const inputLight = {
  backgroundColor: colors.light,
  color: colors.black,
};

const inputDark = {
  backgroundColor: colors.dark,
  color: colors.white,
}

const iconContainerStyles = {
  height: '100%',
  justifyContent: 'center',
  paddingTop: 2,
  paddingRight: 15,
}

const pickerBaseStyle = {
  inputWeb: inputStyles,
  inputIOS: inputStyles,
  inputAndroid: inputStyles,
  iconContainer: iconContainerStyles,
};

const pickerLight = {
  inputWeb: inputLight,
  inputIOS: inputLight,
  inputAndroid: inputLight,
};

const pickerDark = {
  inputWeb: inputDark,
  inputIOS: inputDark,
  inputAndroid: inputDark,
};

export const pickerStyles = {
  light: merge({}, pickerBaseStyle, pickerLight),
  dark: merge({}, pickerBaseStyle, pickerDark),
};
