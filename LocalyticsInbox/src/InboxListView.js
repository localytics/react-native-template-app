import React from 'react';

import {
  TouchableOpacity,
  FlatList
} from 'react-native';

import InboxListItem from './InboxListItem';
import LLLocalytics from 'localytics-react-native';

export default class InboxListView extends React.Component {
  static navigationOptions = {
    title: 'Inbox List View',
  };

  state = { dataSource: [] };

  componentWillMount() {
    LLLocalytics.refreshInboxCampaigns().then((campaigns) => {
      try {
        this.setState({ dataSource: campaigns });
      } catch(e) {
        console.error(e);
      }
    });
  }

  comp

  render() {
    const { navigate } = this.props.navigation;
    return (
      <FlatList
        data={this.state.dataSource}
        renderItem={
          ({ item }) =>
            <TouchableOpacity
              onPress={() => {
                  LLLocalytics.inboxListItemTapped({'campaignId': item.campaignId});
                  LLLocalytics.refreshInboxCampaigns().then((campaigns) => {
                        try {
                          this.setState({ dataSource: campaigns });
                        } catch(e) {
                          console.error(e);
                        }
                      });
                  if (item.hasCreative) {
                      navigate('InboxDetailView', { campaignId: item.campaignId });
                  }
               }
              }
            >
              <InboxListItem campaign={item} />
            </TouchableOpacity>
        }
      />
    );
  }
}
