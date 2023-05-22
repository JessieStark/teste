import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function Login(){
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Login</Text>
            <View style={styles.circle}>
                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.input} placeholder="Digite seu email"/>
                <Text style={styles.text}>Senha</Text>
                <TextInput style={styles.input} placeholder="Digite sua senha"/>
                <TouchableOpacity>
                    <Text style={styles.button}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.register}>Não possui uma conta? Cadastre-se</Text>
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
      marginBottom: 20,  
      fontSize: 36,
      color: "#FFF",
      fontWeight: 600,
      textAlign: 'center',
    },
    text:{
        fontSize: 20,
        marginTop: 30, 
        fontWeight: 600,  
        textAlign: 'center',
    },
    input:{
        fontSize: 16,
        marginBottom: 12,  
        textAlign: 'center',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#E6E6E6",
    },
    button:{
        backgroundColor: "#212B53",
        fontSize: 20,
        marginTop: 30, 
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

  });
