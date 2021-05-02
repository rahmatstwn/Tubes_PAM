import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ardiles} from '../../../assets/indeks';

const AWAL = ({onPress}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styless.bingkai}>
            <Text style={{fontWeight:'bold',fontSize:19, marginTop:5, marginLeft: 99}}>Ardiles</Text>
            <Text style={{fontWeight: 'light',fontSize:10, marginTop:1, marginLeft: 99}}>Jakarta Timur</Text>
            <Text style={{fontWeight: 'light',fontSize:10, marginTop:1, marginLeft: 99}}>Produk Tersedia</Text>
            <Image source={ardiles} style={{marginTop:-65}}/>
            </View>
        </TouchableOpacity> 
    );
};

const styless = {
    bingkai: {
    marginTop: 35,
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 30,
    borderRadius: 10,
    },
    
};

export default AWAL;

