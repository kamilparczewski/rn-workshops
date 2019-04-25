import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import Label from './Label';
import { colors } from "../utils";

const Input = (props) => (
  <View style={styles.inputWrapper}>
    {props.label ? <Label text={props.label} /> : null}
    <TextInput
      {...props}
      style={styles.input}
      placeholderTextColor={colors.blue}
    />
  </View>
);

Input.defaultProps = {
  label: '',
};

const styles = StyleSheet.create({
  inputWrapper: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',

  },
  input: {
    height: 40,
    width: '100%',
    fontSize: 15,
    borderBottomWidth: 3,
    borderRadius: 3,
    borderColor: colors.blue,
  },
});

export default Input;
