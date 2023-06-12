import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const PatternButton = (props) => {
  return (
    <View>
      <TouchableOpacity style={[styles.blueButton, { backgroundColor: props.backgroundColor ||  "#36457D" }]} onPress={props.onPress}>
        <Text style={[styles.buttonText, {color: props.color ||  "#f2f3f4" }]}>{props.children}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PatternButton;

const styles = StyleSheet.create({
  blueButton: {
    width: 250,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 900,
    fontFamily: 'Roboto',
  },
});
