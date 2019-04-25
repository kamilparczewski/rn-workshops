import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { ProfileTabBarIcon, WeightTabBarIcon } from './icons';
import { Products, Profile, AddWeight, Weight } from '../screens';

const ProductsStack = createStackNavigator({
  Products,
});

ProductsStack.navigationOptions = {
  tabBarLabel: 'Products',
  tabBarIcon: WeightTabBarIcon,
};

const ProfileStack = createStackNavigator({
  Profile
})

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ProfileTabBarIcon,
};

const WeightStack = createStackNavigator({
  Weight,
  AddWeight,
})

WeightStack.navigationOptions = {
  tabBarLabel: 'Weight',
  tabBarIcon: WeightTabBarIcon,
};

export default createBottomTabNavigator({
  WeightStack,
  ProfileStack,
  ProductsStack,
});
