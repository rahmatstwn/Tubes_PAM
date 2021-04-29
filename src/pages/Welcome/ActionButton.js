import React from 'react';
import { Text, View } from 'react-native';
import {Button} from '../../components/indeks';


const ActionButton = ({desc, title, onPress}) => {
    return (
        <View style={styless.wrapper.component}>
            <Text style={styless.text.desc}>{desc}</Text>
            <Button title={title} onPress={onPress}  />            
        </View>
    );
};

const styless = {
    wrapper: {
        component: {
            marginBottom: 43, 
            width: 225,
        },
    },
    text: {
        desc: {
            fontSize:13, 
            color: '#737373', 
            textAlign:'center', 
            paddingHorizontal: '15%',
            marginBottom: 6, 
            },
    },
}

export default ActionButton;