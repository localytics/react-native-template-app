# react-native-template-apps

Sample apps demonstrating the usage of the Localytics React Native SDK.

## Included apps
#### LocalyticsReactTest
Tests all of `localytics-react-native` APIs
#### LocalyticsInbox
Sample Inbox implementation

## Developer Setup

1. `brew install node`
2. `brew install watchman`
3. `brew install yarn`
4. `npm install -g react-native-cli`

## Creating your own app

Using Facebook's docs (https://facebook.github.io/react-native/docs/getting-started.html), setup a new React Native app:

1. `npm install -g create-react-native-app`
2. `create-react-native-app SampleProjectName`
3. `cd SampleProjectName`
4. `npm start`

You can use this app to get familiar with React Native.
Once you're ready to write native code for each platform (iOS/Android) and integrate Localytics, you'll need to eject from Create React Native App:

1. `cd SampleProjectName`
2. `npm run eject`
3. Select `React Native: I'd like a regular React Native project.`
4. Name your app (should be same as directory name)

Next, follow the instructions to integrate Localytics.

## Localytics Documentaion 
https://docs.localytics.com/dev/react-native.html

## Running Project

### iOS

1. `cd SampleProjectName`
2. `react-native run-ios`

Note: If you see the `":CFBundleIdentifier", Does Not Exist` error, you can just open
and run the project directly from Xcode (path `ios/LocalyicsReactTest.xcworkspace`). See this
issue for some possible fixes: https://github.com/facebook/react-native/issues/7308.

### Android

#### Define SDK location
Without defining the SDK location, you'll likely see this error:
`> SDK location not found. Define location with sdk.dir in the local.properties file or with an ANDROID_HOME environment variable.`

Example of how to add local.properties file:
1. `cd SampleProjectName`
2. `cd android`
3. `touch local.properties`

Add the following line:
`sdk.dir = /Users/YOUR_USERNAME_HERE/Library/Android/sdk`

#### Run

You may want to clean your android project after configuration and before running:

1. `cd SampleProjectName`
2. `cd android`
3. `./gradlew clean`

Ensure you have a physical device in debugging mode connected to your computer, or an Android emulator running.

1. `cd SampleProjectName`
2. `react-native run-android`

Note: Java 8 is required to build the project.
