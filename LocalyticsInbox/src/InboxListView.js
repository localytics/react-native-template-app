import React from 'react';

import {
  TouchableOpacity,
  FlatList
} from 'react-native';

import InboxListItem from './InboxListItem';
import LLLocalytics from 'localytics-react-native-dev';

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
                  if (item.hasCreative) {
                      LLLocalytics.setInboxCampaignRead({'campaignId': item.campaignId, 'read': true});
                      LLLocalytics.tagInboxImpression({'campaignId': item.campaignId, 'action': 'click'});
                      LLLocalytics.refreshInboxCampaigns().then((campaigns) => {
                        try {
                          this.setState({ dataSource: campaigns });
                        } catch(e) {
                          console.error(e);
                        }
                      });
                      navigate('InboxDetailView', { creative: item.creativeFilePath });
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
