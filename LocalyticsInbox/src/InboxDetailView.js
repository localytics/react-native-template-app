import React from 'react';

import { LLWebView } from 'localytics-react-native';
import { StyleSheet } from 'react-native';

export default class InboxDetailView extends React.Component {
  static navigationOptions = {
    title: 'Inbox Detail View',
  };

  render() {
    const { navigation: { state: { params: { creative } } } } = this.props;

    return (
      <LLWebView style={styles.webView} campaign={ creative } />
    );
  }
}

var styles = StyleSheet.create({
  webView: {
    flex: 2
  },
});