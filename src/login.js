import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { AppRegistry, TextInput, Image } from 'react-native';
import { Button, TouchableOpacity } from 'react-native';
import { Alert} from 'react-native';
import { StackNavigator } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class Login extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			UsernameState: '',
			PasswordState: ''
		}
	}
	/*static navigationOptions = {
		headerTitle: 'Login Screen',
	}*/
	SignInClick(username, pass) {
		fetch('https://manhhuyvo.000webhostapp.com/signin.php?username='+username+'&&password='+pass+'')
		.then ((response) => response.json())
		.then ((responseJson) => {
			if(JSON.stringify(responseJson) === '"Log in Successfully"')
			{
				Alert.alert(JSON.stringify(responseJson));
				this.props.navigation.navigate("home");
			} else {
				Alert.alert("Wrong!");
			}
		})
		.catch ((error) => {
			console.error(error);
		});
	}
	render() {
		return (
			<View style={styles.container}>
				<Image
					source={require('../images/logo1.png')}
					style={styles.logoStyle}
				>
				</Image>
				<View style={styles.formStyle}>
						<Text style={styles.labels}>
							Username
						</Text>
						<TextInput style={styles.inputStyle}
							onChangeText={(text) => this.setState({UsernameState: text})}
						>
						</TextInput>
						<Text style={styles.labels}>
							Password
						</Text>
						<TextInput style={styles.inputStyle}
							secureTextEntry={true}
							onChangeText={(text) => this.setState({PasswordState: text})}
						>
						</TextInput>
						<TouchableOpacity					
							style={styles.SignInStyle}
							onPress = {() => this.SignInClick(this.state.UsernameState, this.state.PasswordState)}
						>
							<Text style={styles.buttonText}>SIGN IN</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							onPress = {() => this.props.navigation.navigate('register')}
							style={styles.RegisterStyle}
						>
							<Text style={styles.buttonText}>REGISTER</Text>
						</TouchableOpacity>							
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//borderWidth: 2,
		//borderColor: 'red',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	logoStyle: {
		width: '40%',
		height: 130,
		marginTop: 30,
		marginBottom: 30,
	},
	title: {
		textAlign: 'center',
		fontSize: 40,
		fontWeight: 'bold',
		marginBottom: 30,
	},
	formStyle: {
		width: '65%',
		backgroundColor: 'white',
		//borderColor: 'green',
		//borderWidth: 1,
		height: 300,
		paddingLeft: 10,
	},
	inputStyle: {
		borderColor: 'grey',
		borderWidth: 1,
		width: '100%',
		paddingLeft: 10,
		height: 37,
		marginTop: 5,
		marginBottom: 7,
		borderRadius: 5,
	},
	labels: {
		fontSize: 17,
		marginTop: 5,
		width: '40%',
	},
	SignInStyle: {
		width: '100%',
		height: 45,
		backgroundColor: '#00cca3',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 22,
	},
	RegisterStyle: {
		width: '100%',
		height: 45,
		backgroundColor: '#00ccff',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 15,
	},
	buttonText: {
		color: 'white',
		fontSize: 19,
	}
});
/*export default class Login extends Component<Props> {
	constructor(props) { //this is the constructor
		super(props);
		this.state = { text: 'Useless Placeholder' };
	}
	static navigationOptions = {
		headerTitle: 'Login Screen',
	}
	buttonClick() {
		//Alert.alert("You clicked this button!");
		
	}
	render() { //this is the main method
		return (
			<View style={styles.container}>
				<View style={styles.formStyle}>
					<Text style={styles.textStyle}>
						Welcome Huy!
					</Text>
					<View style={styles.buttonStyle}>
						<Button 
							onPress={() => this.props.navigation.navigate('main')}
							title='Click Here'
							color='green'
						/>
					</View>
					<Text style={styles.textStyle}>
						See you Huy!
					</Text>
				</View>
			</View>
		);
	}
}
//Create a stylesheet and put the styles in there
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
	borderColor: 'red',
	borderWidth: 5,
  },
  buttonStyle: {
	  width: '80%',
	  margin: 10,
  },
  textStyle: {
	color: 'red',
	fontSize: 20,
  },
  formStyle: {
	width: '80%',
	justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
	borderColor: 'green',
	borderWidth: 1,
	height: '80%',
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