import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Display from './components/Display.js';
import ButtonContainer from './components/ButtonContainer.js';

export default function App() {

  const [state, setState] = useState({
    previousNum: null,
    currentNum: null,
    operation: null
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle = "light-content" hidden = {false} translucent = {true}/>
      <Display displayState={state.currentNum} />
      <ButtonContainer state={state} setState={setState} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    color: 'white',
    paddingTop: 20,
    padding: 10,
  },
  text: {
    color: '#fff'
  },
});
