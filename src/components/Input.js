import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

import { colors } from "../utils";

const Input = (props) => (
  <View style={styles.inputWrapper}>
    {props.label ? <Text style={styles.label}>{props.label}</Text> : null}
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
  label: {
    width: '100%',
    justifyContent: 'flex-start',
    fontWeight: 'bold',
    color: colors.blue
  },
});

export default Input;
