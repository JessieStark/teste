import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-web';
import PatternButton from '../../../components/PatternButton';
import InputText from '../../../components/InputText';
import Title from '../../../components/Title';
import BottomBar from '../../../components/BottomBar';
import Header from '../../../components/Header';
import Task from '../../../components/Task';

export default function Home({ navigation }) {

  const login = () => {
    navigation.push("Login");
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.circle}>
        <Title text="Home" color="#1E1E1E" fontSize={24} />
        <View style={styles.line}>
          <View style={styles.itemContainer}>
            <Title text="Minhas Tarefas" color="#1E1E1E" fontSize={20} />
          </View>
          <View style={styles.itemContainer}>
            <Title text="Mostrar todas" color="#36457D" fontSize={14} />
          </View>
        </View>
        <Task desc="Tirar lixo" pontuacao="15"/>
        <Task desc="Lavar banheiro" pontuacao="25" doneAt="02-05"/>
        <Task desc="Lavar a louça" pontuacao="10" doneAt=""/>
        <Task desc="Estender roupas" pontuacao="05" doneAt=""/>
        <Task desc="Lavar quintal" pontuacao="25" doneAt="02-05"/>
        <Title text="Pontuação" color="#1E1E1E" fontSize={24} />
        <View style={styles.pontuacao}>
        <Text style={styles.conteudo}>05 pontos</Text>
        <Text style={styles.conteudo}>01 tarefa concluida</Text>
        </View>
      </View>
      
      <BottomBar />

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEAEA",
  },
  circle: {
    width: '100%',
    flex: 3,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
  },
  header: {
    marginTop: 25,
    marginBottom: 10,
    fontSize: 32,
    color: "#36457D",
    fontWeight: 700,
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 600,
    textAlign: 'center',
    color: "#5A5A5A",
  },

  line: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  itemContainer: {
    marginHorizontal: '10%',
  },
  pontuacao: {
    width: 350,
    marginTop: 15,
    padding: 10,
    backgroundColor: '#24305F',
    alignItems: 'center',
    borderRadius: 30,
  },

  conteudo: {
    padding: 1,
    fontSize: 18,
    fontWeight: 600,
    color: '#FFFFFF',
  }
});
