import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { colors } from "../utils";

const ProductItem = ({ item }) => (
  <View style={productStyles.container}>
    <View style={productStyles.textContainer}>
      <Text style={productStyles.name}>{item.name}</Text>
      <Text numberOfLines={3}>{item.description}</Text>
    </View>
    <Image
      style={productStyles.picture}
      source={{
        uri:
          "https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/10/31/Photos/Processed/fruits-kFLF--621x414@LiveMint.jpg"
      }}
    />
  </View>
);

const productStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderColor: colors.gray,
    flexDirection: "row",
    padding: 10,
    borderWidth: 0.2,
    height: 90
  },
  textContainer: {
    flex: 2
  },
  name: {
    fontWeight: "bold"
  },
  picture: {
    flex: 1
  }
});

export default ProductItem;
