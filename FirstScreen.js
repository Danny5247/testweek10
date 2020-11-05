import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const FirstScreen = ({ navigation }) => {

  const goToSecond = () => {
    navigation.navigate('2# neercS si sihT');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        First Screen
        </Text>
        <Button title="Go To Screen #2" 
        onPress={goToSecond} />
      <StatusBar style="auto" />
    </View>
  );
}
export default FirstScreen;

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
