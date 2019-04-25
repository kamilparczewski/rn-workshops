import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { colors } from "../utils";

const Label = ({ text }) => (
  <Text style={styles.label}>
    {text}
  </Text>
);

Label.defaultProps = {
  icon: 'close',
};

const styles = StyleSheet.create({
  label: {
    color: colors.blue,
    fontWeight: 'bold',
  },
});

export default Label;
