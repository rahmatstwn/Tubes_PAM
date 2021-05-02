import React from 'react';
import { View } from 'react-native';
import {Ardiles} from '../../components/indeks';

const Tombolardiles = ({ onPress}) => {
    return (
        <View>
            <Ardiles onPress={onPress}/>         
        </View>
    );
};
export default Tombolardiles;