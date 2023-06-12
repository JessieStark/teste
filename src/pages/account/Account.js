import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'react-native';
import Title from '../../../components/Title';
import PatternButton from '../../../components/PatternButton';

export default function Account({navigation}){

  const verify = () => {
    navigation.push("Verify");
  };

  return (

    <View style={styles.container}>
      <StatusBar backgroundColor="#EAEAEA" barStyle="dark-content" />
       <Image
         source={require('../../../assets/userHome.png')}
         style={[styles.image, { marginBottom: 10 }]} 
         resizeMode='contain'// Adicione a margem inferior aqui
       />
       <View style={styles.content}>
         <Title style={styles.title} text={"Tipo de conta"} />
         <Text>Informe se você é administrador da casa ou morador</Text>
         <PatternButton onPress={verify} style={styles.select} backgroundColor="#FFFFFF" color="#2C286B">Morador</PatternButton>
         <PatternButton style={styles.select} backgroundColor="#FFFFFF" color="#2C286B">Administrador</PatternButton>

       </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#EAEAEA",
    justifyContent: 'center',
  },
  image: {
    marginTop: 5,
    marginBottom: 20,
    width: 155,
    height: 190,
  },
  content: {
    marginTop: 5,
    width: '100%',
    alignItems: 'center',
  },

  select: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: 700,
  },
});
