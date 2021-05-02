import React from 'react';
import { View } from 'react-native';
import {Yongki} from '../../components/indeks';

const Tombolyongki = ({ onPress}) => {
    return (
        <View>
            <Yongki onPress={onPress}/>         
        </View>
    );
};
export default Tombolyongki;