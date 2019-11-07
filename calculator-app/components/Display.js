import React from 'react';

import { StyleSheet, Text, View } from 'react-native';


const Display = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.display}>0</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    display: {
        color: '#fff',
        fontSize: 100,
        marginTop: 70,
        textAlign: "right"
    }
})

export default Display;