import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import Label from './Label';
import WeightRow from './WeightRow';
import { weightHelper } from '../utils';

export default class WeightList extends React.Component {
  constructor(props) {
    super(props);

    this.keyExtractor = this.keyExtractor.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  keyExtractor(item) {
    return `${item.id}`;
  }

  renderItem({ item }) {
    return (
      <WeightRow
        date={item.date}
        onEdit={()=> {
          console.log('edit action');
        }}
        onDelete={()=> {
          console.log('delete action');
        }}
        weight={item.weight}
      />
    )
  }

  render() {
    const { weights } = this.props;

    return (
      <View style={styles.container}>
        <Label text="MY WEIGHT" />
        <View style={styles.listWrapper}>
          <FlatList
            data={weightHelper.sortWeights(weights)}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listWrapper: {
    flex: 1,
    marginVertical: 10,
  },
});
