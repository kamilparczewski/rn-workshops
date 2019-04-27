import React from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";

import { colors } from "../../utils";
import { ProductItem } from "../../components";

export default class Products extends React.Component {
  state = {
    loading: false,
    products: []
  };

  async componentDidMount() {
    this.setState({
      loading: true
    });

    await fetch("http://193.70.34.240/rnapi/api/v1/products")
      .then(response => response.json())
      .then(response =>
        this.setState({
          products: response
        })
      );

    this.setState({
      loading: false
    });
  }

  render() {
    const { loading, products } = this.state;

    if (loading) {
      return <Text>Loading</Text>;
    }

    return (
      <View style={styles.container}>
        <FlatList
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
