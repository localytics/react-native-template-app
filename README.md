# react-native-template-app

Sample app demonstrating the usage of the Localytics React Native SDK.

## Getting Started

1. `cd react-native-template-app`
2. `npm install`
3. `npm install localytics-react-native --save`

### Automatic Installation

`$ react-native link localytics-react-native`

### Manual Installation

#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `localytics-react-native` and add `LLLocalytics.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libLLLocalytics.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.localytics.react.android.LLLocalyticsPackage;` to the imports at the top of the file
  - Add `new LLLocalyticsPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':localytics-react-native'
  	project(':localytics-react-native').projectDir = new File(rootProject.projectDir, 	'../node_modules/localytics-react-native/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':localytics-react-native')
  	```

## Running

### iOS

1. `cd ios`
2. `pod install`
3. `cd ..`
4. `react-native run-ios`

Note: If you see the `":CFBundleIdentifier", Does Not Exist` error, you can just open
and run the project directly from Xcode (path `ios/LocalyicsReactTest.xcworkspace`). See this
issue for some possible fixes: https://github.com/facebook/react-native/issues/7308.

### Android

Java 8 is required to build the project.

`react-native run-android`

## SDK Integration

### iOS

Follow the [Getting Started](http://docs.localytics.com/dev/ios.html#getting-started-ios)
steps in our iOS Developers Docs for required native code changes.
1. [Install the SDK](http://docs.localytics.com/dev/ios.html#install-sdk-ios).
2. [Configure test mode](http://docs.localytics.com/dev/ios.html#test-mode-ios).
3. [Initialize the SDK](http://docs.localytics.com/dev/ios.html#initialize-sdk-ios).
4. For other Localytics features, such as Push Messaging and Places, refer to the
relevant sections within our [iOS Developer Docs](http://docs.localytics.com/dev/ios.html#ios).

### Android

Follow the [Getting Started](http://docs.localytics.com/dev/android.html#getting-started-android)
steps in our Android Developer Docs for required native code changes.
1. [Install the SDK](http://docs.localytics.com/dev/android.html#install-sdk-android).
*Note:* You do not need to include the Localytics SDK compile dependency because it's
already included within the `:localytics-react-native` project's dependencies.
2. [Modify AndroidManifest.xml](http://docs.localytics.com/dev/android.html#modify-androidmanifest-android).
3. [Modify your MainActivity](http://docs.localytics.com/dev/android.html#main-activity-test-mode-android).
4. [Initialize the SDK](http://docs.localytics.com/dev/android.html#initialize-sdk-android).
5. For other Localytics features, such as Push Messaging and Places, refer to the
relevant sections within our [Android Developer Docs](http://docs.localytics.com/dev/android.html#android).

## Usage

### Methods
```javascript
import LLLocalytics from 'localytics-react-native';

// Integration
LLLocalytics.upload();
LLLocalytics.openSession();
LLLocalytics.closeSession();

// Analytics
LLLocalytics.setOptedOut({"optedOut": optedOut});
LLLocalytics.isOptedOut((optedOut) => console.log("opted out: " + optedOut));
LLLocalytics.tagEvent({"name": "Team Favorited"});
LLLocalytics.tagEvent({"name": "Team Favorited", "attributes": {"Team Name": "Celtics"}});
LLLocalytics.tagEvent({"name": "Item Purchased", "attributes": {"Item ID": "sku-123"}, "customerValueIncrease": 5});
LLLocalytics.tagPurchased({"itemName": "Shirt", "itemId": "sku-123", "itemType": "Apparel", "itemPrice": 10, "attributes": {"Key": "Value"}});
LLLocalytics.tagAddedToCart({"itemName": "Shirt", "itemId": "sku-123", "itemType": "Apparel", "itemPrice": 10, "attributes": {"Key": "Value"}});
LLLocalytics.tagStartedCheckout({"totalPrice": 100, "itemCount": 21, "attributes": {"Key": "Value"}});
LLLocalytics.tagCompletedCheckout({"totalPrice": 50, "itemCount": 3, "attributes": {"Key": "Value"}});
LLLocalytics.tagContentViewed({"contentName": "Top 10", "contentId": "e8z7319zbe", "contentType": "Article", "attributes": {"Key": "Value"}});
LLLocalytics.tagSearched({"queryText": "Celtics", "contentType": "Sports", "resultCount": 11, "attributes": {"Key": "Value"}});
LLLocalytics.tagShared({"contentName": "Top 10", "contentId": "e8z7319zbe", "contentType": "Article", "methodName": "Twitter", "attributes": {"Key": "Value"}});
LLLocalytics.tagContentRated({"contentName": "Top 10", "contentId": "e8z7319zbe", "contentType": "Article", "rating": 8, "attributes": {"Key": "Value"}});
var customer = {"customerId": "3neRKTxbNWYKM4NJ", "firstName": "John", "lastName": "Smith", "fullName": "John Smith, III", "emailAddress": "john@smith.com"};
LLLocalytics.tagCustomerRegistered({"customer": customer, "methodName": "Facebook", "attributes": {"Key": "Value"}});
LLLocalytics.tagCustomerLoggedIn({"customer": customer, "methodName": "Native", "attributes": {"Key": "Value"}});
LLLocalytics.tagCustomerLoggedOut({"attributes": {"Key": "Value"}});
LLLocalytics.tagInvited({"methodName": "Facebook", "attributes": {"Key": "Value"}});
LLLocalytics.tagInboxImpression({"campaignId": 97797, "action": "click"});
LLLocalytics.tagInboxImpression({"campaignId": 97797, "action": "dismiss"});
LLLocalytics.tagInAppImpression({"campaignId": 415837, "action": "click"});
LLLocalytics.tagInAppImpression({"campaignId": 415837, "action": "dismiss"});
LLLocalytics.tagPlacesPushReceived({"campaignId": 2475});
LLLocalytics.tagPlacesPushOpened({"campaignId": 2475});
LLLocalytics.tagScreen({"screen": "Settings"});
LLLocalytics.setCustomDimension({"dimension": 0, "value": "Logged In"});
LLLocalytics.getCustomDimension({"dimension": 0}, (value) => console.log("custom dimension 0: " + value));

// Profiles
LLLocalytics.setProfileAttribute({"name": "Hometown", "value": "New York, New York", "scope": "app"});
LLLocalytics.setProfileAttribute({"name": "States Visited", "value": ["Arizona", "Virginia"], "scope": "org"});
LLLocalytics.setProfileAttribute({"name": "Age", "value": 22, "scope": "app"});
LLLocalytics.setProfileAttribute({"name": "Favorite Numbers", "value": [20, 9], "scope": "org"});
LLLocalytics.setProfileAttribute({"name": "Last Purchase Date", "value": "2017-06-20", "scope": "app"});
LLLocalytics.setProfileAttribute({"name": "Upcoming Milestone Dates", "value": ["2017-10-20", "2017-11-18"], "scope": "org"});
LLLocalytics.addProfileAttributesToSet({"name": "States Visited", "values": ["Arizona", "Virginia"], "scope": "app"});
LLLocalytics.addProfileAttributesToSet({"name": "Favorite Numbers", "values": [20, 9], "scope": "org"});
LLLocalytics.addProfileAttributesToSet({"name": "Upcoming Milestone Dates", "values": ["2017-10-20", "2017-11-18"], "scope": "app"});
LLLocalytics.removeProfileAttributesFromSet({"name": "States Visited", "values": ["Arizona", "Virginia"], "scope": "app"});
LLLocalytics.removeProfileAttributesFromSet({"name": "Favorite Numbers", "values": [20, 9], "scope": "org"});
LLLocalytics.removeProfileAttributesFromSet({"name": "Upcoming Milestone Dates", "values": ["2017-10-20", "2017-11-18"], "scope": "app"});
LLLocalytics.incrementProfileAttribute({"name": "Age", "value": 1, "scope": "org"});
LLLocalytics.decrementProfileAttribute({"name": "Days Until Graduation", "value": 3, "scope": "app"});
LLLocalytics.deleteProfileAttribute({"name": "Days Until Graduation", "scope": "app"});
LLLocalytics.setCustomerEmail({"email": "john@smith.com"});
LLLocalytics.setCustomerFirstName({"firstName": "John"});
LLLocalytics.setCustomerLastName({"lastName": "Smith"});
LLLocalytics.setCustomerFullName({"fullName": "John Smith, III"});

// Messaging
LLLocalytics.triggerInAppMessage({"triggerName": "Item Purchased", "attributes": {"Item Name": "Stickers"}});
LLLocalytics.triggerInAppMessagesForSessionStart();
LLLocalytics.dismissCurrentInAppMessage()
LLLocalytics.setInAppMessageDismissButtonLocation({"location": "right"});
LLLocalytics.getInAppMessageDismissButtonLocation((location) => console.log("button location: " + location));
LLLocalytics.setInAppMessageDismissButtonHidden({"hidden": true});
LLLocalytics.getInboxCampaigns((campaigns) => console.log("inbox campaigns: " + JSON.stringify(campaigns)));
LLLocalytics.refreshInboxCampaigns((campaigns) => console.log("inbox campaigns: " + JSON.stringify(campaigns)));
LLLocalytics.setInboxCampaignRead({"campaignId": 98452, "read": true});
LLLocalytics.getInboxCampaignsUnreadCount((count) => console.log("inbox campaigns unread count: " + count));
LLLocalytics.triggerPlacesNotification({"campaignId": 2475, "regionId": "Localytics Office"});

// Location
LLLocalytics.setLocationMonitoringEnabled({"enabled": true});
LLLocalytics.getGeofencesToMonitor({"latitude": 42.3601, "longitude": -71.0589}, (geofences) => console.log("geofences to monitor: " + JSON.stringify(geofences)));
LLLocalytics.triggerRegions({"regions": [{"uniqueId": "Localytics Office"}], "event": "enter"});
LLLocalytics.setLocation({"location": {"latitude": -120.5, "longitude": 76.12}});

// User Information
LLLocalytics.setIdentifier({"identifier": "Hair Color", "value": "Black"});
LLLocalytics.getIdentifier({"identifier": "Hair Color"}, (value) => console.log("Hair Color: " + value));
LLLocalytics.setCustomerId({"customerId": "3neRKTxbNWYKM4NJ"});
LLLocalytics.getCustomerId((id) => console.log("customer ID: " + id));

// Developer Options
LLLocalytics.setOptions({"options": {"session_timeout": 30}});
LLLocalytics.setLoggingEnabled({"enabled": true});
LLLocalytics.isLoggingEnabled((enabled) => console.log("logging enabled: " + enabled));
LLLocalytics.setTestModeEnabled({"enabled": true});
LLLocalytics.isTestModeEnabled((enabled) => console.log("test mode enabled: " + enabled));
LLLocalytics.getInstallId((id) => console.log("install id: " + id));
LLLocalytics.getAppKey((key) => console.log("app key: " + key));
LLLocalytics.getLibraryVersion((version) => console.log("library version: " + version));
```

### Additional iOS Methods
```javascript
LLLocalytics.setInAppMessageDismissButtonImageWithName({"imageName": "in_app_close"});
LLLocalytics.setInAppAdIdParameterEnabled({"enabled": true});
LLLocalytics.isInAppAdIdParameterEnabled((enabled) => console.log("in-app ad id param enabled: " + enabled));
LLLocalytics.setPushToken({"token": "1bFZo1K3zs0HcBGs1K0-loHOoor0YOgBqm2w9Ttd8ZGPyZ"});
LLLocalytics.getPushToken((token) => console.log("push token: " + token));
```

### Additional Android Methods
```javascript
LLLocalytics.registerPush({"senderId": "123456789"});
LLLocalytics.setPushRegistrationId({"registrationId": "dibeUIQZrw8:APA91bFZo1K3zs0HcBGs1K0sa-sI1QvNbcjVfyBsGe3GnGyLy8J05loX93g-2-_1kOy4GMVCIZqF6o"});
LLLocalytics.getPushRegistrationId((id) => console.log("push registration id: " + id));
LLLocalytics.setNotificationsDisabled({"disabled": true});
LLLocalytics.areNotificationsDisabled((disabled) => console.log("notifications disabled: " + disabled));
```

### Callbacks
Native SDK analytics, messaging, and location callbacks are available, but
due to technical limitations, callbacks that include a return value, such
as a boolean or configuration object, are not available within the Javascript context.

You must enable events. Note: Any callback/delegate that you have set on the Localytics
SDK in your native code (e.g. ObjC/Swift `AppDelegate.m` or Java `MainApplication.java`)
will be replaced when one of these APIs are called.
```javascript
LLLocalytics.setAnalyticsEventsEnabled({"enabled": true});
LLLocalytics.setMessagingEventsEnabled({"enabled": true});
LLLocalytics.setLocationEventsEnabled({"enabled": true});
```

Callbacks are available through the `NativeAppEventEmitter`. Add listeners in
`componentDidMount` and to prevent memory leaks remove them in `componentWillUnmount`:
```javascript
import React, { Component } from 'react';
import { NativeAppEventEmitter } from 'react-native';
import LLLocalytics from 'localytics-react-native';

var _sessionWillOpen, _sessionDidOpen, _sessionWillClose, _didTagEvent,
  _willDisplayInApp, _didDisplayInApp, _willDismissInApp, _didDismissInApp,
  _diyInApp, _willShowPlaces, _didUpdateLocation, _didTriggerRegions,
  _didUpdateMonitoredGeofences, _willShowPush, _diyPlaces;

export default class TestApp extends Component {
  componentDidMount() {

    // Enable events
    LLLocalytics.setAnalyticsEventsEnabled({"enabled": true});
    LLLocalytics.setMessagingEventsEnabled({"enabled": true});
    LLLocalytics.setLocationEventsEnabled({"enabled": true});

    // Analytics Callbacks
    _sessionWillOpen = NativeAppEventEmitter.addListener("localyticsSessionWillOpen", (params) => console.log("session will open: " + JSON.stringify(params)));
    _sessionDidOpen = NativeAppEventEmitter.addListener("localyticsSessionDidOpen", (params) => console.log("session did open: " + JSON.stringify(params)));
    _sessionWillClose = NativeAppEventEmitter.addListener("localyticsSessionWillClose", (params) => console.log("session will close"));
    _didTagEvent = NativeAppEventEmitter.addListener("localyticsDidTagEvent", (params) => console.log("did tag event: " + JSON.stringify(params)));

    // Messaging Callbacks
    _willDisplayInApp = NativeAppEventEmitter.addListener("localyticsWillDisplayInAppMessage", (params) => console.log("will display in-app: " + JSON.stringify(params)));
    _didDisplayInApp = NativeAppEventEmitter.addListener("localyticsDidDisplayInAppMessage", () => console.log("did display in-app"));
    _willDismissInApp = NativeAppEventEmitter.addListener("localyticsWillDismissInAppMessage", () => console.log("will dismiss in-app"));
    _didDismissInApp = NativeAppEventEmitter.addListener("localyticsDidDismissInAppMessage", () => console.log("did dismiss in-app"));
    _diyInApp = NativeAppEventEmitter.addListener("localyticsDiyInAppMessage", (params) => console.log("DIY in-app: " + JSON.stringify(params)));
    _willShowPush = NativeAppEventEmitter.addListener("localyticsWillShowPushNotification", (params) => console.log("will show push: " + JSON.stringify(params))); // Android only
    _willShowPlaces = NativeAppEventEmitter.addListener("localyticsWillShowPlacesPushNotification", (params) => console.log("will show places: " + JSON.stringify(params)));
    _diyPlaces = NativeAppEventEmitter.addListener("localyticsDiyPlacesPushNotification", (params) => console.log("DIY places: " + JSON.stringify(params)));

    // Location Callbacks
    _didUpdateLocation = NativeAppEventEmitter.addListener("localyticsDidUpdateLocation", (params) => console.log("did update location: " + JSON.stringify(params)));
    _didTriggerRegions = NativeAppEventEmitter.addListener("localyticsDidTriggerRegions", (params) => console.log("did trigger regions: " + JSON.stringify(params)));
    _didUpdateMonitoredGeofences = NativeAppEventEmitter.addListener("localyticsDidUpdateMonitoredGeofences", (params) => console.log("did update monitored geofences: " + JSON.stringify(params)));
  }

  componentWillUnmount() {
    _sessionWillOpen.remove();
    _sessionDidOpen.remove();
    _sessionWillClose.remove();
    _didTagEvent.remove();
    _willDisplayInApp.remove();
    _didDisplayInApp.remove();
    _willDismissInApp.remove();
    _didDismissInApp.remove();
    _diyInApp.remove();
    _willShowPlaces.remove();
    _diyPlaces.remove();
    _didUpdateLocation.remove();
    _didTriggerRegions.remove();
    _didUpdateMonitoredGeofences.remove();
    _willShowPush.remove();
  }
}
```

### Messaging Configuration
Global In-App, Places, and Push (for Android) configuration is available. Note: When
one of these configuration APIs is called, messaging events will automatically be enabled
(i.e. `LLLocalytics.setMessagingEventsEnabled({"enabled": true});`).

#### iOS
```javascript
var inAppConfig = {
  "dismissButtonLocation": "right",
  /*"dismissButtonHidden": true,*/
  /*"shouldShow": false, // global suppression */
  /*"diy": true, // Manually handle display and impression tagging. Results in localyticsDiyInAppMessage Messaging event */
  /*"delaySessionStart": true, // Must be set in AppDelegate as well to handle initial launch */
  /*"dismissButtonImageName": "custom_image", // Must be in app's Bundle */
  "aspectRatio": 0.7,
  "backgroundAlpha": 0.75,
  "offset": 20
};
var placesConfig = {
  "alertAction": "Tap Here",
  "alertTitle": "My Places App",
  "hasAction": true,
  /*"alertLaunchImage": "custom_image", // Must be in app's Bundle */
  /*"category": "some_category", */
  /*"soundName": "alert.mp3", // Must be in app's Bundle */
  /*"shouldShow": false, // global suppression */
  /*"diy": true, // Manually handle display and impression tagging. Results in localyticsDiyPlacesPushNotification Messaging event */
  "applicationIconBadgeNumber": 5
};
var placesUserNotificationConfig = {
  "title": "My Places App",
  "subtitle": "My Places App Subtitle",
  /*"launchImageName": "custom_image", // Must be in app's Bundle */
  /*"sound": "alert.mp3", // Must be in app's Bundle */
  /*"shouldShow": false, // global suppression */
  /*"diy": true, // Manually handle display and impression tagging. Results in localyticsDiyPlacesPushNotification Messaging event */
  "badge": "10"
};
LLLocalytics.setInAppMessageConfiguration({"config": inAppConfig});
LLLocalytics.setPlacesMessageConfiguration({"config": placesConfig});
// If setting a UNUserNotificationCenterDelegate within your AppDelegate, use:
LLLocalytics.setPlacesMessageConfiguration({"config": placesUserNotificationConfig});
```

#### Android
```javascript
var inAppConfig = {
  "dismissButtonLocation": "right",
  /*"dismissButtonHidden": true,*/
  /*"shouldShow": false, // global suppression */
  /*"diy": true, // Manually handle display and impression tagging. Results in localyticsDiyInAppMessage Messaging event */
  /*"delaySessionStart": true, // Must be set in MainApplication.java as well to handle initial launch */
  "aspectRatio": 0.7,
  "backgroundAlpha": 0.75,
  "bannerOffsetDps": 20
};
var pushConfig = {
  "category": "social", // from android.app.Notification.CATEGORY_SOCIAL
  "color": -16711936, // from android.graphics.Color.GREEN
  "contentInfo": "10",
  "contentTitle": "My App",
  "defaults": ["sound", "lights"], // valid values: "all" or combination of "sound", "lights", "vibrate"
  /*"sound": "android.resource://com.my.app/notif.mp3", // sound URI. ignored if "sound" used in defaults */
  /*"vibrate": [0, 100, 200, 300], // vibration pattern. ignored if "vibrate" used in defaults */
  /*"shouldShow": false, // global suppression */
  "priority": 0 // from android.support.v4.app.NotificationCompat.PRIORITY_DEFAULT
};
var placesConfig = {
  "category": "promo", // from android.app.Notification.CATEGORY_PROMO
  "color": -16776961, // from android.graphics.Color.BLUE
  "contentInfo": "5",
  "contentTitle": "My Places App",
  "defaults": ["all"], // valid values: "all" or combination of "sound", "lights", "vibrate"
  /*"sound": "android.resource://com.my.app/notif.mp3", // sound URI. ignored if "sound" used in defaults */
  /*"vibrate": [0, 100, 200, 300], // vibration pattern. ignored if "vibrate" used in defaults */
  /*"shouldShow": false, // global suppression */
  /*"diy": true, // Manually handle display and impression tagging. Results in localyticsDiyPlacesPushNotification Messaging event */
  "priority": 1 // from android.support.v4.app.NotificationCompat.PRIORITY_HIGH
};
LLLocalytics.setInAppMessageConfiguration({"config": inAppConfig});
LLLocalytics.setPushMessageConfiguration({"config": pushConfig});
LLLocalytics.setPlacesMessageConfiguration({"config": placesConfig});
```
