import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from "../utils";

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightblue,
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
});

export default ScreenContainer;
