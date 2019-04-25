import React from "react";
import { StyleSheet } from "react-native";

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
    return <ScreenContainer />;
  }
}

const styles = StyleSheet.create({});
