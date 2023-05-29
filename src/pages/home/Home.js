import React from 'react';
import { View, Text } from 'react-native';

const Task = (props) => {
  return (
    <View>
      <Text>{`${"Lavar louça"}`}</Text>
      <Text>{`${props.estimateAt}`}</Text>
      <Text>{`${props.doneAt}`}</Text>
    </View>
  );
};

export default Task;
