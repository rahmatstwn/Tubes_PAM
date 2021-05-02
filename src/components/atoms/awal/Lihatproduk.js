import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Lihatproduk = ({onPress}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styless.bingkai}>
                <Text style={{fontSize: 15}}>
                Lihat Produk
                </Text>
        </TouchableOpacity> 
    );
};

const styless = {
    bingkai: {
        marginLeft: 60, 
        borderWidth : 1, 
        width: 100,
        height: 30,
        paddingLeft: 8,
        paddingTop: 3, 
        marginTop:10,
        borderRadius: 5,
    },
    
};

export default Lihatproduk;

