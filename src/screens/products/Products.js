import React from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";

import { colors } from "../../utils";
import { ProductItem } from "../../components";

export default class Products extends React.Component {
  state = {
    loading: false,
    products: []
  };

  componentDidMount() {
    this.setState({
      loading: true
    });

    this.fetchData();

    this.setState({
      loading: false
    });
  }

  fetchData = () => {
    fetch("http://193.70.34.240/rnapi/api/v1/products")
      .then(response => response.json())
      .then(response =>
        this.setState({
          products: response
        })
      );
  };

  render() {
    const { loading, products } = this.state;

    if (loading) {
      return (
        <View style={styles.container}>
          <Text>Loading</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          onRefresh={() => this.fetchData()}
          refreshing={loading}
          data={products}
          renderItem={({ item }) => <ProductItem item={item} />}
          keyExtractor={({ id }) => id.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightblue,
    flex: 1
  }
});
