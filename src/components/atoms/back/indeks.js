import React from 'react';
import {View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {back} from '../../../assets/indeks';

const Back = ({onPress}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <View >
            <Image source={back} style={{width: 30 ,height: 30, marginTop:43, marginLeft:10}}/>
             </View>
        </TouchableOpacity> 
    );
};
    


export default Back;