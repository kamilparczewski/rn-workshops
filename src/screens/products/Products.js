import React from "react";
import { Text, FlatList } from "react-native";

import { ScreenContainer, ProductItem } from "../../components";

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
      <ScreenContainer>
        <FlatList
          data={[...products, ...list]}
          renderItem={({ item }) => <ProductItem item={item} />}
          keyExtractor={({ id }) => id.toString()}
          contentContainerStyle={{ flex: 1 }}
        />
      </ScreenContainer>
    );
  }
}

const list = [
  { id: 4, name: "test", description: "desc" },
  { id: 5, name: "test", description: "desc" },
  { id: 6, name: "test", description: "desc" },
  { id: 7, name: "test", description: "desc" },
  { id: 8, name: "test", description: "desc" },
  { id: 9, name: "test", description: "desc" },
  { id: 10, name: "test", description: "desc" },
  { id: 11, name: "test", description: "desc" },
  { id: 12, name: "test", description: "desc" },
  { id: 13, name: "test", description: "desc" },
  { id: 14, name: "test", description: "desc" },
  { id: 15, name: "test", description: "desc" },
  { id: 16, name: "test", description: "desc" },
  { id: 17, name: "test", description: "desc" }
];
