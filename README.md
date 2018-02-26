# react-native-template-apps

Sample apps demonstrating the usage of the Localytics React Native SDK.

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

## Installing Localytics

### React Native version

Ensure you are using React Native version 0.53.0, defined in your package.json file:
`"react-native": "0.53.0"`

### Android Setup

Ensure you are using the proper version of Android support library and minSdkVersion is high-enough in your app-level build.gradle file:

`minSdkVersion 19`
`dependencies { compile 'com.android.support:support-compat:26.0.2' }`

Add the google and localytics maven urls to your project-level build.gradle file:

`maven { url 'https://maven.google.com' }`
`maven { url 'https://maven.localytics.com/public' }`

### Install npm module

1. `cd SampleProjectName`
2. `npm install`
3. `npm install localytics-react-native-dev --save`

## Linking Localytics

### Automatic Installation

1. `cd SampleProjectName`
2. `react-native link localytics-react-native-dev`

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
