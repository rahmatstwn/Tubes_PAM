import React from 'react';
import {Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {yongki6} from '../../../assets/indeks';

const Yongki6 = ({onPress}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <View >
            <Image source={yongki6} style={{width: 150,height: 150}}/>
             </View>
        </TouchableOpacity> 
    );
};
    


export default Yongki6;