import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from "../helpers";
import IconButton from "./IconButton";

const WeightRow = ({weight, date, onEdit, onDelete}) => (
  <View style={styles.row}>
    <Text style={styles.weight}>{weight}</Text>
    <Text style={styles.date}>{date}</Text>
    <View style={styles.iconWrapper}>
      <IconButton
        onPress={onEdit}
        icon="create"
      />
    </View>
    <View style={styles.iconWrapper}>
      <IconButton
        onPress={onDelete}
        icon="close"
      />
    </View>
  </View>
);

WeightRow.defaultProps = {
  date: '',
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    backgroundColor: colors.white,
  },
  weight: {
    width: 40,
    fontWeight: 'bold',
  },
  date: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  iconWrapper: {
    marginLeft: 10,
  },
});

export default WeightRow;
