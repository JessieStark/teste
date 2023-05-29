import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-web';
import { Home } from '../home/Home'

export default function Register({navigation}){
    const home = () => {
        navigation.push("Home");
      };
    return(
        <View style={styles.container}>
            <Image source={require('../../../assets/logoR.png')}
                style={{width:'85%'}}
                resizeMode="contain"
            />                

            <View style={styles.circle}>
                <Text style={styles.header}>Cadastro</Text>
                <View style={styles.line}>
            <Text style={styles.text}>Nome</Text>
            <Text style={styles.text}>Sobrenome</Text>
            </View>
                
                <View style={styles.line}>
                <TextInput style={styles.input} placeholder="Digite seu nome"/>
                <TextInput style={styles.input} placeholder="Digite o sobrenome"/>
                </View>
               
                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.input} placeholder="Digite o e-mail"/>
                <Text style={styles.text}>Senha</Text>
                <TextInput style={styles.input} placeholder="Digite sua senha"/>
                <TouchableOpacity>
                    <Text style={styles.button}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.register}>Já possui uma conta? Fazer login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={home}>
                    <Text style={styles.register}>Tasks home user</Text>
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
      flex: 3,
      backgroundColor: "#FFFFFF",
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
    },
    header:{
      marginTop: 30, 
      marginBottom: 10,  
      fontSize: 36,
      color: "#212B53",
      fontWeight: 600,
      textAlign: 'center',
    },
    text:{
        fontSize: 20,
        marginTop: 15, 
        fontWeight: 600,  
        textAlign: 'center',
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
        marginTop: 20, 
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

    line:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 5,
    }

  });