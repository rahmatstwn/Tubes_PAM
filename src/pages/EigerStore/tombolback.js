import React from 'react';
import { View } from 'react-native';
import {Back} from '../../components/indeks';

const TombolBack = ({ onPress}) => {
    return (
        <View>
            <Back onPress={onPress}/>         
        </View>
    );
};
export default TombolBack;