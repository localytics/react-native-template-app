import React from 'react';
import {
  StackNavigator,
} from 'react-navigation';

import Home from './src/Home'
import InboxListView from './src/InboxListView'
import InboxDetailView from './src/InboxDetailView'

const Navigation = StackNavigator({
  Home: { screen: Home },
  InboxListView: { screen: InboxListView },
  InboxDetailView: { screen: InboxDetailView }
});

export default Navigation;