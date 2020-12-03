import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity, Image, SafeAreaView, StyleSheet } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Library = ({ route, navigation }) => {

  const [ items, setitems ] = useState([]);

  useEffect ( () => {
    getData()
  })

  
const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@items')
    if (jsonValue != null) {
      setitems(JSON.parse(jsonValue))
  }
}

  catch(e) {
    console.log(e);
  }
}

  const Details = (item) => {
    navigation.navigate('Photo Details', {name: item.name, image: item.image});
  }


  const itemCell = (item, index) => (
    <TouchableOpacity
     style={styles.cell}
     onPress={() => Details(item)}
     key={index}
    >

      <Image style={styles.image} source={{ uri: 'data:image/jpeg;base64,' + item.image }} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.grid}>
      <ScrollView contentContainerStyle={styles.grid}>
    {
      items.map( (item, index) => (
        itemCell(item, index)
      ))
    }
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
  }
export default Library;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  grid: {
    flex: 1,
    marginTop: 3,
    marginLeft: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 24,
    marginLeft: 20,
  },
  cell: {
    width: 125,
    height: 125,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  image: {
    width: 125,
    height: 125,
  }
});
