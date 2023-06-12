import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const BottomBar = () => {
  return (
    <View style={styles.bottomBar}>
      <Image source={require('../assets/bottomranking.png')}
                style={{width: 25, height: 26}}
               
            />  
             <Image source={require('../assets/bottomLeilao.png')}
                style={{width: 25, height: 26}}
               
            />  
             <Image source={require('../assets/bottomConfig.png')}
                style={{width: 25, height: 26}}
               
            />  
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});

export default BottomBar;