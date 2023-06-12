import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import InputText from '../components/InputText'
import PatternButton from '../components/PatternButton'
import Modal from '../components/Modal'

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const onChangeEmail = (e) => {
    setEmail(e.value);
  }

  const onChangeSenha = (e) => {
    setSenha(e.value);
  }
  return (
    <View style={styles.view}>
        <div style={styles.divUp}>
            <h1>Login</h1>
        </div>
        <div style={styles.divDown}>
          <div style={styles.divCenter}>
             
              <InputText secure='true' onChangeText={onChangeSenha} value={senha}>Senha</InputText>
              <PatternButton color="#36457D" width="80vw">Entrar</PatternButton>
            </div>
        </div>
    </View>
  )
}

const styles = StyleSheet.create({
  divDown:{
    width: '250vw',
    height : '75vh',
    backgroundImage: 'linear-gradient(#1E2749, #212B53)',
    borderTopLeftRadius: '150rem',
    borderTopRightRadius: '150rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  divUp:{
    height: '25vh'
  },
  divCenter:{
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view:{
    backgroundColor:'red',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  
  }
})