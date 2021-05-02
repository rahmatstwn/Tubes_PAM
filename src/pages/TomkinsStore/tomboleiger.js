import React from 'react';
import { View } from 'react-native';
import {Eigerbawah} from '../../components/indeks';

const Tomboleiger = ({ onPress}) => {
    return (
        <View>
            <Eigerbawah onPress={onPress}/>         
        </View>
    );
};
export default Tomboleiger;