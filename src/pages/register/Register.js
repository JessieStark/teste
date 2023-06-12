import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-web';
import PatternButton from '../../../components/PatternButton';
import InputText from '../../../components/InputText';
import Title from '../../../components/Title';

export default function Register({navigation}){
    
    const login = () => {
        navigation.push("Login");
      };

    return(
        <View style={styles.container}>
            <Image source={require('../../../assets/logoR.png')}
                style={{width:'80%'}}
                resizeMode="contain"
            />                

            <View style={styles.circle}> 
              <Title text={"Cadastro"}/>
              <View style={styles.line}>
                <View style={styles.itemContainer}>
                    <Text style={styles.text}>Nome</Text>
                    <InputText width={170}/>
                </View>

                <View style={styles.itemContainer}>
                    <Text style={styles.text}>Sobrenome</Text>
                    <InputText width={170} />
                </View>
                </View>
                <Text style={styles.text}>Email</Text>
                <InputText/>
                <Text style={styles.text}>Senha</Text>
                <InputText/>
                <PatternButton title="cadastrar">Cadastrar</PatternButton>
                <TouchableOpacity>
                    <Text style={styles.register} onPress={login}>Já possui uma conta? Fazer login</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#212B53",
      justifyContent: 'center',
      alignItems: 'center',
    },

    circle: {
      width:'100%',
      flex: 2,
      backgroundColor: "#FFFFFF",
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      alignItems: 'center',
    },
    header:{
      marginTop: 15, 
      marginBottom: 10,  
      fontSize: 32,
      color: "#36457D",
      fontWeight: 700,
      textAlign: 'center',
    },
    text:{
        fontSize: 20,
        marginTop: 10, 
        fontWeight: 600,  
        textAlign: 'center',
        color: "#5A5A5A",
    },
    input:{
        fontSize: 16,
        marginBottom: 5,  
        textAlign: 'center',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#E6E6E6",
    },
    button:{
        backgroundColor: "#212B53",
        fontSize: 20,
        marginTop: 10, 
        width: '100%',
        color:"#FFFFFF",
        marginBottom: 10, 
        paddingHorizontal: 10, 
        fontWeight: 600,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',

    },
    register:{
        fontSize: 16,
        marginTop: 10, 
        marginBottom: 10,
        fontWeight: 500,
        color:"#878787",  
        textAlign: 'center',
    },

    line: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
      },
      itemContainer: {
        flex: 1,
        marginRight: 10,
        marginLeft: 10,
        alignItems: 'center',
      },

  });