import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

const Task = (props) => {
  const [circleStyle, setCircleStyle] = useState({
    backgroundColor: props.doneAt ? '#FFF' : '#FFFF',
    borderColor: props.doneAt ? '#36457D' : '#808080',
    borderWidth: props.doneAt ? 6 : 2,
  });

  const handleCirclePress = () => {
    setCircleStyle((prevStyle) => ({
      ...prevStyle,
      backgroundColor: prevStyle.backgroundColor === '#FFFF' ? '#FFF' : '#FFFF',
      borderColor: prevStyle.borderColor === '#808080' ? '#36457D' : '#808080',
      borderWidth: prevStyle.borderWidth === 2 ? 6 : 2,
    }));
  };

  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.desc + ' '}</Text>
      <Text>{props.pontuacao + ' pontos '}</Text>
      <TouchableOpacity onPress={handleCirclePress}>
        <View style={[styles.circle, circleStyle]} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontFamily: 'Inter_900Black',
    fontSize: 18,
    fontWeight: '700',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
  },
});

export default Task;
