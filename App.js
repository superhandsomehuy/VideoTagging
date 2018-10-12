/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { AppRegistry, TextInput } from 'react-native';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from './src/login'
import Register from './src/register'
import Main from './src/Main'
import Home from './src/Home'

const navigationAction = StackNavigator({
	Home: {
		screen: Login,
	},
	register: {
		screen: Register,
	},
	home: {
		screen: Home,
	},
	main: {
		screen: Main,
	}
})
export default navigationAction

/*type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
		
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});*/
