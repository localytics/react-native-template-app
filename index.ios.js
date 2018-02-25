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
  NativeAppEventEmitter
} from 'react-native';

const upload = () => {
  NativeModules.LLLocalytics.upload();
};

const openSession = () => {
  NativeModules.LLLocalytics.openSession();
};

const closeSession = () => {
  NativeModules.LLLocalytics.closeSession();
};

const setOptedOut = (optedOut) => {
  NativeModules.LLLocalytics.setOptedOut(optedOut);
};

const isOptedOut = () => {
  NativeModules.LLLocalytics.isOptedOut().then((optedOut) => console.log("opted out: " + optedOut));
};

const tagEvent = () => {
  var attrs = {"string_key": "hello", "int_key": 5, "double_key": 3.14};
  var customer = {"customerId": "test", "firstName": "test", "lastName": "test", "fullName": "test", "emailAddress": "test"};
  var customer2 = {"customerId": "test2", "firstName": "test2", "lastName": "test2", "fullName": "test2", "emailAddress": "test2"};

  // Normal event tags ("name" is required)
  NativeModules.LLLocalytics.tagEvent({"name": "test"});
  NativeModules.LLLocalytics.tagEvent({"name": "test", "attributes": attrs});
  NativeModules.LLLocalytics.tagEvent({"name": "test", "attributes": attrs, "customerValueIncrease": 5});

  // Standard event tags
  NativeModules.LLLocalytics.tagPurchased({"itemName": "test", "itemId": "test", "itemType": "test", "itemPrice": 10, "attributes": attrs});
  NativeModules.LLLocalytics.tagAddedToCart({"itemName": "test", "itemId": "test", "itemType": "test", "itemPrice": 10, "attributes": attrs});
  NativeModules.LLLocalytics.tagStartedCheckout({"totalPrice": 20, "itemCount": 21, "attributes": attrs});
  NativeModules.LLLocalytics.tagCompletedCheckout({"totalPrice": 20, "itemCount": 21, "attributes": attrs});
  NativeModules.LLLocalytics.tagContentViewed({"contentName": "test", "contentId": "test", "contentType": "test", "attributes": attrs});
  NativeModules.LLLocalytics.tagSearched({"queryText": "test", "contentType": "test", "resultCount": 11, "attributes": attrs});
  NativeModules.LLLocalytics.tagShared({"contentName": "test", "contentId": "test", "contentType": "test", "methodName": "test", "attributes": attrs});
  NativeModules.LLLocalytics.tagCustomerRegistered({"customer": customer, "methodName": "test", "attributes": attrs});
  NativeModules.LLLocalytics.tagCustomerLoggedOut({"attributes": attrs});
  NativeModules.LLLocalytics.tagContentRated({"contentName": "test", "contentId": "test", "contentType": "test", "rating": 9, "attributes": attrs});
  NativeModules.LLLocalytics.tagCustomerLoggedIn({"customer": customer2, "methodName": "test", "attributes": attrs});
  NativeModules.LLLocalytics.tagInvited({"methodName": "test", "attributes": attrs});
};

const tagScreen = () => {
  NativeModules.LLLocalytics.tagScreen("test");
};

const setCustomDimension = () => {
  NativeModules.LLLocalytics.setCustomDimension({"dimension": 0, "value": "test"});
};

const getCustomDimension = () => {
  NativeModules.LLLocalytics.getCustomDimension(0).then((value) => console.log("custom dimension 0: " + value));
};

const setAnalyticsEventsEnabled = () => {
  NativeModules.LLLocalytics.setAnalyticsEventsEnabled(true);
};

