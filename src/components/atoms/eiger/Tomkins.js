import React from 'react';
import {Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Tomkins = ({onPress}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <Text style={{fontSize:10}}>Tomkins</Text>
        </TouchableOpacity> 
    );
};
    


export default Tomkins;