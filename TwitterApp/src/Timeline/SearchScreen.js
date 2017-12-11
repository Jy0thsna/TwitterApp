import React from 'react';
import {Text, View, TextInput, Item} from 'react-native';

export default class SearchScreen extends React.Component {
	
	render() {
		return(
		<View>
			<TextInput
				style={{marginTop: 20}}
				placeholder="Search Twitter"
			/>
		</View>
		);
	}
}