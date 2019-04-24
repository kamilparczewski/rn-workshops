import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons'; // https://expo.github.io/vector-icons/

import { colors } from "../helpers";

const IconButton = ({onPress, icon}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Ionicons name={`md-${icon}`} size={16} color="gray" />
  </TouchableOpacity>
);

IconButton.defaultProps = {
  icon: 'close',
};

const styles = StyleSheet.create({
  button: {
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
    height: 24,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 12,
  },
});

export default IconButton;
