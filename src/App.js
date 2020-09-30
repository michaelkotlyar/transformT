import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import PickerSelect from 'react-native-picker-select';
import { Chevron } from 'react-native-shapes';
import { useDarkMode } from 'react-native-dynamic';
import { switchCasing } from './helpers';
import { colors, styles, casingStyle } from './styles';

const App = () => {
  const [text, setText] = useState('');
  const [casing, setCasing] = useState('original');
  const [casingText, setCasingText] = useState('');

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
    const paste = await Clipboard.getString();
    setText(paste);
    setCasingText(switchCasing(paste, casing));
  }

  const dismissKeyboard = () => {
    if (Platform.OS !== 'web') {
      Keyboard.dismiss();
    }
  }

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.textsContainer}>
            <Text style={styles.label}>Input Text</Text>
            <View style={styles.textContainer}>
              <TextInput
                style={[styles.text, styles.textInput]}
                placeholder='Type here...'
                onChangeText={text => changeText(text, casing)}
                defaultValue={text}
                multiline={true}
              />
            </View>
            <View style={styles.spacer}/>
            <Text style={styles.label}>transformT Text</Text>
            <TouchableOpacity
              onPress={copyToClipboard}
            >
              <View style={styles.textContainer}>
                <Text style={[styles.text, styles.textOutput]}>{casingText}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.casingContainer}>
            <Text style={styles.label}>Casing</Text>
            <PickerSelect
              placeholder={{
                label: 'Select a casing...',
                value: null,
                color: colors.text,
              }}
              value={casing ? casing : 'original'}
              onValueChange={casing => changeCasing(text, casing)}
              items={[
                { label: 'Original', value: 'original' },
                { label: 'lowercase', value: 'lowercase' },
                { label: 'UPPERCASE', value: 'uppercase' },
                { label: 'Capitalised', value: 'capitalized' },
                { label: 'Sentence', value: 'sentence' },
                { label: 'rANdoMiseD', value: 'random' },
              ]}
              useNativeAndroidPickerStyle={false}
              Icon={() => {
                return <Chevron size={1.5} color={colors.text} />;
              }}
              style={casingStyle}
            />
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={[styles.button, styles.primaryButton]}
              onPress={copyToClipboard}
            >
              <Text>Copy transformT Text</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.secondaryButton]}
              onPress={pasteFromClipboard}
            >
              <Text>Paste Into Input Text</Text>
            </TouchableOpacity>
          </View>
          <StatusBar style={useDarkMode ? 'light' : 'dark'} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default App;
