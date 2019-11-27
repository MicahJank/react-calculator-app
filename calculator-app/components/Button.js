import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const Button = ({ buttonText, style, button, onPressHandler }) => {

    return (
        <TouchableOpacity onPress={() => {
            onPressHandler(buttonText)
        }} style={button} >
            <Text style={style}>{buttonText}</Text>  
        </TouchableOpacity>
    );
};

export default Button; 