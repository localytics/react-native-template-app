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
  NativeEventEmitter,
  NativeAppEventEmitter
} from 'react-native';

import LLLocalytics from 'localytics-react-native';
require('./common.js')();

console.log(LLLocalytics);
console.log(NativeModules);

const notificationSettings = (enabled) => {
  NativeModules.LLLocalytics.openSession();
  NativeModules.LLLocalytics.tagScreen("misc");
  console.log("Notification Settings should now be set to :", enabled);
  NativeModules.LLLocalytics.didRegisterUserNotificationSettings();
  NativeModules.LLLocalytics.tagScreen("notificationSettings");
  NativeModules.LLLocalytics.closeSession();
  NativeModules.LLLocalytics.upload();
};

const inAppDismissButton = () => {
  NativeModules.LLLocalytics.setInAppMessageDismissButtonImageWithName("748-heart.png");
};

const setPlacesMessageConfiguration = () => {
  // based on UILocalNotification
  var config = {
    "alertAction": "Tap Here",
    "alertTitle": "Places Test (Local)",
    "hasAction": true,
    /*"alertLaunchImage": "custom_image", // Must be in app's Bundle */
    /*"category": "some_category", */
    /*"soundName": "alert.mp3", // Must be in app's Bundle */
    /*"shouldShow": false, // global suppression */
    /*"diy": true, // DIY (manually handle display and impression tagging) */
    "diy": true, // DIY (manually handle display and impression tagging)
    "applicationIconBadgeNumber": 5
  };
  NativeModules.LLLocalytics.setPlacesMessageConfiguration({"config": config});
};

const setPlacesMessageConfigurationForUserNotifications = () => {
  // based on UNMutableNotificationContent
  var config = {
    "title": "Places Test",
    "subtitle": "Places Test Subtitle",
    /*"launchImageName": "custom_image", // Must be in app's Bundle */
    /*"sound": "alert.mp3", // Must be in app's Bundle */
    /*"shouldShow": false, // global suppression */
    /*"diy": true, // DIY (manually handle display and impression tagging) */
    "badge": "10"
  };
  NativeModules.LLLocalytics.setPlacesMessageConfiguration({"config": config});
};

export default class LocalyticsReactTest extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
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
        <Button onPress={setInAppAdIdParameterEnabled.bind(this, true)} title="Set In-App Ad ID Param Enabled -> Yes"/>
        <Button onPress={setInAppAdIdParameterEnabled.bind(this, false)} title="Set In-App Ad ID Param Enabled -> No"/>
        <Button onPress={isInAppAdIdParameterEnabled} title="Is In-App Ad ID Param Enabled"/>
        <Button onPress={setInAppMessageConfiguration} title="Set In-App Message Configuration"/>

        <Text style={styles.welcome}>
          Inbox:
        </Text>
        <Button onPress={setInboxAdIdParameterEnabled.bind(this, true)} title="Set In-App Ad ID Param Enabled -> Yes"/>
        <Button onPress={setInboxAdIdParameterEnabled.bind(this, false)} title="Set In-App Ad ID Param Enabled -> No"/>
        <Button onPress={isInboxAdIdParameterEnabled} title="Is In-App Ad ID Param Enabled"/>
        <Button onPress={tagInAppImpression} title="Tag In-App Impression"/>
        <Button onPress={getInboxCampaigns} title="Get Inbox Campaigns"/>
        <Button onPress={getAllInboxCampaigns} title="Get All Inbox Campaigns"/>
        <Button onPress={refreshInboxCampaigns} title="Refresh Inbox Campaigns"/>
        <Button onPress={refreshAllInboxCampaigns} title="Refresh All Inbox Campaigns"/>
        <Button onPress={setInboxCampaignRead.bind(this, true)} title="Set Inbox Campaign As Read -> Read"/>
        <Button onPress={setInboxCampaignRead.bind(this, false)} title="Set Inbox Campaign As Read -> Unread"/>
        <Button onPress={getInboxCampaignsUnreadCount} title="Get Inbox Campaigns Unread Count"/>
        <Button onPress={tagInboxImpression} title="Tag Inbox Impression"/>
        <Button onPress={triggerPlacesNotification} title="Trigger Places Notification"/>
        <Button onPress={tagPlacesPushReceived} title="Tag Places Push Received"/>
        <Button onPress={tagPlacesPushOpened} title="Tag Places Push Opened"/>
        <Button onPress={setPlacesMessageConfiguration} title="Set Places Message Configuration"/>
        <Button onPress={setPlacesMessageConfigurationForUserNotifications} title="Set Places Message Configuration (UserNotifications)"/>
        <Button onPress={setMessagingEventsEnabled} title="Set Messaging Events Enabled"/>
        <Text style={styles.welcome}>
          Location:
        </Text>
        <Button onPress={setLocationMonitoringEnabled.bind(this, true)} title="Set Location Monitoring Enabled -> true"/>
        <Button onPress={setLocationMonitoringEnabled.bind(this, false)} title="Set Location Monitoring Enabled -> false"/>
        <Button onPress={getGeofencesToMonitor} title="Get Geofences To Monitor"/>
        <Button onPress={triggerRegions} title="Trigger Regions"/>
        <Button onPress={setLocationEventsEnabled} title="Set Location Events Enabled"/>
        <Text style={styles.welcome}>
          Logging:
        </Text>
        <Button onPress={isLoggingEnabled} title="Is Logging Enabled"/>
        <Button onPress={setLoggingEnabled.bind(this, true)} title="Set Logging Enabled -> true"/>
        <Button onPress={setLoggingEnabled.bind(this, false)} title="Set Logging Enabled -> false"/>
        <Button onPress={redirectLoggingToDisk} title="Redirect Logging to Disk"/>
        <Text style={styles.welcome}>
          Developer Options:
        </Text>
        <Button onPress={getInstallId} title="Get Install ID"/>
        <Button onPress={getAppKey} title="Get App Key"/>
        <Button onPress={getLibraryVersion} title="Get Library Version"/>
        <Button onPress={isTestModeEnabled} title="Is Test Mode Enabled"/>
        <Button onPress={setTestModeEnabled.bind(this, true)} title="Set Test Mode Enabled"/>
        <Button onPress={setTestModeEnabled.bind(this, false)} title="Set Test Mode Disabled"/>


        <Text style={styles.welcome}>
          Validators:
        </Text>
        <Button onPress={pushValidators} title="Push Validators"/>
        <Button onPress={notificationSettings.bind(this, false)} title="Notification Disabled"/>
        <Button onPress={notificationSettings.bind(this, true)} title="Notification Enabled"/>
        <Button onPress={sessionTimeoutValidators} title="Session Timeout"/>
        <Button onPress={analyticsEventValidators} title="Analytics Events"/>
        <Text style={styles.welcome}>
          Spacer.....
        </Text>
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
    marginTop: 10
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
