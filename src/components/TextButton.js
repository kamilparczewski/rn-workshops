import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { colors } from "../utils";

const TextButton = ({text, onPress}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: colors.blue,
    marginVertical: 20
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default TextButton;
