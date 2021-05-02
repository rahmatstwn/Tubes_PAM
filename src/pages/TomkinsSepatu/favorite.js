import React from 'react';
import { View } from 'react-native';
import {Favorit} from '../../components/indeks';

const Favorite = ({ onPress}) => {
    return (
        <View>
            <Favorit onPress={onPress}/>         
        </View>
    );
};
export default Favorite;