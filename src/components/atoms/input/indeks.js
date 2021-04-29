import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const input = ({placeholder, ...rest}) => {
    return (
            <TextInput style={styles.input} placeholder= {placeholder}
            {...rest} 
            />      
    );
}; 


const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'purple',
        borderRadius: 25,
        paddingVertical:12,
        paddingHorizontal: 18,
        fontSize:14,
        color: 'black',
    },
});


export default input;

 