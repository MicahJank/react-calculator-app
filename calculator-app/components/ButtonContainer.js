import React from 'react';

import { StyleSheet, View } from 'react-native';

import Button from './Button.js';

const ButtonContainer = ( { state, setState } ) => {


    // button functions
    const numberButtonHandler = (e) => {
        console.log(e.target.id)
        // if(!state.operation) {
        //     setState({
        //         ...state,
        //         currentNum: `${state.currentNum}`
        //     })
        // }
    }

    const operatorButtonHandler = () => {

    }

    const otherButtonHandler = () => {

    }

    return (
        // TODO: Change division symbol to be an icon not a computer button
        <View style={styles.container}>
            <View style={styles.row}>
                <Button onPressHandler={otherButtonHandler} id={'AC'} button={styles.otherButton} style={styles.otherText} buttonText={'AC'} />
                <Button onPressHandler={otherButtonHandler} id={'+/-'} button={styles.otherButton} style={styles.otherText} buttonText={'+/-'} />
                <Button onPressHandler={otherButtonHandler} id={'%'} button={styles.otherButton} style={styles.otherText} buttonText={'%'} />
                <Button onPressHandler={operatorButtonHandler} id={'÷'} button={styles.operatorButton} style={styles.operatorText} buttonText={'÷'} />
            </View>
            <View style={styles.row}>
                <Button onPressHandler={numberButtonHandler} id={'7'} button={styles.numberButton} style={styles.numberText} buttonText={'7'} />
                <Button onPressHandler={numberButtonHandler} id={'8'} button={styles.numberButton} style={styles.numberText} buttonText={'8'} />
                <Button onPressHandler={numberButtonHandler} id={'9'} button={styles.numberButton} style={styles.numberText} buttonText={'9'} />
                <Button onPressHandler={operatorButtonHandler} id={'x'} button={styles.operatorButton} style={styles.operatorText} buttonText={'x'} />
            </View>
            <View style={styles.row}>
                <Button onPressHandler={numberButtonHandler} id={'4'} button={styles.numberButton} style={styles.numberText} buttonText={'4'} />
                <Button onPressHandler={numberButtonHandler} id={'5'} button={styles.numberButton} style={styles.numberText} buttonText={'5'} />
                <Button onPressHandler={numberButtonHandler} id={'6'} button={styles.numberButton} style={styles.numberText} buttonText={'6'} />
                <Button onPressHandler={operatorButtonHandler} id={'-'} button={styles.operatorButton} style={styles.operatorText} buttonText={'-'} />
            </View>
            <View style={styles.row}>
                <Button onPressHandler={numberButtonHandler} id={'1'} button={styles.numberButton} style={styles.numberText} buttonText={'1'} />
                <Button onPressHandler={numberButtonHandler} id={'2'} button={styles.numberButton} style={styles.numberText} buttonText={'2'} />
                <Button onPressHandler={numberButtonHandler} id={'3'} button={styles.numberButton} style={styles.numberText} buttonText={'3'} />
                <Button onPressHandler={operatorButtonHandler} id={'+'} button={styles.operatorButton} style={styles.operatorText} buttonText={'+'} />
            </View>
            <View style={styles.row}>
                <Button onPressHandler={numberButtonHandler} id={'0'} button={styles.zeroButton} style={styles.zeroText} buttonText={'0'} />
                <Button onPressHandler={numberButtonHandler} id={'.'} button={styles.numberButton} style={styles.numberText} buttonText={'.'} />
                <Button onPressHandler={operatorButtonHandler} id={'='} button={styles.operatorButton} style={styles.operatorText} buttonText={'='} />
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