import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { AppRegistry, TextInput } from 'react-native';
import { Button, TouchableOpacity } from 'react-native';
import { Alert, ScrollView, Image} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Video from 'react-native-video'

export default class Home extends Component<Props> {
	static navigationOptions = {
		headerTitle: 'Main Screen',
		headerLeft: null
	}
	
	
	
	render() {
		return (
				<TouchableOpacity 
					onPress = {() => this.props.navigation.navigate('main')}
					style={styles.TouchableStyle}
				>
					<Image 
						style={styles.ImageStyle}
						source={require('../images/Doremon.jpg')}
					>
					</Image>
					<Text style={styles.MovieTitle}> Doremon: The Hidden Land </Text>
				</TouchableOpacity>
		);
	}
}
const styles = StyleSheet.create({
	ScrollViewStyle: {
		width: '100%', 
		height: '100%',
	},
	TouchableStyle: {
		width: '100%',
		height: '50%',
		backgroundColor: '#f2f2f2',
		alignItems: 'center',
		justifyContent: 'center',
	},
	ImageStyle: {
		width: '100%',
		height: '80%',
	},
	MovieTitle: {
		fontSize: 20,
		color: 'black',
		marginTop: 15,
	},
	buttonText: {
		color: 'white',
		fontSize: 19,
	},
	
});