import React from 'react';
import { View } from 'react-native';
import {Ubah} from '../../components/indeks';

const Tombolubah = ({ onPress}) => {
    return (
        <View>
            <Ubah onPress={onPress}/>         
        </View>
    );
};
export default Tombolubah;