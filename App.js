import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

import { colors } from './helpers'

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
      <View style={styles.listItem}>
        <Text>{item.weight}</Text>
        <Text>{item.date}</Text>
        <TouchableOpacity
          onPress={()=> {
          console.log('edit');
          }}
        >
          <Text>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=> {
          console.log('delete');
          }}
        >
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
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
            <Text style={styles.label}>BMI</Text>
            <TextInput
              onChangeText={this.onChangeBMI}
              value={this.state.BMI}
              style={styles.input}
              keyboardType="numeric"
              placeholder="Please type your BMI"
              placeholderTextColor={colors.blue}
            />
          </View>

          <View style={styles.listContainer}>
            <Text style={styles.label}>MY WEIGHT</Text>
            <FlatList
              data={this.state.weights}
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={this.onAddWeight}>
              <Text style={styles.buttonText}>ADD WEIGHT</Text>
            </TouchableOpacity>
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
  input: {
    height: 40,
    width: '100%',
    fontSize: 15,
    borderBottomWidth: 3,
    borderRadius: 3,
    borderColor: colors.blue,
  },
  label: {
    width: '100%',
    justifyContent: 'flex-start',
    fontWeight: 'bold',
    color: colors.blue
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: colors.blue,
    marginVertical: 20
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10
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
