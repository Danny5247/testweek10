import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const SecondScreen = ({ navigation }) => {

  const goBackToFirst = () => {
    navigation.navigate('This is Screen #1');
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Second Screen
        </Text>
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
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    marginBottom: 35,
  }
});
