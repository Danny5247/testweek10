import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Button, StyleSheet, Text, View } from 'react-native';

const Details = ({ navigation, route }) => {

  const { name, image } = route.params;


  const goToLibrary = () => {
    navigation.navigate('App Library');
  }




  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: 'data:image/jpeg;base64,' + image }} />
      <Text style={styles.title}>
        {name}
        </Text>
        <Button title="Go back to Library" 
        onPress={goToLibrary} />
      <StatusBar style="auto" />
    </View>
  );
}
export default Details;

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