const setProfileAttribute = () => {
  NativeModules.LLLocalytics.setProfileAttribute({"name": "string", "value": "test", "scope": "app"});
  NativeModules.LLLocalytics.setProfileAttribute({"name": "string", "value": "test", "scope": "org"});
  NativeModules.LLLocalytics.setProfileAttribute({"name": "string_arr", "value": ["test", "ing"], "scope": "app"});
  NativeModules.LLLocalytics.setProfileAttribute({"name": "string_arr", "value": ["test", "ing"], "scope": "org"});
  NativeModules.LLLocalytics.setProfileAttribute({"name": "number", "value": 5, "scope": "app"});
  NativeModules.LLLocalytics.setProfileAttribute({"name": "number", "value": 5, "scope": "org"});
  NativeModules.LLLocalytics.setProfileAttribute({"name": "number_arr", "value": [5, 6], "scope": "app"});
  NativeModules.LLLocalytics.setProfileAttribute({"name": "number_arr", "value": [5, 6], "scope": "org"});
  NativeModules.LLLocalytics.setProfileAttribute({"name": "date", "value": "2017-06-20", "scope": "app"});
  NativeModules.LLLocalytics.setProfileAttribute({"name": "date", "value": "2017-06-20", "scope": "org"});
  NativeModules.LLLocalytics.setProfileAttribute({"name": "date_arr", "value": ["2017-06-20", "2017-07-20"], "scope": "app"});
  NativeModules.LLLocalytics.setProfileAttribute({"name": "date_arr", "value": ["2017-06-20", "2017-07-20"], "scope": "org"});
};

const addProfileAttributesToSet = () => {
  NativeModules.LLLocalytics.addProfileAttributesToSet({"name": "string_arr", "values": ["test", "ing"], "scope": "app"});
  NativeModules.LLLocalytics.addProfileAttributesToSet({"name": "string_arr", "values": ["test", "ing"], "scope": "org"});
  NativeModules.LLLocalytics.addProfileAttributesToSet({"name": "number_arr", "values": [5, 6], "scope": "app"});
  NativeModules.LLLocalytics.addProfileAttributesToSet({"name": "number_arr", "values": [5, 6], "scope": "org"});
  NativeModules.LLLocalytics.addProfileAttributesToSet({"name": "date_arr", "values": ["2017-06-20", "2017-07-20"], "scope": "app"});
  NativeModules.LLLocalytics.addProfileAttributesToSet({"name": "date_arr", "values": ["2017-06-20", "2017-07-20"], "scope": "org"});
};

const removeProfileAttributesFromSet = () => {
  NativeModules.LLLocalytics.removeProfileAttributesFromSet({"name": "string_arr", "values": ["test", "ing"], "scope": "app"});
  NativeModules.LLLocalytics.removeProfileAttributesFromSet({"name": "string_arr", "values": ["test", "ing"], "scope": "org"});
  NativeModules.LLLocalytics.removeProfileAttributesFromSet({"name": "number_arr", "values": [5, 6], "scope": "app"});
  NativeModules.LLLocalytics.removeProfileAttributesFromSet({"name": "number_arr", "values": [5, 6], "scope": "org"});
  NativeModules.LLLocalytics.removeProfileAttributesFromSet({"name": "date_arr", "values": ["2017-06-20", "2017-07-20"], "scope": "app"});
  NativeModules.LLLocalytics.removeProfileAttributesFromSet({"name": "date_arr", "values": ["2017-06-20", "2017-07-20"], "scope": "org"});
};

const incrementProfileAttribute = () => {
  NativeModules.LLLocalytics.incrementProfileAttribute({"name": "inc", "value": 7, "scope": "app"});
  NativeModules.LLLocalytics.incrementProfileAttribute({"name": "inc", "value": 7, "scope": "org"});
};

const decrementProfileAttribute = () => {
  NativeModules.LLLocalytics.decrementProfileAttribute({"name": "dec", "value": 7, "scope": "app"});
  NativeModules.LLLocalytics.decrementProfileAttribute({"name": "dec", "value": 7, "scope": "org"});
};

const deleteProfileAttribute = () => {
  NativeModules.LLLocalytics.deleteProfileAttribute({"name": "delete", "scope": "app"});
  NativeModules.LLLocalytics.deleteProfileAttribute({"name": "delete", "scope": "org"});
};

