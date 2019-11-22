import React from 'react';

import { StyleSheet, View } from 'react-native';

import Button from './Button.js';

import { roundPercentage } from '../utils/operations.js';

const ButtonContainer = ( { state, setState } ) => {


    // the numberButtonHandler deals with the different number buttons such as 1, 2, 3 etc.
    const numberButtonHandler = (num) => {
        setState({ 
            ...state,
            currentNum: state.currentNum ? `${state.currentNum}${num}` : `${num}`,
        });
    }

    // the operatorButtonhandler deals with all the operation buttons such as addition subtraction, etc.
    const operatorButtonHandler = (operator) => {
        setState({
            ...state,
            operation: operator 
        }); 
       switch(operator) {
           case '+':
              

           default: // shouldnt ever get here. But if somehow they do, it just resets the state completely
            setState({
                prevNum: null,
                currentNum: null,
                operation: null,
            });
            break;
       }
    }

    // the otherButtonHandler deals with the buttons such as AC, C, +/- and %
    const otherButtonHandler = (type) => { 
        // all-clear should reset the entire state back to null
        switch(type) {
            case 'AC':
                setState({
                    prevNum: null,
                    currentNum: null,
                    operation: null,
            });
            break;

            // clear should simply clear the current numbers in the display, it should not affect the currentOperation or the previous number/s that are in storage.
            case 'C':
                setState({
                    ...state,
                    currentNum: null
                });
                break;

            // the + - button should take whatever the currentNum is and replace it with the opposite, i.e. 1 turns to -1 2 turns to -2 etc.
            case '+/-':
                setState({
                    ...state,
                    currentNum: -state.currentNum
                });
                break;

            // the percentage button take the currentNum and divides it by 100 and replaces the currentNum with the divided result
            case '%':
                
                const number = roundPercentage(state.currentNum);
                setState({
                    ...state,
                    currentNum: number
                });
                break;

            default: // shouldnt ever get here. But if somehow they do, it just resets the state completely
                setState({
                    prevNum: null,
                    currentNum: null,
                    operation: null,
                });
                break;
        }
    }

    console.log(state); 

    return (
        // TODO: Change division symbol to be an icon not a computer button
        <View style={styles.container}>
            <View style={styles.row}>
                <Button onPressHandler={otherButtonHandler} button={state.currentNum ? styles.hidden : styles.otherButton} style={styles.otherText} buttonText={'AC'} />
                <Button onPressHandler={otherButtonHandler} button={state.currentNum ? styles.otherButton : styles.hidden} style={styles.otherText} buttonText={'C'} />
                <Button onPressHandler={otherButtonHandler} button={styles.otherButton} style={styles.otherText} buttonText={'+/-'} />
                <Button onPressHandler={otherButtonHandler} button={styles.otherButton} style={styles.otherText} buttonText={'%'} />
                <Button onPressHandler={operatorButtonHandler} button={styles.operatorButton} style={styles.operatorText} buttonText={'÷'} />
            </View>
            <View style={styles.row}>
                <Button onPressHandler={numberButtonHandler} button={styles.numberButton} style={styles.numberText} buttonText={'7'} />
                <Button onPressHandler={numberButtonHandler} button={styles.numberButton} style={styles.numberText} buttonText={'8'} />
                <Button onPressHandler={numberButtonHandler} button={styles.numberButton} style={styles.numberText} buttonText={'9'} />
                <Button onPressHandler={operatorButtonHandler} button={styles.operatorButton} style={styles.operatorText} buttonText={'x'} />
            </View>
            <View style={styles.row}>
                <Button onPressHandler={numberButtonHandler} button={styles.numberButton} style={styles.numberText} buttonText={'4'} />
                <Button onPressHandler={numberButtonHandler} button={styles.numberButton} style={styles.numberText} buttonText={'5'} />
                <Button onPressHandler={numberButtonHandler} button={styles.numberButton} style={styles.numberText} buttonText={'6'} />
                <Button onPressHandler={operatorButtonHandler} button={styles.operatorButton} style={styles.operatorText} buttonText={'-'} />
            </View>
            <View style={styles.row}>
                <Button onPressHandler={numberButtonHandler} button={styles.numberButton} style={styles.numberText} buttonText={'1'} />
                <Button onPressHandler={numberButtonHandler} button={styles.numberButton} style={styles.numberText} buttonText={'2'} />
                <Button onPressHandler={numberButtonHandler} button={styles.numberButton} style={styles.numberText} buttonText={'3'} />
                <Button onPressHandler={operatorButtonHandler} button={styles.operatorButton} style={styles.operatorText} buttonText={'+'} />
            </View>
            <View style={styles.row}>
                <Button onPressHandler={numberButtonHandler} button={styles.zeroButton} style={styles.zeroText} buttonText={'0'} />
                <Button onPressHandler={numberButtonHandler} button={styles.numberButton} style={styles.numberText} buttonText={'.'} />
                <Button onPressHandler={operatorButtonHandler} button={styles.operatorButton} style={styles.operatorText} buttonText={'='} />
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
    hidden: {
        display: 'none'
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