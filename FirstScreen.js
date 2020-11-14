import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { TouchableOpacity, Image, SafeAreaView, FlatList, Button, StyleSheet, Text, View } from 'react-native';

const FirstScreen = ({ route, navigation }) => {

  const { items } = route.params;

  useEffect ( () => {
    console.log(items)
  })

  const goToSecond = (item) => {
    navigation.navigate('2# neercS si sihT', {name: item.name, image: item.image});
  }

  const goToThird = () => {
    navigation.navigate('This is Screen #3');
  }

  const itemRow = ({ item }) => (
    <TouchableOpacity
     style={styles.cell}
     onPress={() => goToSecond(item)}
    >

      <Image style={styles.image}source={item.image} />
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.grid}>
      <FlatList
        contentContainerStyle={styles.grid}
        data={items}
        renderItem={itemRow}
        keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  grid: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
  },
});
