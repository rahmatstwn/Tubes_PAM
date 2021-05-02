import React from 'react';
import { View } from 'react-native';
import {AWAL} from '../../components/indeks';

const Tombolbrand = ({ onPress}) => {
    return (
        <View>
            <AWAL onPress={onPress}/>         
        </View>
    );
};
export default Tombolbrand;