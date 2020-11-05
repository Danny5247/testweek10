import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= "This is Screen #1" component={FirstScreen} />
        <Stack.Screen name= "2# neercS si sihT" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
