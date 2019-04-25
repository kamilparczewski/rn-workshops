import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from 'expo';

import { colors } from '../utils';

const TabBarIcon = ({ focused, name }) => (
  <Icon.Ionicons
    color={focused ? colors.blue : colors.lightblue }
    name={name}
    size={26}
    style={styles.icon}
  />
);

const styles = StyleSheet.create({
  icon: {
    marginBottom: -3,
  },
});

export default TabBarIcon;
