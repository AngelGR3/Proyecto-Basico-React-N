/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import UserList from './src/screens/UserList'
import UserDetails from './src/screens/UserDetails'



const Stack = createStackNavigator();


export default function App(){
  return(
    <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name ="Lista de Usuarios" component= {UserList} />
         <Stack.Screen name ="Detalles de Usuario" component= { UserDetails } />
     </Stack.Navigator>
    </NavigationContainer>
  );
  }
