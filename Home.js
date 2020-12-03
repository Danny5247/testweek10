import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Home = ({ navigation }) => {

  const goToLibrary = () => {
    navigation.navigate('App Library');
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Home Screen
        </Text>
        <Button title="Go to Library" 
        onPress={goToLibrary} />

      <StatusBar style="auto" />
    </View>
  );
}
export default Home;

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
