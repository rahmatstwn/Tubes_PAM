import React from 'react';
import { View } from 'react-native';
import {Wakai} from '../../components/indeks';

const Tombolwakai = ({ onPress}) => {
    return (
        <View>
            <Wakai onPress={onPress}/>         
        </View>
    );
};
export default Tombolwakai;