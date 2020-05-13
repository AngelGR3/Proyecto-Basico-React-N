import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserList from './src/screens/UserList'
import UserDetails from './src/screens/UserDetails'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lista" component={UserList} />
        <Stack.Screen name="Detalles" component={ UserDetails } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;