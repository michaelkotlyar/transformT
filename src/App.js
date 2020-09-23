import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Picker, TouchableOpacity, Clipboard } from 'react-native';

import { lowerCase } from 'lower-case';
import { upperCase } from 'upper-case';
import { capitalCase } from 'capital-case';
import { sentenceCase } from 'sentence-case';
import { spongeCase } from 'sponge-case';

export default function App() {
  const [text, setText] = useState('');
  const [casing, setCasing] = useState('original');
  const [casingText, setCasingText] = useState('');

  const changeText = (text, casing) => {
    setText(text);
    changeCasing(text, casing);
  }

  const changeCasing = (text, casing) => {
    setCasing(casing);
    setCasingText(switchCasing(text, casing));
  }

  const switchCasing = (text, casing) => {
    if (text === '') return '';
    switch (casing) {
      case 'lowercase':
        return lowerCase(text);
      case 'uppercase':
        return upperCase(text);
      case 'capitalized':
        return capitalCase(text);
      case 'sentence':
        return sentenceCase(text);
      case 'random':
        return spongeCase(text);
      default: // original
        return text;
    }
  }

  const copyToClipboard = () => {
    Clipboard.setString(casingText);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40 }}
        placeholder='Type here...'
        onChangeText={text => changeText(text, casing)}
        defaultValue={text}
      />
      <Text>
        {casingText}
      </Text>
      <Picker
        selectedValue={casing}
        style={{ height: 50, width: 150 }}
        onValueChange={casing => changeCasing(text, casing)}
      >
        <Picker.Item label='Original' value='original' />
        <Picker.Item label='lowercase' value='lowercase' />
        <Picker.Item label='UPPERCASE' value='uppercase' />
        <Picker.Item label='Capitalised' value='capitalized' />
        <Picker.Item label='Sentence' value='sentence' />
        <Picker.Item label='rANdoM' value='random' />
      </Picker>
      <TouchableOpacity
        onPress={copyToClipboard}
      >
        <Text>Copy to Clipboard</Text>
      </TouchableOpacity>
      <StatusBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
