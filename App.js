/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeView from './views/HomeView'
import HomeScreen from './views/HomeScreen'

export default createStackNavigator({
  Home : {
    screen : HomeScreen
  }
});
