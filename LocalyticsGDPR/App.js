import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  componentWillMount() {

    //make a server call here to get opt out status
    var optOutStatus = false;
    Localytics.setPrivacyOptedOut(optOutStatus);
    
    //if setting customer Id, use the following:
    //Localytics.setCustomerIdWithPrivacyOptedOut("id123", optOutStatus);

    Localytics.pauseDataUploading(false);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
