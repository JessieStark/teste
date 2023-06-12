import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = ({ text, color, fontSize }) => {
  const titleStyle = {
    ...styles.title,
    color: color || styles.title.color,
    fontSize: fontSize || styles.title.fontSize,
  };

  return <Text style={titleStyle}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    marginTop: 25,
    marginBottom: 10,
    fontSize: 32,
    color: '#36457D',
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default Title;