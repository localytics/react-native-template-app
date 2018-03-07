import React from 'react';
import { Text, View, Image } from 'react-native';

export default class InboxListItem extends React.Component {

  render() {
    const { campaign: { title, summary, thumbnailUrl, read } } = this.props;
    console.log(this.props.campaign);

    return (
      <View style={styles.listItem}>
        <Image
          style={styles.thumbnailView}
          source={{ uri: thumbnailUrl }}
        />
        <View>
            <Text style={read ? styles.readTitle : styles.unreadTitle}>{title}</Text>
            <Text style={read ? styles.readSummary : styles.unreadSummary}>{summary}</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  listItem: {
    borderBottomWidth: 3,
    padding: 10,
    borderColor: '#ddd',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flex: 1,
  },
  thumbnailView: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  unreadTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  },
  readTitle: {
    fontSize: 16,
    color: 'gray'
  },
  unreadSummary: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black'
  },
  readSummary: {
    fontSize: 10,
    color: 'gray'
  }
};
