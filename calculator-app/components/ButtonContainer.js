import React from 'react';

import { StyleSheet, View } from 'react-native';

import Button from './Button.js';

const ButtonContainer = () => {

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Button button={styles.otherButton} style={styles.otherText} buttonText={'AC'} />
                <Button button={styles.otherButton} style={styles.otherText} buttonText={'+/-'} />
                <Button button={styles.otherButton} style={styles.otherText} buttonText={'%'} />
                <Button button={styles.operatorButton} style={styles.operatorText} buttonText={'÷'} />
            </View>
            <View style={styles.row}>
                <Button button={styles.numberButton} style={styles.numberText} buttonText={'7'} />
                <Button button={styles.numberButton} style={styles.numberText} buttonText={'8'} />
                <Button button={styles.numberButton} style={styles.numberText} buttonText={'9'} />
                <Button button={styles.operatorButton} style={styles.operatorText} buttonText={'x'} />
            </View>
            <View style={styles.row}>
                <Button button={styles.numberButton} style={styles.numberText} buttonText={'4'} />
                <Button button={styles.numberButton} style={styles.numberText} buttonText={'5'} />
                <Button button={styles.numberButton} style={styles.numberText} buttonText={'6'} />
                <Button button={styles.operatorButton} style={styles.operatorText} buttonText={'-'} />
            </View>
            <View style={styles.row}>
                <Button button={styles.numberButton} style={styles.numberText} buttonText={'1'} />
                <Button button={styles.numberButton} style={styles.numberText} buttonText={'2'} />
                <Button button={styles.numberButton} style={styles.numberText} buttonText={'3'} />
                <Button button={styles.operatorButton} style={styles.operatorText} buttonText={'+'} />
            </View>
            <View style={styles.row}>
                <Button button={styles.zeroButton} style={styles.zeroText} buttonText={'0'} />
                <Button button={styles.numberButton} style={styles.numberText} buttonText={'.'} />
                <Button button={styles.operatorButton} style={styles.operatorText} buttonText={'='} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        flex: 1,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flex: 1
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
    zeroText: {
        color: '#fff',
        fontSize: 35,
        marginLeft: 30
    },
    numberButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333333',
        borderColor: '#fff',
        borderRadius: 50,
        flex: 1,
        margin: 5
    },
    operatorButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF9500',
        borderColor: '#fff',
        borderRadius: 50,
        flex: 1,
        margin: 5
    },
    otherButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D4D4D2',
        borderColor: '#000',
        borderRadius: 50,
        flex: 1,
        margin: 5
    },
    zeroButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#333333',
        borderColor: '#fff',
        borderRadius: 50,
        flex: 2,
        margin: 5,
        
    }
})

export default ButtonContainer;