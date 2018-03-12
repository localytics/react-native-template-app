import {
  Platform
} from 'react-native';
import LLLocalytics from 'localytics-react-native';

module.exports = function() {
  this.setOptions = () => {
    LLLocalytics.setOptions({"min_region_dwell_time":0});
    LLLocalytics.setOptions({"region_throttle_time":0});
  }

  this.upload = () => {
    LLLocalytics.upload();
  }
  this.openSession = () => {
    LLLocalytics.openSession();
  }

this.closeSession = () => {
  LLLocalytics.closeSession();
}

this.setOptedOut = (optedOut) => {
  LLLocalytics.setOptedOut(optedOut);
  LLLocalytics.isOptedOut().then((value) => {if (value != optedOut) {console.warn("opted out mismatch");}});
}

this.isOptedOut = () => {
  LLLocalytics.isOptedOut().then((optedOut) => console.log("opted out: " + optedOut));
}

this.tagEvent = () => {
  var attrs = {"string_key": "hello", "int_key": 5, "double_key": 3.14};
  var customer = {"customerId": "test", "firstName": "test", "lastName": "test", "fullName": "test", "emailAddress": "test"};
  var customer2 = {"customerId": "test2", "firstName": "test2", "lastName": "test2", "fullName": "test2", "emailAddress": "test2"};

  // Normal event tags ("name" is required)
  LLLocalytics.tagEvent({"name": "test"});
  LLLocalytics.tagEvent({"name": "test", "attributes": attrs});
  LLLocalytics.tagEvent({"name": "test", "attributes": attrs, "customerValueIncrease": 5});

  // Standard event tags
  LLLocalytics.tagPurchased({"itemName": "test", "itemId": "test", "itemType": "test", "itemPrice": 10, "attributes": attrs});
  LLLocalytics.tagAddedToCart({"itemName": "test", "itemId": "test", "itemType": "test", "itemPrice": 10, "attributes": attrs});
  LLLocalytics.tagStartedCheckout({"totalPrice": 20, "itemCount": 21, "attributes": attrs});
  LLLocalytics.tagCompletedCheckout({"totalPrice": 20, "itemCount": 21, "attributes": attrs});
  LLLocalytics.tagContentViewed({"contentName": "test", "contentId": "test", "contentType": "test", "attributes": attrs});
  LLLocalytics.tagSearched({"queryText": "test", "contentType": "test", "resultCount": 11, "attributes": attrs});
  LLLocalytics.tagShared({"contentName": "test", "contentId": "test", "contentType": "test", "methodName": "test", "attributes": attrs});
  LLLocalytics.tagCustomerRegistered({"customer": customer, "methodName": "test", "attributes": attrs});
  LLLocalytics.tagCustomerLoggedOut({"attributes": attrs});
  LLLocalytics.tagCustomerLoggedOut(attrs);
  LLLocalytics.tagContentRated({"contentName": "test", "contentId": "test", "contentType": "test", "rating": 9, "attributes": attrs});
  LLLocalytics.tagCustomerLoggedIn({"customer": customer2, "methodName": "test", "attributes": attrs});
  LLLocalytics.tagInvited({"methodName": "test", "attributes": attrs});
}

this.tagScreen = () => {
  LLLocalytics.tagScreen("test");
}

this.setCustomDimension = () => {
  LLLocalytics.setCustomDimension({"dimension": 0, "value": "test"});
  for (i=1; i<20; i++) {
  LLLocalytics.setCustomDimension({"dimension": i, "value": "test" + i});
  }
}

this.getCustomDimension = () => {
  for (i=0; i<20; i++) {
  LLLocalytics.getCustomDimension(i).then((value) => console.log("custom dimension " + i + ": " + value));
	}
}

this.setAnalyticsEventsEnabled = () => {
  LLLocalytics.setAnalyticsEventsEnabled(true);
}

this.setProfileAttribute = () => {
  LLLocalytics.setProfileAttribute({"name": "string", "value": "test", "scope": "app"});
  LLLocalytics.setProfileAttribute({"name": "string", "value": "test", "scope": "org"});
  LLLocalytics.setProfileAttribute({"name": "string_arr", "value": ["test", "ing"], "scope": "app"});
  LLLocalytics.setProfileAttribute({"name": "string_arr", "value": ["test", "ing"], "scope": "org"});
  LLLocalytics.setProfileAttribute({"name": "number", "value": 5, "scope": "app"});
  LLLocalytics.setProfileAttribute({"name": "number", "value": 5, "scope": "org"});
  LLLocalytics.setProfileAttribute({"name": "number_arr", "value": [5, 6], "scope": "app"});
  LLLocalytics.setProfileAttribute({"name": "number_arr", "value": [5, 6], "scope": "org"});
  LLLocalytics.setProfileAttribute({"name": "date", "value": "2017-06-20", "scope": "app"});
  LLLocalytics.setProfileAttribute({"name": "date", "value": "2017-06-20", "scope": "org"});
  LLLocalytics.setProfileAttribute({"name": "date_arr", "value": ["2017-06-20", "2017-07-20"], "scope": "app"});
  LLLocalytics.setProfileAttribute({"name": "date_arr", "value": ["2017-06-20", "2017-07-20"], "scope": "org"});
}

this.addProfileAttributesToSet = () => {
  LLLocalytics.addProfileAttributesToSet({"name": "string_arr", "values": ["test", "ing"], "scope": "app"});
  LLLocalytics.addProfileAttributesToSet({"name": "string_arr", "values": ["test", "ing"], "scope": "org"});
  LLLocalytics.addProfileAttributesToSet({"name": "number_arr", "values": [5, 6], "scope": "app"});
  LLLocalytics.addProfileAttributesToSet({"name": "number_arr", "values": [5, 6], "scope": "org"});
  LLLocalytics.addProfileAttributesToSet({"name": "date_arr", "values": ["2017-06-20", "2017-07-20"], "scope": "app"});
  LLLocalytics.addProfileAttributesToSet({"name": "date_arr", "values": ["2017-06-20", "2017-07-20"], "scope": "org"});
}

this.removeProfileAttributesFromSet = () => {
  LLLocalytics.removeProfileAttributesFromSet({"name": "string_arr", "values": ["test", "ing"], "scope": "app"});
  LLLocalytics.removeProfileAttributesFromSet({"name": "string_arr", "values": ["test", "ing"], "scope": "org"});
  LLLocalytics.removeProfileAttributesFromSet({"name": "number_arr", "values": [5, 6], "scope": "app"});
  LLLocalytics.removeProfileAttributesFromSet({"name": "number_arr", "values": [5, 6], "scope": "org"});
  LLLocalytics.removeProfileAttributesFromSet({"name": "date_arr", "values": ["2017-06-20", "2017-07-20"], "scope": "app"});
  LLLocalytics.removeProfileAttributesFromSet({"name": "date_arr", "values": ["2017-06-20", "2017-07-20"], "scope": "org"});
}

this.incrementProfileAttribute = () => {
  LLLocalytics.incrementProfileAttribute({"name": "inc", "value": 7, "scope": "app"});
  LLLocalytics.incrementProfileAttribute({"name": "inc", "value": 7, "scope": "org"});
}

this.decrementProfileAttribute = () => {
  LLLocalytics.decrementProfileAttribute({"name": "dec", "value": 7, "scope": "app"});
  LLLocalytics.decrementProfileAttribute({"name": "dec", "value": 7, "scope": "org"});
}

this.deleteProfileAttribute = () => {
  LLLocalytics.deleteProfileAttribute({"name": "delete", "scope": "app"});
  LLLocalytics.deleteProfileAttribute({"name": "delete", "scope": "org"});
}

this.setCustomer = () => {
  LLLocalytics.setCustomerEmail("email@test.com");
  LLLocalytics.setCustomerFirstName("first");
  LLLocalytics.setCustomerLastName("last");
  LLLocalytics.setCustomerFullName("full");
  LLLocalytics.upload();
  LLLocalytics.setCustomerEmail("");
  LLLocalytics.setCustomerFirstName("");
  LLLocalytics.setCustomerLastName("");
  LLLocalytics.setCustomerFullName("");
  LLLocalytics.upload();
  LLLocalytics.setCustomerEmail(null);
  LLLocalytics.setCustomerFirstName(null);
  LLLocalytics.setCustomerLastName(null);
  LLLocalytics.setCustomerFullName(null);
  LLLocalytics.upload();
}

this.triggerInAppMessage = () => {
  LLLocalytics.triggerInAppMessage({"triggerName": "test_event", "attributes": {"key": "value"}});
}

this.triggerInAppMessagesForSessionStart = () => {
  LLLocalytics.triggerInAppMessagesForSessionStart();
}

this.dismissCurrentInAppMessage = () => {
  LLLocalytics.dismissCurrentInAppMessage();
}

this.setInAppMessageDismissButtonLocation = (location) => {
  LLLocalytics.setInAppMessageDismissButtonLocation(location);
}

this.getInAppMessageDismissButtonLocation = () => {
  LLLocalytics.getInAppMessageDismissButtonLocation().then((value) => console.log("button location: " + value));
}

this.setInAppMessageDismissButtonHidden = (hidden) => {
  LLLocalytics.setInAppMessageDismissButtonHidden(hidden);
}

this.setInAppAdIdParameterEnabled = (enabled) => {
  if (enabled) {
  LLLocalytics.appendAdidToInAppUrls(enabled);
  } else {
  LLLocalytics.appendAdidToInAppUrls(enabled);
  }
}

this.isInAppAdIdParameterEnabled = () => {
  LLLocalytics.isAdidAppendedToInAppUrls().then((value) => console.log("in-app ad id param enabled: " + value));
}
this.inappCampaignId = Platform.OS === "ios" ? 415837: 415743;
this.tagInAppImpression = () => {
  LLLocalytics.tagInAppImpression({"campaignId": this.inappCampaignId, "action": "click"});
  LLLocalytics.tagInAppImpression({"campaignId": this.inappCampaignId, "action": "dismiss"});
  LLLocalytics.tagInAppImpression({"campaignId": this.inappCampaignId, "action": "custom"});
}

this.setInAppMessageConfiguration = () => {
  var config = {
    "dismissButtonLocation": "right",
    //"dismissButtonHidden": true,
    //"shouldShow": false, // global suppression
    //"diy": true, // DIY (manually handle display and impression tagging)
    //"delaySessionStart": true, // Must be set in AppDelegate as well to handle initial launch
    //"dismissButtonImageName": "custom_image", // Must be in app's Bundle
    "aspectRatio": 0.7,
    "backgroundAlpha": 0.75,
    "bannerOffsetDps": 20,
    "offset": 20
  };
  LLLocalytics.setInAppMessageConfiguration({"config": config});
}

this.getInboxCampaigns = () => {
  LLLocalytics.getInboxCampaigns().then((value) => console.log("inbox campaigns: " + JSON.stringify(value)));
}

this.getAllInboxCampaigns = () => {
  LLLocalytics.getAllInboxCampaigns().then((value) => console.log("inbox all campaigns: " + JSON.stringify(value)));
}

this.refreshInboxCampaigns = () => {
  LLLocalytics.refreshInboxCampaigns().then((value) => console.log("refresh inbox campaigns: " + JSON.stringify(value)));
}

this.refreshAllInboxCampaigns = () => {
  LLLocalytics.refreshAllInboxCampaigns().then((value) => console.log("refresh all inbox campaigns: " + JSON.stringify(value)));
}

this.setInboxAdIdParameterEnabled = (enabled) => {
  LLLocalytics.appendAdidToInboxUrls(enabled);
}

this.isInboxAdIdParameterEnabled = () => {
  LLLocalytics.isAdidAppendedToInboxUrls().then((value) => console.log("inbox ad id param enabled: " + value));
}


this.campaignId = Platform.OS === "ios" ? 97797 : 101751;

this.setInboxCampaignRead = (read) => {
  console.log("marking " + this.campaignId + "  as read: " + read, Platform.OS);
  LLLocalytics.setInboxCampaignRead({"campaignId": this.campaignId, "read": read});
}

this.getInboxCampaignsUnreadCount = () => {
  LLLocalytics.getInboxCampaignsUnreadCount().then((value) => console.log("inbox campaigns unread count: " + value));
}

this.tagInboxImpression = () => {
  LLLocalytics.tagInboxImpression({"campaignId": this.campaignId, "action": "click"});
  LLLocalytics.tagInboxImpression({"campaignId": this.campaignId, "action": "dismiss"});
  LLLocalytics.tagInboxImpression({"campaignId": this.campaignId, "action": "custom"});
}

//Push to Inbox needs to be run from Dashboard
this.tagPushToInboxImpression = () => {
  LLLocalytics.tagImpressionForPushToInboxCampaign({"campaignId": this.campaignId, "success": true});
}

this.pushCampaignId = Platform.OS === "ios" ? 2475 : 2010;
this.triggerPlacesNotification = () => {
  LLLocalytics.triggerPlacesNotification({"campaignId": this.pushCampaignId, "regionId": "Localytics Office"});
}

this.tagPlacesPushReceived = () => {
  LLLocalytics.tagPlacesPushReceived(this.pushCampaignId);
}

this.tagPlacesPushOpened = () => {
  LLLocalytics.tagPlacesPushOpened({"campaignId": this.pushCampaignId});
}

this.setLocationEventsEnabled = () => {
  LLLocalytics.setLocationEventsEnabled(true);
}

this.setIdentifier = () => {
  LLLocalytics.setIdentifier({"identifier": "id1", "value": "val"});
}

this.getIdentifier = () => {
  LLLocalytics.getIdentifier("id1").then((value) => console.log("identifier id1: " + value));
}

this.setCustomerId = () => {
  LLLocalytics.setCustomerId("cust_id");
}

this.getCustomerId = () => {
  LLLocalytics.getCustomerId().then((value) => console.log("customer ID: " + value));
}

this.setLocation = () => {
  LLLocalytics.setLocation({"location": {"latitude": -120.5, "longitude": 76.12, "altitude": 40, "time": 1497056438, "accuracy": 14}});
}

this.redirectLoggingToDisk = () => {
  LLLocalytics.redirectLogsToDisk({});
}

this.setMessagingEventsEnabled = () => {
  LLLocalytics.setMessagingEventsEnabled(true);
}

this.setLocationMonitoringEnabled = (enabled) => {
  LLLocalytics.setLocationMonitoringEnabled(enabled);
}

this.getGeofencesToMonitor = () => {
  LLLocalytics.getGeofencesToMonitor({"latitude": 42.3601, "longitude": -71.0589}).then((value) => console.log("geofences to monitor: " + JSON.stringify(value)));
}

this.triggerRegions = () => {
  // One iOS and One Android region for triggering.
  LLLocalytics.triggerRegions({"regions": [{"uniqueId": "Localytics Office"}, {"uniqueId": "chalet"}], "event": "enter"});
}

this.triggerRegion = () => {
  LLLocalytics.triggerRegion({"region": {"uniqueId": "Localytics Office"}, "event": "enter"});
  LLLocalytics.triggerRegion({"regions": {"uniqueId": "Localytics Office"}, "event": "enter"});
}

this.setLoggingEnabled = (enabled) => {
  LLLocalytics.setLoggingEnabled(enabled);
  LLLocalytics.isLoggingEnabled().then((value) => {
		if (enabled != value) {console.warn("Logging value mismatch ", value);}
  });
}

this.isLoggingEnabled = () => {
  LLLocalytics.isLoggingEnabled().then((enabled) => console.log("logging enabled: " + enabled));
}

this.getInstallId = () => {
  LLLocalytics.getInstallId().then((value) => console.log("install id: " + value));
}

this.getAppKey = () => {
  LLLocalytics.getAppKey().then((value) => console.log("app key: " + value));
}

this.getLibraryVersion = () => {
  LLLocalytics.getLibraryVersion().then((value) => console.log("library version: " + value));
}

this.setTestModeEnabled = (enabled) => {
  LLLocalytics.setTestModeEnabled(enabled);
}

this.isTestModeEnabled = () => {
  LLLocalytics.isTestModeEnabled().then((value) => console.log("test mode enabled: " + value));
}

const inboxAdidValidator = (enabled) => {
  LLLocalytics.appendAdidToInboxUrls(enabled);
  LLLocalytics.isAdidAppendedToInboxUrls().then((value) => { enabled==value? console.log("AdidToInboxUrls pass") : console.warn("AdidToInboxUrls mismatch");});
}

const inappAdidValidator = (enabled) => {
  LLLocalytics.appendAdidToInAppUrls(enabled);
  LLLocalytics.isAdidAppendedToInAppUrls().then((value) => { enabled==value? console.log("AdidToInAppUrls pass") : console.warn("AdidToInAppUrls mismatch");});
}

this.analyticsEventValidators = () => {
  LLLocalytics.setMessagingEventsEnabled(true);
  const emitter = new NativeEventEmitter(NativeModules.LLAnalyticsEmitter);
  const subscription = emitter.addListener("localyticsSessionWillOpen", () => {"Received Event :", "localyticsSessionWillOpen" });
  LLLocalytics.openSession();
}

this.pushValidators = () => {
  LLLocalytics.getPushToken().then((val) => { console.log("token=",val);});
  LLLocalytics.setPushToken("d15489af21c55a3c4b680b69a01490a6831acc6b6af9b98cec628e1784641ef2");
}

this.sessionTimeoutValidators = () => {
  t = 2;
  LLLocalytics.isLoggingEnabled().then((val) => { t = val;console.log("logging is ", val); });
  LLLocalytics.setLoggingEnabled(true);
  LLLocalytics.setOptions({"session_timeout":0});
  LLLocalytics.closeSession();
  LLLocalytics.tagScreen("UNTAGGED");
  LLLocalytics.openSession();
  LLLocalytics.tagScreen("appVersion");
  LLLocalytics.tagScreen("two");
  LLLocalytics.tagScreen("two");
  // Not duplicate
  LLLocalytics.tagScreen("appVersion");
  LLLocalytics.setOptions({"session_timeout":15});
  LLLocalytics.closeSession();
  LLLocalytics.openSession();
  // Should not be tagged
  LLLocalytics.tagScreen("appVersion");
  LLLocalytics.tagScreen("three");
  LLLocalytics.setOptions({"session_timeout":0});
  LLLocalytics.closeSession();
  LLLocalytics.openSession();
  LLLocalytics.upload();
  console.warn("Logging value ", t);
//  LLLocalytics.setLoggingEnabled(t);
}

};
