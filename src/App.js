import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Clipboard,
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback
} from 'react-native';
// import Clipboard from '@react-native-community/clipboard'; // will one day work with expo
import { Appearance, useColorScheme } from 'react-native-appearance';
import PickerSelect from 'react-native-picker-select';
import { Chevron } from 'react-native-shapes';
import { switchCasing } from './helpers';
import { colors, styles, pickerStyles } from './styles';
import { casings } from './constants';

Appearance.getColorScheme();

const App = () => {
  const [text, setText] = useState('');
  const [casing, setCasing] = useState('original');
  const [casingText, setCasingText] = useState('');
  const colorScheme = useColorScheme();

  const changeText = (text, casing) => {
    setText(text);
    setCasingText(switchCasing(text, casing));
  };

  const changeCasing = (text, casing) => {
    setCasing(casing);
    setCasingText(switchCasing(text, casing));
  }

  const copyToClipboard = () => {
    Clipboard.setString(casingText);
  }

  const pasteFromClipboard = async () => {
    var paste = await Clipboard.getString();
    setText(paste);
    setCasingText(switchCasing(paste, casing));
  }

  const dismissKeyboard = () => {
    if (Platform.OS !== 'web') {
      Keyboard.dismiss();
    }
  }

  const isLight = colorScheme === 'light';
  const wrapperColors = isLight ? styles.wrapperLight : styles.wrapperDark;
  const labelColors = isLight ? styles.labelLight : styles.labelDark;
  const textContainerColors = isLight ? styles.textContainerLight : styles.textContainerDark;
  const textColors = isLight ? styles.textLight : styles.textDark;
  const pickerStyle = isLight ? pickerStyles.light : pickerStyles.dark;
  const secondaryButtonColors = isLight ? styles.secondaryButtonLight : styles.secondaryButtonDark;
  const secondaryButtonTextColors = isLight ? styles.secondaryButtonTextLight : styles.secondaryButtonTextDark;

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={[styles.wrapper, wrapperColors]}>
        <View style={styles.container}>
          <Text style={[styles.title, labelColors]}>transformT</Text>
          <View style={styles.textsContainer}>
            <Text style={[styles.label, labelColors]}>Input Text</Text>
            <View style={[styles.textContainer, textContainerColors]}>
              <TextInput
                style={[styles.text, textColors, styles.textInput]}
                placeholder='Type here...'
                placeholderTextColor={isLight ? colors.dark : colors.light}
                onChangeText={text => changeText(text, casing)}
                defaultValue={text}
                multiline={true}
              />
            </View>
            <View style={styles.spacer}/>
            <Text style={[styles.label, labelColors]}>transformT Text</Text>
            <TouchableOpacity
              onPress={copyToClipboard}
            >
              <View style={[styles.textContainer, textContainerColors]}>
                <Text style={[styles.text, textColors, styles.textOutput]}>{casingText}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.casingContainer}>
            <Text style={[styles.label, labelColors]}>Select Casing</Text>
            <PickerSelect
              placeholder={{}}
              key='casing-picker'
              value={casing ? casing : 'original'}
              onValueChange={casing => changeCasing(text, casing)}
              items={casings}
              useNativeAndroidPickerStyle={false}
              Icon={() => {
                return <Chevron size={1.5} color={isLight ? colors.dark : colors.light} />;
              }}
              style={pickerStyle}
            />
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={[styles.button, styles.secondaryButton, secondaryButtonColors]}
              onPress={pasteFromClipboard}
            >
              <Text style={[styles.buttonText, secondaryButtonTextColors]}>Paste input text</Text>
            </TouchableOpacity>
            <View style={styles.buttonsSpacer}/>
            <TouchableOpacity
              style={[styles.button, styles.primaryButton]}
              onPress={copyToClipboard}
            >
              <Text style={styles.buttonText}>Copy transformT text</Text>
            </TouchableOpacity>
          </View>
          <StatusBar style={isLight ? 'dark' : 'light'} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default App;
