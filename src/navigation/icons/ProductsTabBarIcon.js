import React from 'react';
import { Platform } from 'react-native';

import { TabBarIcon } from '../../components';

const ProductsTabBarIcon = ({ focused }) => (
  <TabBarIcon
    focused={focused}
    name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
  />
)

export default ProductsTabBarIcon;
