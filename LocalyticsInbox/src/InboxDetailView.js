import React from 'react';

import { LLWebView } from 'localytics-react-native';

export default class InboxDetailView extends React.Component {
  static navigationOptions = {
    title: 'Inbox Detail View',
  };

  render() {
    const { navigation: { state: { params: { campaignId } } } } = this.props;

    return (
      <LLWebView campaign={ campaignId } />
    );
  }
}