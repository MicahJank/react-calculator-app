import React from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import { white } from 'ansi-colors';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar barStyle = "light-content" hidden = {false} translucent = {true}/>
      <Text style={styles.text}>Calculator App baby!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff'
  },
});
