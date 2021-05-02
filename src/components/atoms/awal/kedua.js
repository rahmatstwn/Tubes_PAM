import React from 'react';
import {Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {yongki} from '../../../assets/indeks';

const Kedua = ({onPress}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styless.bingkai}>
            <Text style={{fontWeight:'bold',fontSize:19, marginTop:5, marginLeft: 99}}>Yongki Komaladi</Text>
            <Text style={{fontWeight: 'light',fontSize:10, marginTop:1, marginLeft: 99}}>Jakarta Pusat</Text>
            <Text style={{fontWeight: 'light',fontSize:10, marginTop:1, marginLeft: 99}}>Produk Tersedia</Text>
            <Image source={yongki} style={{marginTop:-65}}/>
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
    borderRadius: 10
    },
    
};

export default Kedua;

