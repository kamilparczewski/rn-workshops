import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Input, TextButton, ScreenContainer } from '../../components'

export default class AddWeight extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      weight: null,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(stateKey) {
    return (value) => {
      this.setState({
        [stateKey]: value,
      });
    };
  }

  render() {
    const { date, weight } = this.state;

    return (
      <ScreenContainer>
        <View>
          <View style={styles.inputWrapper}>
            <Input
              keyboardType="numeric"
              label="WEIGHT"
              onChange={this.onChange('weight')}
              value={weight}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Input
              label="DATE"
              onChange={this.onChange('date')}
              value={date}
            />
          </View>

          <TextButton
            text="SAVE"
          />
        </View>
      </ScreenContainer>
    );
  }
}

const styles = StyleSheet.create({
  inputWrapper: {
    marginVertical: 10,
  },
});
