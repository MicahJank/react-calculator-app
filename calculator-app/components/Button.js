import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const Button = ({ buttonText, style, button, id, onPressHandler }) => {

    const test = () => {
        console.log(id);
    }

    return (
        <TouchableOpacity onPress={test} style={button} >
            <Text style={style}>{buttonText}</Text>  
        </TouchableOpacity>
    );
};

export default Button;