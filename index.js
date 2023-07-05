import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { Provider } from 'react-redux';
import { name as appName } from './app.json';
import store from './final/src/redux/store';
import App1 from './App';



AppRegistry.registerComponent(appName, () => App);
