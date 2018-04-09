import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LLLocalytics from 'localytics-react-native';

export default class App extends React.Component {

  componentWillMount() {

    var optOutStatus = false;
    //make server call to get opt out status and, if applicable, authenticate the user

    //if setting customer Id, use the following:
    LLLocalytics.setCustomerIdWithPrivacyOptedOut("id123", optOutStatus);
    //if not setting customer Id, use the following:
    //Localytics.setPrivacyOptedOut(optOutStatus);

    //you've set the opted out flag to the proper value, you can now safely turn on uploads
    LLLocalytics.pauseDataUploading(false);

    //ensure you're not sending Places notifications to users who have opted out of tracking (requires Places implementation)
    //LLLocalytics.setLocationMonitoringEnabled(!optOutStatus);
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
