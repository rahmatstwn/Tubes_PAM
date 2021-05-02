import React from 'react';
import {Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Ardiles = ({onPress}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <Text style={{fontSize:10}}>Ardiles</Text>
        </TouchableOpacity> 
    );
};
    


export default Ardiles;