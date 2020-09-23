import { registerRootComponent } from 'expo';
import React from 'react';
import { View } from 'react-native';
import App from './App';

class Main extends React.Component {
  render() {
    return <App/>;
  }
}

registerRootComponent(Main);
