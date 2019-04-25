import React from "react";
import { StyleSheet } from "react-native";

import { ScreenContainer } from "../../components";

export default class Products extends React.Component {
  state = {
    loading: false,
    products: []
  };

  render() {
    return <ScreenContainer />;
  }
}

const styles = StyleSheet.create({});
