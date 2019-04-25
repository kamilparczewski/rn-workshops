import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Input, Picker, TextButton } from '../../components'

export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      birthDate: '',
      gender: null,
      height: null,
      name: '',
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
    const { name, gender, height, birthDate } = this.state;

    return (
      <View>
        <View style={styles.inputWrapper}>
          <Input
            label="NAME"
            onChange={this.onChange('name')}
            value={name}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Input
            keyboardType="numeric"
            label="HEIGHT"
            onChange={this.onChange('height')}
            value={height}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Input
            label="BIRTH DATE"
            onChange={this.onChange('birthDate')}
            value={birthDate}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Picker
            onChange={this.onChange('gender')}
            options={[
              { label: 'Female', value: 'female' },
              { label: 'Male', value: 'Male' },
            ]}
            selectedValue={gender}
            text="GENDER"
          />
        </View>

        <TextButton
          text="SAVE"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputWrapper: {
    marginVertical: 10,
  },
});
