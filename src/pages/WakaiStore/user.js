import React from 'react';
import { View } from 'react-native';
import {User} from '../../components/indeks';

const Tomboluser = ({ onPress}) => {
    return (
        <View>
            <User onPress={onPress}/>         
        </View>
    );
};
export default Tomboluser;