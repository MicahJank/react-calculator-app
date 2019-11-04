import React from 'react';

import { StyleSheet, View } from 'react-native';

import Button from './Button.js';

const ButtonContainer = () => {

    return (
        <Button />
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
})

export default ButtonContainer;