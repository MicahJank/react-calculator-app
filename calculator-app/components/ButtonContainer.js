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
            <Button button={styles.numberButton} style={styles.numberText} buttonText={'7'} />
            <Button button={styles.numberButton} style={styles.numberText} buttonText={'8'} />
            <Button button={styles.numberButton} style={styles.numberText} buttonText={'9'} />
            <Button button={styles.operatorButton} style={styles.operatorText} buttonText={'x'} />
            <Button button={styles.numberButton} style={styles.numberText} buttonText={'4'} />
            <Button button={styles.numberButton} style={styles.numberText} buttonText={'5'} />
            <Button button={styles.numberButton} style={styles.numberText} buttonText={'6'} />
            <Button button={styles.operatorButton} style={styles.operatorText} buttonText={'-'} />
            <Button button={styles.numberButton} style={styles.numberText} buttonText={'1'} />
            <Button button={styles.numberButton} style={styles.numberText} buttonText={'2'} />
            <Button button={styles.numberButton} style={styles.numberText} buttonText={'3'} />
            <Button button={styles.operatorButton} style={styles.operatorText} buttonText={'+'} />
            <Button button={styles.numberButton} style={styles.numberText} buttonText={'0'} />
            <Button button={styles.numberButton} style={styles.numberText} buttonText={'.'} />
            <Button button={styles.operatorButton} style={styles.operatorText} buttonText={'='} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        justifyContent: 'space-between',
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
        width: 75,
        height: 75
    },
    operatorButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FE9F0A',
        borderColor: '#fff',
        borderRadius: 50,
        width: 75,
        height: 75,
        marginHorizontal: 5
    },
    otherButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333333',
        borderColor: '#000',
        borderRadius: 50,
        width: 75,
        height: 75,
        marginHorizontal: 5
    }
})

export default ButtonContainer;