import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Input, TextButton } from '../../components'

export default class AddWeight extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      weight: null,
    };
  }
  render() {
    const { date, weight } = this.state;

    return (
      <View>
        <Input
          label="WEIGHT"
          value={weight}
        />

        <Input
          label="DATE"
          value={date}
        />

        <TextButton
          text="SAVE"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
