import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
       <Image source={require('../assets/notif.png')}
                style={{width: 25, height: 26}}
               
            />  
            <Text style={styles.headerText}>Isa</Text>
            <Image source={require('../assets/iconuser.jpg')}
                style={{width: 50, height: 50, borderRadius: 55 * 2,}}
               
            />  

    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',

  },
  headerText: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default Header;
