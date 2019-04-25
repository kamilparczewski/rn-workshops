import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

// Components
import TextButton from "./src/components/TextButton";
import IconButton from "./src/components/IconButton";
import Input from "./src/components/Input";
import WeightRow from "./src/components/WeightRow";

// Helpers
import { colors } from './src/utils'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      BMI: '',
      weights: [
        {weight: 90, date: '01.05.2017', id: 1},
        {weight: 87, date: '01.02.2017', id: 2},
      ],
    }
  }

  onChangeBMI = (inputValue) => {
    this.setState({
      BMI: inputValue,
    })
  };

  onAddWeight = () => {
    console.log(this.state.BMI);
  };

  renderItem = ({item}) => {
    console.log(item);
    return (
      <WeightRow
        weight={item.weight}
        date={item.date}
        onEdit={()=> {
          console.log('edit action');
        }}
        onDelete={()=> {
          console.log('delete action');
        }}
      />
    )
  };

  keyExtractor = (item, index) => {
    return `${index}`
  };

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Input
              keyboardType="numeric"
              label="BMI"
              onChangeText={this.onChangeBMI}
              placeholder="Please type your BMI"
              value={this.state.BMI}
            />
          </View>

          <View style={styles.listContainer}>
            <Text style={styles.label}>MY WEIGHT</Text>
            <FlatList
              data={this.state.weights}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TextButton text="ADD WEIGHT" onPress={this.onAddWeight} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.lightblue,
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginVertical: 50,
    marginHorizontal: 20
  },
  label: {
    width: '100%',
    justifyContent: 'flex-start',
    fontWeight: 'bold',
    color: colors.blue,
    marginBottom: 10
  },
  buttonContainer: {
    width: '100%',
    height: 40
  },
  listContainer: {
    flex: 1,
    marginVertical: 20
  },
  inputContainer: {
    width: '100%'
  }
});
