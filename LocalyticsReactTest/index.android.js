/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  NativeModules,
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  Button,
  NativeAppEventEmitter,
  PermissionsAndroid
} from 'react-native';

import LLLocalytics from 'localytics-react-native';
require('./common.js')();

const registerPush = () => {
  LLLocalytics.registerPush({"senderId": "SENDER_ID"});
};

const setPushRegistrationId = () => {
  LLLocalytics.setPushRegistrationId({"registrationId": "test_reg_id"});
};

const getPushRegistrationId = () => {
  LLLocalytics.getPushRegistrationId((value) => console.log("push registration id: " + value));
};

const setNotificationsDisabled = (disabled) => {
  LLLocalytics.setNotificationsDisabled({"disabled": disabled});
};

const areNotificationsDisabled = () => {
  LLLocalytics.areNotificationsDisabled((value) => console.log("notifications disabled: " + value));
};

const setPushMessageConfiguration = () => {
  var config = {
    "category": "social", // from android.app.Notification.CATEGORY_SOCIAL
    "color": -16711936, // from android.graphics.Color.GREEN
    "contentInfo": "LLP",
    "contentTitle": "Push Test",
    "defaults": ["sound", "lights"], // valid values: "all" or combination of "sound", "lights", "vibrate"
    /*"sound": "android.resource://com.localyticsreacttest/notif.mp3", // sound URI. ignored if "sound" used in defaults */
    /*"vibrate": [0, 100, 200, 300], // vibration pattern. ignored if "vibrate" used in defaults */
    /*"shouldShow": false, // global suppression */
    "priority": 0 // from android.support.v4.app.NotificationCompat.PRIORITY_DEFAULT
  };
  LLLocalytics.setPushMessageConfiguration({"config": config});
};

const setPlacesMessageConfiguration = () => {
  var config = {
    "category": "promo", // from android.app.Notification.CATEGORY_PROMO
    "color": -16776961, // from android.graphics.Color.BLUE
    "contentInfo": "LLPl",
    "contentTitle": "Places Test",
    "defaults": ["all"], // valid values: "all" or combination of "sound", "lights", "vibrate"
    /*"sound": "android.resource://com.localyticsreacttest/notif.mp3", // sound URI. ignored if "sound" used in defaults */
    /*"vibrate": [0, 100, 200, 300], // vibration pattern. ignored if "vibrate" used in defaults */
    /*"shouldShow": false, // global suppression */
    "diy": true, // DIY (manually handle display and impression tagging)
    "priority": 1 // from android.support.v4.app.NotificationCompat.PRIORITY_HIGH
  };
  LLLocalytics.setPlacesMessageConfiguration({"config": config});
};

async function requestCameraPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        'title': 'Location Permission',
        'message': 'Your location is needed for Places'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use location")
    } else {
      console.log("Location permission denied")
    }
  } catch (err) {
    console.warn(err)
  }
}

const getFineLocationPermission = () => {
  requestCameraPermission();
};

const getGeofencesToMonitor = () => {
  LLLocalytics.getGeofencesToMonitor({"latitude": 42.3601, "longitude": -71.0589}, (value) => console.log("geofences to monitor: " + JSON.stringify(value)));
};

