import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'react-native';
import Title from '../../../components/Title';
import PatternButton from '../../../components/PatternButton';
import InputText from '../../../components/InputText';
import BottomBar from '../../../components/BottomBar';

export default function Verify({navigation}){

  const home = () => {
    navigation.push("Home");
  };

  return (

    <View style={styles.container}>
      <StatusBar backgroundColor="#EAEAEA" barStyle="dark-content" />
      <Image
         source={require('../../../assets/verify.png')}
         style={[styles.image, { marginBottom: 10 }]} 
         resizeMode='contain'
       />
        <Title style={styles.title} text={"Falta pouco!"} />
        <Text>Digite o código fornecido pelo adm para entrar em uma casa</Text>

       <View style={styles.content}>
        <InputText/>
         <PatternButton backgroundColor="#DCDCDC" color="#36457D" onPress={home}>Solicitar Acesso</PatternButton>
        
       </View>
       <BottomBar/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#EAEAEA",
  },
  image: {
    marginTop: 60,
    marginBottom: 20,
    width: 222,
    height: 228,
  },
  content: {
    marginTop: 20,
    padding: 15,
    width: '80%',
    height: '25%',
    alignItems: 'center',
    backgroundColor: "#232E5A",
    borderRadius: 30,
  },

  select: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 700,
  },
});
