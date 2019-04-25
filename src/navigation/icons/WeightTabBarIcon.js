import React from 'react';
import { Platform } from 'react-native';

import { TabBarIcon } from '../../components';

const WeightTabBarIcon = ({ focused }) => (
  <TabBarIcon
    focused={focused}
    name={Platform.OS === 'ios' ? 'ios-information-circle' : 'md-information-circle'}
  />
)

export default WeightTabBarIcon;
