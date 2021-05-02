import React from 'react';
import {Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {lariss} from '../../../assets/indeks';

const Eiger = ({onPress}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <View >
            <Image source={lariss} style={{width: 150,height: 150}}/>
             </View>
        </TouchableOpacity> 
    );
};
    


export default Eiger;