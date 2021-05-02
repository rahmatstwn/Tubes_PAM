import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import Tombolbrand from './tombolbrand' ;
import Tombolbrand2 from './tombolbrand2';
import Tombolbrand3 from './tombolbrand3';
import Tombolbrand4 from './tombolbrand4';
import Tombolbrand5 from './tombolbrand5';
import Tombolproduk from './tombolproduk';
import Tomboluser from './user';
import Favorite from './favorit';
import {lariss} from '../../assets/indeks';

const Separator = () => (
    <View style={styless.Separator} />
); 

const HalamanAwal = ({navigation})=> { 
    const handleGoTo = screen =>{
        navigation.navigate(screen) 
    }
    return(
        <ScrollView>
        <View style={styless.page}>
            <View style={{flexDirection:'row'}}>
            <Text style={styless.title}>Sepatu Lokal kita</Text>         
            <Favorite
            onPress={()=> handleGoTo('Favoriteuser')} 
            />
            <Tomboluser
            onPress={()=> handleGoTo('AkunUser')} 
            />
            </View>
            <Separator />
            <View style={styless.bingkai}>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontWeight:'light',fontSize:20, marginTop:5, marginLeft: 10}}>Paling Laris!!!</Text>
            <Tombolproduk
            onPress={()=> handleGoTo('Login')} 
            />
            </View>
            <Text style={{fontWeight: 'light',fontSize:15, marginTop:1, marginLeft: 10, color: '#005BAE'}}>Rp, 719,100</Text>
            <Image source={lariss} style={styless.ilustrasi3} />
            </View>
            <Tombolbrand
            onPress={()=> handleGoTo('ArdilesStore')} 
            />
             <Tombolbrand2
            onPress={()=> handleGoTo('YongkiStore')} 
            />
            <Tombolbrand3
            onPress={()=> handleGoTo('WakaiStore')} 
            />
            <Tombolbrand4
            onPress={()=> handleGoTo('TomkinsStore')} 
            />
            <Tombolbrand5
            onPress={()=> handleGoTo('EigerStore')} 
            />
            <Text style={{ marginTop:50 }}></Text>
        </View>
        </ScrollView>
    );
};

const styless = StyleSheet.create({
    page : {
        justifyContent: 'flex-start',
        backgroundColor:'white', 
        flex: 1, 
    },
    title: {
        marginTop: 45,
        textAlign: 'left',
        marginLeft: 50,
        fontWeight: 'bold',
        fontSize: 20,
    },
    
    ilustrasi3: {
        width:200,
        height: 200,
        marginLeft: 50,
    },
    bingkai: {
        marginTop: 45,
        borderWidth: 1,
        borderColor: 'black',
        marginHorizontal: 30,
    },
    Separator : {
        marginVertical:8,
        borderBottomColor: 'black',
        borderWidth: 3,
        borderBottomWidth: StyleSheet.hairlineWidth,
     },
    tombol: {
        marginLeft: 60, 
        borderWidth : 1, 
        width: 100,
        height: 30,
        paddingLeft: 8,
        paddingTop: 3, 
        marginTop:10,
        borderRadius: 5,
    },    
        Welcome: {
            fontSize: 18,
            fontWeight:'bold', 
            color:"#A55EEA", 
            marginBottom: 76,
            textAlign:'center',
            paddingHorizontal: '15%',
            marginTop: 20                      
        },
});


export default HalamanAwal;
