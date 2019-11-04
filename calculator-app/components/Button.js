import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const Button = () => {

    return (
       <View>
           <Text>Im a button</Text>
       </View> 
    );
};

const styles = StyleSheet.create({
    number: {
        color: '#fff'
    },
    operator: {
        color: '#fff'
    },
    other: {
        color: 'black'
    },
});

export default Button;