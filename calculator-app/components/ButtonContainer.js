import React from 'react';

import { StyleSheet, View } from 'react-native';

import Button from './Button.js';

const ButtonContainer = () => {

    return (
        <View style={styles.container}>
            <Button button={styles.otherButton} style={styles.otherText} buttonText={'AC'} />
            <Button button={styles.otherButton} style={styles.otherText} buttonText={'+/-'} />
            <Button button={styles.otherButton} style={styles.otherText} buttonText={'%'} />
            <Button button={styles.operatorButton} style={styles.operatorText} buttonText={'/'} />
            <Button button={styles.operatorButton} style={styles.operatorText} buttonText={'/'} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    numberText: {
        color: '#fff',
        fontSize: 35
    },
    operatorText: {
        color: '#fff',
        fontSize: 35,
    },
    otherText: {
        color: '#000',
        fontSize: 35
    },
    numberButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333333',
        borderColor: '#fff',
        borderRadius: 50,
        width: 70,
        height: 70
    },
    operatorButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FE9F0A',
        borderColor: '#fff',
        borderRadius: 50,
        width: 70,
        height: 70
    },
    otherButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333333',
        borderColor: '#000',
        borderRadius: 50,
        width: 70,
        height: 70
    }
})

export default ButtonContainer;