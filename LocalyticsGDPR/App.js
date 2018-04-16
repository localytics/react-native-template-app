import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LLLocalytics from 'localytics-react-native';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={signInTapped} title="Sign in"/>
        <Button onPress={optInTapped} title="Opt-in data collection"/>
        <Button onPress={optOutTapped} title="Opt-out data collection"/>
        <Button onPress={signOutTapped} title="Sign out"/>
      </View>
    );
  }
}

const optInTapped = () => {
  //TODO update your server with the latest opt-out status of this user
  LLLocalytics.setPrivacyOptedOut(false);
};

const optOutTapped = () => {
  //TODO update your server with the latest opt-out status of this user
  LLLocalytics.setPrivacyOptedOut(true);

  //Ensure you're not sending Places notifications to users who have opted out of tracking (requires Places implementation)
  //LLLocalytics.setLocationMonitoringEnabled(!optOutStatus);
};

const signInTapped = () => {
  //TODO Make a server call to authenticate the user and fetch their customerId
  //and opt-out status
  var optedOut = false;
  var customerId = "id123";
  LLLocalytics.setCustomerIdWithPrivacyOptedOut(customerId, optedOut);

  //You've set the opted out flag to the proper value, you can now safely turn on uploads
  LLLocalytics.pauseDataUploading(false);

  //Ensure you're not sending Places notifications to users who have opted out
  //of tracking (this requires Places implementation)
  //LLLocalytics.setLocationMonitoringEnabled(!optedOut);
};

const signOutTapped = () => {
  LLLocalytics.setCustomerIdWithPrivacyOptedOut("", false);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
