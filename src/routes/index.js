import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
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
      <Stack.Screen name="Home" 
      component={Home} 
      options = {{headerShown: false }}
      />
    </Stack.Navigator>
  );
}
