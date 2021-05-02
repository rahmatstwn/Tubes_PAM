import React from 'react';
import {Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {yongki2} from '../../../assets/indeks';

const Yongki2 = ({onPress}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <View >
            <Image source={yongki2} style={{width: 150,height: 150}}/>
             </View>
        </TouchableOpacity> 
    );
};
    


export default Yongki2;