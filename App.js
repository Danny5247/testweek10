import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';

const Stack = createStackNavigator();

const App = () => {

  const [items, setItems] = useState ([
    {id: 1, name: 'First Item', image: require('./assets/Logoless.png')},
    {id: 2, name: 'Second Item', image: require('./assets/Fight.jpg')},
    {id: 3, name: 'Third Item', image: require('./assets/Mistake.png')},
    {id: 4, name: 'fourth Item', image: require('./assets/Logoless.png')},
    {id: 5, name: 'fifth Item', image: require('./assets/Fight.jpg')},
    {id: 6, name: 'sixth Item', image: require('./assets/Mistake.png')},
    {id: 7, name: 'seventh Item', image: require('./assets/Logoless.png')},
    {id: 8, name: 'eighth Item', image: require('./assets/Fight.jpg')},
    {id: 9, name: 'ninth Item', image: require('./assets/Mistake.png')},
  ])


  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
          name= "This is Screen #1"
          component={FirstScreen}
          initialParams={{items: items}}
         />

        <Stack.Screen
          name= "2# neercS si sihT"
          component={SecondScreen}
        />

        <Stack.Screen
          name= "This is Screen #3"
          component={ThirdScreen}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
