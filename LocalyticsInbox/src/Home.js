import React from 'react';
import {View, Button} from 'react-native';

export default class Home extends React.Component {
	static navigationOptions = { title: 'Home' };

	render() {
		const { navigate } = this.props.navigation;
		return ( 
			<View>
				<Button 
					onPress={() => navigate('InboxListView')}
					title='Go To Inbox'
				/>
			</View>
		);
	}
}
