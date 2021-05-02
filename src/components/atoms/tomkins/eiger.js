import React from 'react';
import {Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Eigerbawah = ({onPress}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <Text style={{fontSize:10}}>Eiger</Text>
        </TouchableOpacity> 
    );
};
    


export default Eigerbawah;