export default class LocalyticsReactTest extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Text style={styles.welcome}>
          Integration:
        </Text>
        <Button onPress={upload} title="Upload"/>
        <Button onPress={openSession} title="Open Session"/>
        <Button onPress={closeSession} title="Close Session"/>
        <Text style={styles.welcome}>
          Analytics:
        </Text>
        <Button onPress={setOptedOut.bind(this, true)} title="Set Opted Out -> true"/>
        <Button onPress={setOptedOut.bind(this, false)} title="Set Opted Out -> false"/>
        <Button onPress={isOptedOut} title="Is Opted Out"/>
        <Button onPress={tagEvent} title="Tag Event"/>
        <Button onPress={tagScreen} title="Tag Screen"/>
        <Button onPress={setCustomDimension} title="Set Custom Dimension"/>
        <Button onPress={getCustomDimension} title="Get Custom Dimension"/>
        <Button onPress={setAnalyticsEventsEnabled} title="Set Analytics Events Enabled"/>
        <Text style={styles.welcome}>
          User Information:
        </Text>
        <Button onPress={setIdentifier} title="Set Identifier"/>
        <Button onPress={getIdentifier} title="Get Identifier"/>
        <Button onPress={setCustomerId} title="Set Customer ID"/>
        <Button onPress={getCustomerId} title="Get Customer ID"/>
        <Button onPress={setLocation} title="Set Location"/>
        <Text style={styles.welcome}>
          Profiles:
        </Text>
        <Button onPress={setProfileAttribute} title="Set Profile Attribute"/>
        <Button onPress={addProfileAttributesToSet} title="Add Profile Attributes To Set"/>
        <Button onPress={removeProfileAttributesFromSet} title="Remove Profile Attributes From Set"/>
        <Button onPress={incrementProfileAttribute} title="Increment Profile Attribute"/>
        <Button onPress={decrementProfileAttribute} title="Decrement Profile Attribute"/>
        <Button onPress={deleteProfileAttribute} title="Delete Profile Attribute"/>
        <Button onPress={setCustomer} title="Set Customer"/>
        <Text style={styles.welcome}>
          Messaging:
        </Text>
        <Button onPress={triggerInAppMessage} title="Trigger In-App Message"/>
        <Button onPress={triggerInAppMessagesForSessionStart} title="Trigger In-App Messages For Session Start"/>
        <Button onPress={dismissCurrentInAppMessage} title="Dismiss Current In-App Message"/>
        <Button onPress={setInAppMessageDismissButtonLocation.bind(this, "right")} title="Set In-App Button Location -> Right"/>
        <Button onPress={setInAppMessageDismissButtonLocation.bind(this, "left")} title="Set In-App Button Location -> Left"/>
        <Button onPress={getInAppMessageDismissButtonLocation} title="Get In-App Message Button Location"/>
        <Button onPress={setInAppMessageDismissButtonHidden.bind(this, true)} title="Set In-App Button Hidden -> Yes"/>
        <Button onPress={setInAppMessageDismissButtonHidden.bind(this, false)} title="Set In-App Button Hidden -> No"/>
        <Button onPress={setInAppMessageConfiguration} title="Set In-App Message Configuration"/>
        <Button onPress={tagInAppImpression} title="Tag In-App Impression"/>
        <Button onPress={registerPush} title="Register Push"/>
        <Button onPress={setPushRegistrationId} title="Set Push Registration ID"/>
        <Button onPress={getPushRegistrationId} title="Get Push Registration ID"/>
        <Button onPress={setNotificationsDisabled.bind(this, true)} title="Set Notifications Disabled -> true"/>
        <Button onPress={setNotificationsDisabled.bind(this, false)} title="Set Notifications Disabled -> false"/>
        <Button onPress={areNotificationsDisabled} title="Are Notifications Disabled"/>
        <Button onPress={setPushMessageConfiguration} title="Set Push Message Configuration"/>
        <Button onPress={getInboxCampaigns} title="Get Inbox Campaigns"/>
        <Button onPress={refreshInboxCampaigns} title="Refresh Inbox Campaigns"/>
        <Button onPress={setInboxCampaignRead.bind(this, true)} title="Set Inbox Campaign As Read -> Read"/>
        <Button onPress={setInboxCampaignRead.bind(this, false)} title="Set Inbox Campaign As Read -> Unread"/>
        <Button onPress={getInboxCampaignsUnreadCount} title="Get Inbox Campaigns Unread Count"/>
        <Button onPress={tagInboxImpression} title="Tag Inbox Impression"/>
        <Button onPress={triggerPlacesNotification} title="Trigger Places Notification"/>
        <Button onPress={tagPlacesPushReceived} title="Tag Places Push Received"/>
        <Button onPress={tagPlacesPushOpened} title="Tag Places Push Opened"/>
        <Button onPress={setPlacesMessageConfiguration} title="Set Places Message Configuration"/>
        <Button onPress={setMessagingEventsEnabled} title="Set Messaging Events Enabled"/>
        <Text style={styles.welcome}>
          Location:
        </Text>
        <Button onPress={getFineLocationPermission} title="Get Fine Location Permission (API 23+)"/>
        <Button onPress={setLocationMonitoringEnabled.bind(this, true)} title="Set Location Monitoring Enabled -> true"/>
        <Button onPress={setLocationMonitoringEnabled.bind(this, false)} title="Set Location Monitoring Enabled -> false"/>
        <Button onPress={getGeofencesToMonitor} title="Get Geofences To Monitor"/>
        <Button onPress={triggerRegions} title="Trigger Regions"/>
        <Button onPress={setLocationEventsEnabled} title="Set Location Events Enabled"/>
        <Text style={styles.welcome}>
          Developer Options:
        </Text>
        <Button onPress={setLoggingEnabled.bind(this, true)} title="Set Logging Enabled -> true"/>
        <Button onPress={setLoggingEnabled.bind(this, false)} title="Set Logging Enabled -> false"/>
        <Button onPress={isLoggingEnabled} title="Is Logging Enabled"/>
        <Button onPress={getInstallId} title="Get Install ID"/>
        <Button onPress={getAppKey} title="Get App Key"/>
        <Button onPress={getLibraryVersion} title="Get Library Version"/>
        <Button onPress={setTestModeEnabled.bind(this, true)} title="Set Test Mode Enabled"/>
        <Button onPress={isTestModeEnabled} title="Is Test Mode Enabled"/>
      </ScrollView>
    );
  }

  componentDidMount() {
    // Analytics Events
    const sessionWillOpen = NativeAppEventEmitter.addListener("localyticsSessionWillOpen", (params) => console.log("session will open: " + JSON.stringify(params)));
    const sessionDidOpen = NativeAppEventEmitter.addListener("localyticsSessionDidOpen", (params) => console.log("session did open: " + JSON.stringify(params)));
    const sessionWillClose = NativeAppEventEmitter.addListener("localyticsSessionWillClose", (params) => console.log("session will close"));
    const didTagEvent = NativeAppEventEmitter.addListener("localyticsDidTagEvent", (params) => console.log("did tag event: " + JSON.stringify(params)));

    // In-App Events
    const shouldDelaySessionStartInApp = NativeAppEventEmitter.addListener("localyticsShouldDelaySessionStartInAppMessages", (params) => console.log("should delay session start in-app: " + JSON.stringify(params)));
    const shouldShowInApp = NativeAppEventEmitter.addListener("localyticsShouldShowInAppMessage", (params) => console.log("should show in-app: " + JSON.stringify(params)));
    const diyInApp = NativeAppEventEmitter.addListener("localyticsDiyInAppMessage", (params) => console.log("DIY in-app: " + JSON.stringify(params)));
    const willDisplayInApp = NativeAppEventEmitter.addListener("localyticsWillDisplayInAppMessage", (params) => console.log("will display in-app: " + JSON.stringify(params)));
    const didDisplayInApp = NativeAppEventEmitter.addListener("localyticsDidDisplayInAppMessage", () => console.log("did display in-app"));
    const willDismissInApp = NativeAppEventEmitter.addListener("localyticsWillDismissInAppMessage", () => console.log("will dismiss in-app"));
    const didDismissInApp = NativeAppEventEmitter.addListener("localyticsDidDismissInAppMessage", () => console.log("did dismiss in-app"));

    // Push Events
    const shouldShowPush = NativeAppEventEmitter.addListener("localyticsShouldShowPushNotification", (params) => console.log("should show push: " + JSON.stringify(params)));
    const willShowPush = NativeAppEventEmitter.addListener("localyticsWillShowPushNotification", (params) => console.log("will show push: " + JSON.stringify(params)));

    // Places Events
    const shouldShowPlaces = NativeAppEventEmitter.addListener("localyticsShouldShowPlacesPushNotification", (params) => console.log("should show places: " + JSON.stringify(params)));
    const willShowPlaces = NativeAppEventEmitter.addListener("localyticsWillShowPlacesPushNotification", (params) => console.log("will show places: " + JSON.stringify(params)));
    const diyPlaces = NativeAppEventEmitter.addListener("localyticsDiyPlacesPushNotification", (params) => console.log("DIY places: " + JSON.stringify(params)));

    // Location Events
    const didUpdateLocation = NativeAppEventEmitter.addListener("localyticsDidUpdateLocation", (params) => console.log("did update location: " + JSON.stringify(params)));
    const didTriggerRegions = NativeAppEventEmitter.addListener("localyticsDidTriggerRegions", (params) => console.log("did trigger regions: " + JSON.stringify(params)));
    const didUpdateMonitoredGeofences = NativeAppEventEmitter.addListener("localyticsDidUpdateMonitoredGeofences", (params) => console.log("did update monitored geofences: " + JSON.stringify(params)));
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

AppRegistry.registerComponent('LocalyticsReactTest', () => LocalyticsReactTest);
