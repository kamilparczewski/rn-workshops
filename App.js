import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import { colors } from './helpers'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      BMI: '',
      weights: [],
    }
  }

  onChangeBMI = (inputValue) => {
    this.setState({
      BMI: inputValue,
    })
  };

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.container}>
          <Text style={styles.label}>BMI</Text>
          <TextInput
            onChangeText={this.onChangeBMI}
            value={this.state.BMI}
            style={styles.input}
            keyboardType="numeric"
            placeholder="Please type your BMI"
            placeholderTextColor={colors.blue}
          />

          <Text>BMI: {this.state.BMI}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.lightblue,
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginVertical: 50,
    marginHorizontal: 20
  },
  input: {
    height: 40,
    width: `100%`,
    fontSize: 15,
    borderBottomWidth: 3,
    borderRadius: 3,
    borderColor: colors.blue,
  },
  label: {
    width: '100%',
    justifyContent: 'flex-start',
    fontWeight: 'bold',
    color: colors.blue
  },
});
