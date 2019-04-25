import React from 'react';
import { Picker, View } from 'react-native'

import Label from './Label';

const CustomPicker = ({ onChange, options, selectedValue, text }) => (
  <View>
    <Label text={text} />
    <Picker
      selectedValue={selectedValue}
      onValueChange={onChange}
    >
      {options.map((option, index) =>
        <Picker.Item
          key={index}
          label={option.label}
          value={option.value}
        />
      )}
    </Picker>
  </View>
);

CustomPicker.defaultProps = {
  onChange: () => {},
  options: [],
};

export default CustomPicker;
