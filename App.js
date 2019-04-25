import React from 'react';

import { ScreenContainer } from './src/components';
import { AddWeight, Products, Profile, Weight } from './src/screens';

export default class App extends React.Component {
  render() {
    return (
      <ScreenContainer>
        <AddWeight />
      </ScreenContainer>
    )
  }
}
