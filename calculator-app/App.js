import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Display from './components/Display.js';
import ButtonContainer from './components/ButtonContainer.js';
import Button from './components/Button.js';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar barStyle = "light-content" hidden = {false} translucent = {true}/>
      <Display />
      <ButtonContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    color: 'white',
    paddingTop: 20,
    fontFamily: 'Helvetica'
  },
  text: {
    color: '#fff'
  },
});
