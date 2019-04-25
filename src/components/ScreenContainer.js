import React from 'react';
import { Keyboard, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

import { colors } from "../utils";

const ScreenContainer = ({ children }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      {children}
    </View>
  </TouchableWithoutFeedback>
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
