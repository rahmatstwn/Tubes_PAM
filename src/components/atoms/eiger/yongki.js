import React from 'react';
import {Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Yongki = ({onPress}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <Text style={{fontSize:10}}>Yongki Komaladi</Text>
        </TouchableOpacity> 
    );
};
    


export default Yongki;