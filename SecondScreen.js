import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Button, StyleSheet, Text, View } from 'react-native';

const SecondScreen = ({ navigation, route }) => {

  const { name, image } = route.params;


  const goBackToFirst = () => {
    navigation.navigate('This is Screen #1');
  }

  const goToThird = () => {
    navigation.navigate('This is Screen #3');
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>
        {name}
        </Text>
        <Button title="Go To Screen #3" 
        onPress={goToThird} />
        <Button title="Go Back To Screen #1" 
        onPress={goBackToFirst} />
      <StatusBar style="auto" />
    </View>
  );
}
export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 50,
    marginBottom: 35,
  },  
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    marginBottom: 10,
  }
});
