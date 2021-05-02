import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { akun } from '../../assets/indeks';
import Tombolback from '../EigerStore/tombolback';


const Separator = () => (
    <View style={styless.Separator} />
); 

const Favoriteuser = ({navigation})=> { 
    const handleGoTo = screen =>{
        navigation.navigate(screen) 
    }
    return(
        <ScrollView>
                <View style={styless.page}>
                <View style={{flexDirection:'row'}}>
            <Tombolback
            onPress={()=> handleGoTo('HalamanAwal')} 
            />
            <Text style={styless.title}>Favorit </Text>    
            </View>
            <Separator />
                <Text>Anda Belom Memiliki </Text>
                <Text>daftar Favorit </Text>
            <Text style={{marginTop:200}}></Text>
            </View>
            
        </ScrollView>
    );
};

const styless = StyleSheet.create({
    page : {
        backgroundColor:'white', 
        flex: 1, 
    },
    title: {
        marginTop: 45,
        textAlign: 'left',
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 20,
         marginRight: 40,
    },
    Separator: {
        marginVertical: 8,
        borderBottomColor: 'black',
        borderWidth: 3,
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
});


export default Favoriteuser;
