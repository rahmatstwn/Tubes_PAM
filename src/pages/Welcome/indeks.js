import React from 'react';
import { Text, View, Image } from 'react-native';
import ActionButton from './ActionButton';
import {welcome} from '../../assets/indeks'; 

const Welcome = ({navigation})=> { 
    const handleGoTo = screen =>{
        navigation.navigate(screen) 
    }
    return(
        <View style={styless.wrapper.page}>         
            <Image source={welcome} style={styless.wrapper.illustration} />
            <Text style={styless.text.Welcome}>
                Selamat datang di catalog sepatu lokal kita
            </Text>
            <ActionButton 
            desc="Silahkan Masuk, Jika anda sudah memiliki akun ini" 
            title="Masuk" 
            onPress={()=> handleGoTo('Login')} 
            />
            <ActionButton 
            desc="atau silahkan daftar jika anda belum memiliki akun," 
            title="Daftar"
            onPress={()=> handleGoTo('Register')}
            />
        </View>
    );
};

const styless = {
    wrapper :{
        page : {
            alignItems:'center', 
            justifyContent: 'center',
            backgroundColor:'white', 
            flex: 1 
        },
        illustration : {
            width: 300, 
            height: 150, 
            backgroundColor:'#A55EEA', 
            marginBottom:10
        },        
    },
    text: {
        Welcome: {
            fontSize: 18,
            fontWeight:'bold', 
            color:"#A55EEA", 
            marginBottom: 76,
            textAlign:'center',
            paddingHorizontal: '15%',
            marginTop: 20                      
        },
    },
};


export default Welcome;
