import React from 'react';
import {Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Profile} from '../../../assets/indeks';

const User = ({onPress}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styless.bingkai}>
               <Image source={Profile} style={styless.ilustrasi2}/>
        </TouchableOpacity> 
    );
};

const styless = {
        ilustrasi2: {
            width:30,
            height: 30,
            marginLeft: 15,
            marginTop:40,
        },
};

export default User;

