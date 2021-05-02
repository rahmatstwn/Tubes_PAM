import React from 'react';
import { View } from 'react-native';
import {Keluar} from '../../components/indeks';

const TombolKeluar = ({ onPress}) => {
    return (
        <View>
            <Keluar onPress={onPress}/>         
        </View>
    );
};
export default TombolKeluar;