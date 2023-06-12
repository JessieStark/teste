import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register'
import Account from '../pages/account/Account'
import Verify from '../pages/verify/Verify'
import Home from '../pages/home/Home'

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      
      <Stack.Screen name="Login" 
      component={Login} 
      options = {{headerShown: false }}
      />
      <Stack.Screen name="Register" 
      component={Register} 
      options = {{headerShown: false }}
      />
      <Stack.Screen name="Account" 
      component={Account} 
      options = {{headerShown: false }}
      />
      <Stack.Screen name="Verify" 
      component={Verify} 
      options = {{headerShown: false }}
      />
      <Stack.Screen name="Home" 
      component={Home} 
      options = {{headerShown: false }}
      />

    </Stack.Navigator>
  );
}
