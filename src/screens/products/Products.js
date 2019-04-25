import React from "react";
import { StyleSheet, FlatList } from "react-native";

import { ScreenContainer } from "../../components";

export default class Products extends React.Component {
  state = {
    loading: false,
    products: []
  };

  componentDidMount() {
    this.setState({
      loading: true
    });
    fetch("http://193.70.34.240/rnapi/api/v1/products")
      .then(response => response.json())
      .then(response =>
        this.setState({
          products: response
        })
      )
      .then(() => {
        this.setState({
          loading: false
        });
      });
  }

  render() {
    const { loading, products } = this.state;

    if (loading) {
      return <Text>Loading</Text>;
    }
    <ScreenContainer>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Text style={styles.row}>
            {item.name}
            {item.description}
          </Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </ScreenContainer>;
  }
}

const styles = StyleSheet.create({});
