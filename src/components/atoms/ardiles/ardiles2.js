import React from 'react';
import {View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ardiles2} from '../../../assets/indeks';

const Ardiless2 = ({onPress}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <View >
            <Image source={ardiles2} style={{width: 150,height: 150}}/>
             </View>
        </TouchableOpacity> 
    );
};
    


export default Ardiless2;