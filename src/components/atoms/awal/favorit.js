import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Star} from '../../../assets/indeks';

const Favorit = ({onPress}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styless.bingkai}>
               <Image source={Star} style={styless.ilustrasi2}/>
        </TouchableOpacity> 
    );
};

const styless = {
        ilustrasi2: {
            width:30,
            height: 30,
            marginLeft: 55,
            marginTop:40,
        },
};

export default Favorit;

