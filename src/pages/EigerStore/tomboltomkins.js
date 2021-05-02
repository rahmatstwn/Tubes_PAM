import React from 'react';
import { View } from 'react-native';
import {Tomkins} from '../../components/indeks';

const Tomboltomkins = ({ onPress}) => {
    return (
        <View>
            <Tomkins onPress={onPress}/>         
        </View>
    );
};
export default Tomboltomkins;