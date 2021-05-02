import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { akun } from '../../assets/indeks';
import Tombolback from '../EigerStore/tombolback';
import Tombolubah from './tombolubah';
import TombolKeluar from './TombolKeluar';

const Separator = () => (
    <View style={styless.Separator} />
); 

const AkunUser = ({navigation})=> { 
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
            <Text style={styless.title}>Akun </Text>    
            </View>
            <Separator />
            </View>
            <View style={styless.akungambar}>
            <Image source={akun} style={styless.gambar}/>
            <Text style={styless.nama}>Suryadi</Text>
            <Text style={{fontSize:15, marginTop:20, color: 'black', fontWeight: 'bold', }}>Informasi Akun</Text>
            <Text></Text>
            </View>
            <View style={styless.info}>
                <Text style={{marginLeft:20,fontSize:15, fontWeight:'bold' }}>Username</Text>
                <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:20, }}>Suryadi</Text>
                <Tombolubah
            onPress={()=> handleGoTo('AkunUser')} 
            />
                </View>
                <Text style={{marginBottom: 300}}></Text>
                <TombolKeluar
                 onPress={()=> handleGoTo('Welcome')} 
                    />
                <Text style={{marginBottom: 500,}}></Text>
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
      akungambar: {
          alignItems: 'center',
          backgroundColor: 'white',
      },
      gambar : {
        width:80, 
        height:80,
        textAlign:'center',
        marginTop: 42,
      },
      nama : {
       fontSize:20,
       fontWeight: 'bold',
      },
      info : {
        backgroundColor: 'white',
      },
});


export default AkunUser;
