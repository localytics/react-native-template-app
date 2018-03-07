/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@import Localytics;

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [Localytics autoIntegrate:@"YOUR-LOCALYTICS-APP-KEY"
      withLocalyticsOptions:@{
                              LOCALYTICS_WIFI_UPLOAD_INTERVAL_SECONDS: @5,
                              LOCALYTICS_GREAT_NETWORK_UPLOAD_INTERVAL_SECONDS: @10,
                              LOCALYTICS_DECENT_NETWORK_UPLOAD_INTERVAL_SECONDS: @30,
                              LOCALYTICS_BAD_NETWORK_UPLOAD_INTERVAL_SECONDS: @90
                              }
              launchOptions:launchOptions];
  
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"LocalyticsInbox"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

@end
