import React, { Component } from 'react';
import {
	Platform,
	View,
  StyleSheet,
  Text,
  TouchableHighlight,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from 'react-native';

export default class Item extends Component {
	render() {
		return (
			<TouchableOpacity
				underlayColor={'#eee'}
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: 'red',
					borderBottomWidth: 1,
					borderColor: '#eee',
					margin: 10,
					width: 50,
					height: 50,
				}}
				onPress={()=> console.log('this.props.data.text ', this.props.data.text)}
				{...this.props.sortHandlers}
			>
				<Text>{this.props.data.text}</Text>
			</TouchableOpacity>
		)
	}
}