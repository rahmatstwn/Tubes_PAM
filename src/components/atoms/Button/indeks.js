import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Button = ({title, onPress}) => {
    return(
        <TouchableOpacity style={styless.wrapper.component} onPress={onPress}>
            <Text style={styless.text.tittle}>{title}</Text>
        </TouchableOpacity> 
    );
};

const styless = {
    wrapper : {
        component:{
            backgroundColor: '#A55EEA',
            borderRadius:25,
            paddingVertical: 13,
        }, 
    },
    text: {
        tittle: {
            fontSize:12,
            fontWeight: 'bold',
            color:'white',
            textTransform: "uppercase",
            textAlign:'center',
        },
    },
};

export default Button;

