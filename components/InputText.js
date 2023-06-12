import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

export default function InputText({ width }) {
  return (
    <View style={styles.view}>
      <Text style={styles.text}></Text>
      <TextInput style={[styles.input, { width: width || 250 }]}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto',
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 2,
  },
  view: {
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#f1f2f3',
    borderRadius: 6,
    padding: 3,
  },
});
