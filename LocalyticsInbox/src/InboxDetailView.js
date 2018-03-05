import React from 'react';

import {
  WebView
} from 'react-native';

export default class InboxDetailView extends React.Component {
  static navigationOptions = {
    title: 'Inbox Detail View',
  };

  render() {
    const { navigation: { state: { params: { creative } } } } = this.props;

    return (
      <WebView source={{ uri: creative }} />
    );
  }
}