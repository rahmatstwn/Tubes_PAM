import React from 'react';
import { View } from 'react-native';
import {Eiger} from '../../components/indeks';

const Tombolbrand = ({ onPress}) => {
    return (
        <View>
            <Eiger onPress={onPress}/>         
        </View>
    );
};
export default Tombolbrand;