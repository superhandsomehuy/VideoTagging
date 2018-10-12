import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { AppRegistry, TextInput } from 'react-native';
import { Button, TouchableOpacity } from 'react-native';
import { Alert, ScrollView} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Video from 'react-native-video'

export default class Main extends Component<Props> {
	static navigationOptions = {
		headerTitle: 'Doremon The Hidden Play',
	}
	constructor(props) {
		super(props)
		this.state = {
		  pauseVideo: false,
		  isFullscreenMode: false,
		}
    }
	
	PlayOrPause = () => {
		this.setState ((isPause) => ({
			pauseVideo: !isPause.pauseVideo 
		}));
	}
	FullScreenMode = () => {
		this.setState ((isFullscreen) => ({
			isFullscreenMode: !isFullscreen.isFullscreenMode 
		}));
	}
	
	
	render() {
		return (
			<View style={styles.ParentView}>
				<Video
					source={{uri: "https://www.radiantmediaplayer.com/media/bbb-360p.mp4"}}
					//source = {require ('../videos/Doremon.mp4')}
					ref={(ref) => {
						this.player = ref
				    }} 
					style={
                        this.state.isFullscreenMode
                            ? styles.FullscreenMode
                            : styles.normalMode
                    }
					paused={this.state.pauseVideo}
			  	    onLoad={() => {
				    	this.setState({
							pauseVideo: true
						});
					}}
				>
				</Video>
				<ScrollView style={{width: '100%', height: '50%'}}>
					<Text style={styles.Title}>
						Doremon The Hidden Land
					</Text>
					<Text style={styles.Content}>
						Year Publish: 1995
					</Text>
					<Text style={styles.Content}>
						It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'
					</Text>
				</ScrollView>
				<TouchableOpacity
					style={styles.BtnPlay}
					onPress={this.PlayOrPause}>
					<Text style={styles.buttonText}>PLAY</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.BtnFullSCreen}
					onPress={this.FullScreenMode}>
					<Text style={styles.buttonText}>FULLSCREEN</Text>
				</TouchableOpacity>				
			</View>
		);
	}
}
const styles = StyleSheet.create({
	ParentView: {
		flex: 1,
		backgroundColor: 'white',
	},
	Title: {
		color: 'black',
		fontSize: 19,
		marginLeft: 5,
		marginBottom: 15,
	},
	Content: {
		color: 'black',
		fontSize: 16,
		marginLeft: 5,
		marginBottom: 7,
	},
	normalMode: {
		width: '100%',
		height: '50%',
		backgroundColor: 'black',
	},
	FullscreenMode: {
		width: '100%',
		height: '100%',
		backgroundColor: 'black',
	},
	BtnPlay: {
		width: '50%',
		height: 45,
		backgroundColor: '#00cca3',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute', 
		left: 0,
		bottom: 0,
	},
	BtnFullSCreen: {
		width: '50%',
		height: 45,
		backgroundColor: '#00ccff',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 15,
		position: 'absolute', 
		right: 0, 
		bottom: 0,
	},
	buttonText: {
		color: 'white',
		fontSize: 19,
	}
});