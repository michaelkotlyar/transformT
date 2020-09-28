import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Clipboard,
  Keyboard,
  Platform
} from 'react-native';
import PickerSelect from 'react-native-picker-select';
import { Chevron } from 'react-native-shapes';
import { switchCasing } from './helpers';
import { styles, casing as casingStyle } from './styles';

export default function App() {
  const [text, setText] = useState('');
  const [casing, setCasing] = useState('original');
  const [casingText, setCasingText] = useState('');

  const changeText = (text, casing) => {
    setText(text);
    changeCasing(text, casing);
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
    changeText(paste, casing);
  }

  const dismissKeyboard = () => {
    if (Platform.OS !== 'web') {
      Keyboard.dismiss();
    }
  }

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
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
          <PickerSelect
            placeholder={{
              label: 'Select a casing...',
              value: null,
              color: '#e4e4e4',
            }}
            value={casing ? casing : 'original'}
            onValueChange={casing => changeCasing(text, casing)}
            items={[
              { label: 'Original', value: 'original', key: 'original' },
              { label: 'lowercase', value: 'lowercase', key: 'lowercase' },
              { label: 'UPPERCASE', value: 'uppercase', key: 'uppercase' },
              { label: 'Capitalised', value: 'capitalized', key: 'capitalized' },
              { label: 'Sentence', value: 'sentence', key: 'sentence' },
              { label: 'rANdoMiseD', value: 'random', key: 'random' },
            ]}
            useNativeAndroidPickerStyle={false}
            textInputProps={{ underlineColorAndroid: 'cyan' }}
            Icon={() => {
              return <Chevron size={1.5} color="gray" />;
            }}
            style={casingStyle}
          />
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={copyToClipboard}
          >
            <Text>Copy transformT Text</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={pasteFromClipboard}
          >
            <Text>Paste Input Text</Text>
          </TouchableOpacity>
        </View>
        <StatusBar/>
      </View>
    </TouchableWithoutFeedback>
  );
}
