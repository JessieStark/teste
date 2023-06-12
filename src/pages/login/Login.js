import React from 'react';
import { useState } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Register } from '../register/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InputText from '../../../components/InputText';
import { Account } from '../account/Account'
import PatternButton from '../../../components/PatternButton';
import Modal1 from '../../../components/Modal';

export default function Login({navigation}){
    const header = () => {
        navigation.push("Register");
      };

      const account = () => {
        navigation.push("Account");
      };

      const [modalVisible, setModalVisible] = useState(false);

      const openModal = () => {
        setModalVisible(true);
      };
    
      const closeModal = () => {
        setModalVisible(false);
      };

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Login</Text>
            <View style={styles.circle}>
                <Text style={styles.text}>Email</Text>
                <InputText/>
                <Text style={styles.text}>Senha</Text>
                <InputText/>
                <TouchableOpacity onPress={openModal}>
                    <Text style={styles.register}>Esqueceu a senha? Recuperar senha</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={header}>
                    <Text style={styles.register}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
                <PatternButton title="entrar" onPress={account}>Entrar</PatternButton>
                <Modal1 visible={modalVisible} onClose={closeModal} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#212B53",
    },
    circle: {
      width:"100%",
      flex: 3,
      backgroundColor: "#FFFFFF",
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25, 
      alignItems: 'center',    
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

    register:{
        fontSize: 16,
        marginTop: 10, 
        marginBottom: 10,
        fontWeight: 500,
        color:"#878787",  
        textAlign: 'center',
    },

  });