const setCustomer = () => {
  NativeModules.LLLocalytics.setCustomerEmail("email@test.com");
  NativeModules.LLLocalytics.setCustomerFirstName("first");
  NativeModules.LLLocalytics.setCustomerLastName("last");
  NativeModules.LLLocalytics.setCustomerFullName("full");
  NativeModules.LLLocalytics.upload();
  NativeModules.LLLocalytics.setCustomerEmail("");
  NativeModules.LLLocalytics.setCustomerFirstName("");
  NativeModules.LLLocalytics.setCustomerLastName("");
  NativeModules.LLLocalytics.setCustomerFullName("");
  NativeModules.LLLocalytics.upload();
  NativeModules.LLLocalytics.setCustomerEmail(null);
  NativeModules.LLLocalytics.setCustomerFirstName(null);
  NativeModules.LLLocalytics.setCustomerLastName(null);
  NativeModules.LLLocalytics.setCustomerFullName(null);
  NativeModules.LLLocalytics.upload();
};

const triggerInAppMessage = () => {
  NativeModules.LLLocalytics.triggerInAppMessage({"triggerName": "test_event", "attributes": {"key": "value"}});
};

const triggerInAppMessagesForSessionStart = () => {
  NativeModules.LLLocalytics.triggerInAppMessagesForSessionStart();
};

const dismissCurrentInAppMessage = () => {
  NativeModules.LLLocalytics.dismissCurrentInAppMessage();
}

const setInAppMessageDismissButtonLocation = (location) => {
  NativeModules.LLLocalytics.setInAppMessageDismissButtonLocation(location);
};

const getInAppMessageDismissButtonLocation = () => {
  NativeModules.LLLocalytics.getInAppMessageDismissButtonLocation().then((value) => console.log("button location: " + value));
};

const setInAppMessageDismissButtonHidden = (hidden) => {
  NativeModules.LLLocalytics.setInAppMessageDismissButtonHidden(hidden);
};

const setInAppAdIdParameterEnabled = (enabled) => {
  if (enabled) {
  NativeModules.LLLocalytics.setInAppAdIdParameterEnabled(enabled);
  } else {
  NativeModules.LLLocalytics.appendAdidToInAppUrls(enabled);
  }
};

const isInAppAdIdParameterEnabled = () => {
  NativeModules.LLLocalytics.isAdidAppendedToInAppUrls().then((value) => console.log("in-app ad id param enabled: " + value));
};

const tagInAppImpression = () => {
  NativeModules.LLLocalytics.tagInAppImpression({"campaignId": 415837, "action": "click"});
  NativeModules.LLLocalytics.tagInAppImpression({"campaignId": 415837, "action": "dismiss"});
  NativeModules.LLLocalytics.tagInAppImpression({"campaignId": 415837, "action": "custom"});
};

const setInAppMessageConfiguration = () => {
  var config = {
    "dismissButtonLocation": "right",
    /*"dismissButtonHidden": true,*/
    /*"shouldShow": false, // global suppression */
    /*"diy": true, // DIY (manually handle display and impression tagging) */
    /*"delaySessionStart": true, // Must be set in AppDelegate as well to handle initial launch */
    /*"dismissButtonImageName": "custom_image", // Must be in app's Bundle */
    "aspectRatio": 0.7,
    "backgroundAlpha": 0.75,
    "offset": 20
  };
  NativeModules.LLLocalytics.setInAppMessageConfiguration({"config": config});
};

const getInboxCampaigns = () => {
  NativeModules.LLLocalytics.getInboxCampaigns().then((value) => console.log("inbox campaigns: " + JSON.stringify(value)));
};

const refreshInboxCampaigns = () => {
  NativeModules.LLLocalytics.refreshInboxCampaigns().then((value) => console.log("refresh inbox campaigns: " + JSON.stringify(value)));
};

const setInboxCampaignRead = (read) => {
  NativeModules.LLLocalytics.setInboxCampaignRead({"campaignId": 98452, "read": read});
};

const getInboxCampaignsUnreadCount = () => {
  NativeModules.LLLocalytics.getInboxCampaignsUnreadCount().then((value) => console.log("inbox campaigns unread count: " + value));
};

