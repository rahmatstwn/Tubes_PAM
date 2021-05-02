import React from 'react';
import {Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Wakai = ({onPress}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <Text style={{fontSize:10}}>Wakai</Text>
        </TouchableOpacity> 
    );
};
    


export default Wakai;