import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ThirdScreen = ({ navigation }) => {

  const goToSecond = () => {
    navigation.navigate('2# neercS si sihT');
  }

  const goBackToFirst = () => {
    navigation.navigate('This is Screen #1');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Third Screen
        </Text>
        <Button title="Go Back To Screen #1" 
        onPress={goBackToFirst} />
        <Button title="Go To Screen #2" 
        onPress={goToSecond} />
      <StatusBar style="auto" />
    </View>
  );
}
export default ThirdScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 60,
    marginBottom: 35,
  }
});
