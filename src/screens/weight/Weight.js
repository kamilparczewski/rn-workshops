import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { Input, ScreenContainer, TextButton, WeightList } from '../../components'
import { colors, mocks } from '../../utils';

export default class Weight extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bmi: 20,
      weights: mocks.weights,
    };

    this.goToAddWeightScreen = this.goToAddWeightScreen.bind(this);
  }

  goToAddWeightScreen() {
    const { navigation } = this.props;

    navigation.navigate('AddWeight');
  }

  render() {
    const { bmi, weights } = this.state;

    return (
      <ScreenContainer>
        <View style={styles.wrapper}>
          <Input
            editable={false}
            label="BMI"
            value={`${bmi}`}
          />

          <View style={styles.listWrapper}>
            <WeightList weights={weights} />
          </View>

          <TextButton
            onPress={this.goToAddWeightScreen}
            text="ADD WEIGHT"
          />
        </View>
      </ScreenContainer>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'stretch',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  listWrapper: {
    flex: 1,
    marginVertical: 20,
  },
});
