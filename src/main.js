import { registerRootComponent } from 'expo';
import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import App from './App';

class Main extends React.Component {
  
  render() {
    return (
      <AppearanceProvider>
        <App/>
      </AppearanceProvider>
    );
  }
}

registerRootComponent(Main);
