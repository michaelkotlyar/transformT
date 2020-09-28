import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    alignSelf: 'center',
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
  },
  textsContainer: {
    padding: 15,
  },
  textContainer: {
    width: '100%',
    height: 150,
    backgroundColor: '#e4e4e4',
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
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#e4e4e4',
    borderRadius: 12,
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 15,
  }
});

export const casing = StyleSheet.create({
  inputWeb: {
    paddingTop: 10,
    paddingRight: 30,
    paddingBottom: 10,
    paddingLeft: 10,
    borderRadius: 12,
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#e4e4e4',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  iconContainer: {
    height: '100%',
    justifyContent: 'center',
    paddingTop: 2,
    paddingRight: 15,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
});
