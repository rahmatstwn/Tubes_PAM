import React from 'react';
import { View } from 'react-native';
import {Lihatproduk} from '../../components/indeks';

const Tombolproduk = ({ onPress}) => {
    return (
        <View>
            <Lihatproduk onPress={onPress}/>         
        </View>
    );
};
export default Tombolproduk;