const tagInboxImpression = () => {
  NativeModules.LLLocalytics.tagInboxImpression({"campaignId": 97797, "action": "click"});
  NativeModules.LLLocalytics.tagInboxImpression({"campaignId": 97797, "action": "dismiss"});
  NativeModules.LLLocalytics.tagInboxImpression({"campaignId": 97797, "action": "custom"});
};

const triggerPlacesNotification = () => {
  NativeModules.LLLocalytics.triggerPlacesNotification({"campaignId": 2475, "regionId": "Localytics Office"});
}

const tagPlacesPushReceived = () => {
  NativeModules.LLLocalytics.tagPlacesPushReceived({"campaignId": 2475});
};

const tagPlacesPushOpened = () => {
  NativeModules.LLLocalytics.tagPlacesPushOpened({"campaignId": 2475});
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

const setMessagingEventsEnabled = () => {
  NativeModules.LLLocalytics.setMessagingEventsEnabled(true);
};

const setLocationMonitoringEnabled = (enabled) => {
  NativeModules.LLLocalytics.setLocationMonitoringEnabled(enabled);
};

const getGeofencesToMonitor = () => {
  NativeModules.LLLocalytics.getGeofencesToMonitor({"latitude": 42.3601, "longitude": -71.0589}).then((value) => console.log("geofences to monitor: " + JSON.stringify(value)));
};

const triggerRegions = () => {
  NativeModules.LLLocalytics.triggerRegions({"regions": [{"uniqueId": "Localytics Office"}], "event": "enter"});
};

const setLocationEventsEnabled = () => {
  NativeModules.LLLocalytics.setLocationEventsEnabled({"enabled": true});
};

const setIdentifier = () => {
  NativeModules.LLLocalytics.setIdentifier({"identifier": "id1", "value": "val"});
};

const getIdentifier = () => {
  NativeModules.LLLocalytics.getIdentifier({"identifier": "id1"}).then((value) => console.log("identifier id1: " + value));
};

const setCustomerId = () => {
  NativeModules.LLLocalytics.setCustomerId("cust_id");
};

const getCustomerId = () => {
  NativeModules.LLLocalytics.getCustomerId().then((value) => console.log("customer ID: " + value));
};

const setLocation = () => {
  NativeModules.LLLocalytics.setLocation({"location": {"latitude": -120.5, "longitude": 76.12, "altitude": 40, "time": 1497056438, "accuracy": 14}});
};

const setLoggingEnabled = (enabled) => {
  NativeModules.LLLocalytics.setLoggingEnabled(enabled);
};

const isLoggingEnabled = () => {
  NativeModules.LLLocalytics.isLoggingEnabled().then((enabled) => console.log("logging enabled: " + enabled));
};

const getInstallId = () => {
  NativeModules.LLLocalytics.getInstallId().then((value) => console.log("install id: " + value));
};

const getAppKey = () => {
  NativeModules.LLLocalytics.getAppKey().then((value) => console.log("app key: " + value));
};

const getLibraryVersion = () => {
  NativeModules.LLLocalytics.getLibraryVersion().then((value) => console.log("library version: " + value));
};

const setTestModeEnabled = () => {
  NativeModules.LLLocalytics.setTestModeEnabled(true);
};

const isTestModeEnabled = () => {
  NativeModules.LLLocalytics.isTestModeEnabled().then((value) => console.log("test mode enabled: " + value));
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
        <Button onPress={tagInAppImpression} title="Tag In-App Impression"/>
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
          Developer Options:
        </Text>
        <Button onPress={setLoggingEnabled.bind(this, true)} title="Set Logging Enabled -> true"/>
        <Button onPress={setLoggingEnabled.bind(this, false)} title="Set Logging Enabled -> false"/>
        <Button onPress={isLoggingEnabled} title="Is Logging Enabled"/>
        <Button onPress={getInstallId} title="Get Install ID"/>
        <Button onPress={getAppKey} title="Get App Key"/>
        <Button onPress={getLibraryVersion} title="Get Library Version"/>
        <Button onPress={setTestModeEnabled} title="Set Test Mode Enabled"/>
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
