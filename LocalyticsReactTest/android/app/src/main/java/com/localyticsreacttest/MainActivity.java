package com.localyticsreacttest;

import android.content.Intent;

import com.facebook.react.ReactActivity;

import com.localytics.android.Localytics;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "LocalyticsReactTest";
    }

    @Override
    public void onNewIntent(Intent intent) {
      super.onNewIntent(intent);

      Localytics.onNewIntent(this, intent);
    }
}
