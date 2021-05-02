import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Tomboluser from './user';
import Favorite from './favorite';
import {eiger} from '../../assets/indeks'
import Tombolbrand from './tombolbrand';
import Tombolbrand2 from './tombolgambar2';
import Tombolbrand3 from './tombolbrand3';
import Tombolbrand4 from './tombolbrand4';
import Tombolbrand5 from './tombolbrand5';
import Tombolbrand6 from './tombolbrand6';
import Tombolardiles from './tombolardiles';
import Tombolyongki from './tombolyongki';
import Tombolwakai from './tombolwakai';
import Tomboltomkins from './tomboltomkins'; 
import TombolBack from './tombolback';

const Separator = () => (
    <View style={styless.Separator} />
); 

const EigerStore = ({navigation})=> { 
    const handleGoTo = screen =>{
        navigation.navigate(screen) 
    }
    return(
        <ScrollView>
        <View style={styless.page}>
            <View style={{flexDirection:'row'}}>
            <TombolBack
            onPress={()=> handleGoTo('HalamanAwal')} 
            />
            <Text style={styless.title}>Eiger Store</Text>
            <Favorite
            onPress={()=> handleGoTo('Favoriteuser')} 
            />
            <Tomboluser
            onPress={()=> handleGoTo('AkunUser')} 
            />     
            </View>
            <Separator />
            <View style={styless.bingkai}>
            <Text style={{fontWeight:'bold',fontSize:19, marginTop:5, marginLeft: 99}}>Eiger</Text>
             <Text style={{fontWeight: 'light',fontSize:10, marginTop:1, marginLeft: 99}}>Kota Tangerang Selatan</Text>
             <Text style={{fontWeight: 'light',fontSize:10, marginTop:1, marginLeft: 99}}>Produk Tersedia</Text>
            </View>
            <Image source={eiger} style={{marginTop:-70, marginLeft: 20}} />

            <View>
      <Text style={{marginLeft: 20, marginTop: 23, fontSize: 15}}>
        Produk
      </Text>
    </View>
    <View style={{flexDirection:'row'}}>
      <View style={{flexDirection:'column'}}>
        <View style={styless.kotakKIRI}>
        <Tombolbrand
            onPress={()=> handleGoTo('EigerSepatu')} 
            />
        </View>
          <Text style={{marginLeft:30, fontSize: 10}}>
            Eiger 1989 Chamba sho...
          </Text>
          <Text style={{color: 'blue', marginLeft:30, fontSize:10}}>
            Rp 719.100,00
          </Text>
          <View style={styless.kotakKIRI}>
          <Tombolbrand3
            onPress={()=> handleGoTo('EigerSepatu')} 
            />
        </View>
          <Text style={{marginLeft:30, fontSize: 10}}>
          Eiger Tigre Shoes Home..
          </Text>
          <Text style={{color: 'blue', marginLeft:30, fontSize:10}}>
          Rp, 619,650
          </Text>
          <View style={styless.kotakKIRI}>
          <Tombolbrand5
            onPress={()=> handleGoTo('EigerSepatu')} 
            />
        </View>
          <Text style={{marginLeft:30, fontSize: 10}}>
          Eiger Cloudrun 2.0 Sho...
          </Text>
          <Text style={{color: 'blue', marginLeft:30, fontSize:10}}>
          Rp, 424.150
          </Text>
      </View>
      <View style={{flexDirection:'column'}}>
        <View style={styless.kotakKANAN}>
        <Tombolbrand2
            onPress={()=> handleGoTo('EigerSepatu')} 
            />
        </View>
          <Text style={{marginLeft:7.8, fontSize: 10}}>
          Eiger Tiger Claw Gray-...
          </Text>
          <Text style={{color: 'blue', marginLeft:7.8, fontSize:10}}>
          Rp, 649,000
          </Text>
          <View style={styless.kotakKANAN}>
          <Tombolbrand4
            onPress={()=> handleGoTo('EigerSepatu')} 
            />
        </View>
          <Text style={{marginLeft:7.8, fontSize: 10}}>
          Eiger Natoas Mid 2.5 S...
          </Text>
          <Text style={{color: 'blue', marginLeft:7.8, fontSize:10}}>
          Rp, 539,100
          </Text>
          <View style={styless.kotakKANAN}>
          <Tombolbrand6
            onPress={()=> handleGoTo('EigerSepatu')} 
            />
        </View>
          <Text style={{marginLeft:7.8, fontSize: 10}}>
          Eiger Eagle Plum 2.0-B..
          </Text>
          <Text style={{color: 'blue', marginLeft:7.8, fontSize:10}}>
          Rp, 1.039.200z
          </Text>
      </View>  
    </View>
    <Text style={{marginLeft: 20, fontSize: 15, marginTop: 24}}>
        Gerai Lain
    </Text>
    <View style={{flexDirection: 'row'}}>
      <View style={{flexDirection : 'column'}}>
      <TouchableOpacity style={{marginTop: 1, marginBottom: 5, marginLeft:30, borderWidth : 1, padding: 3, alignItems: 'center'}}>
        <Tombolwakai 
            onPress={()=> handleGoTo('WakaiStore')} 
            />

      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft:30, borderWidth : 1, padding: 3, alignItems: 'center'}}>
      <Tombolardiles 
            onPress={()=> handleGoTo('ArdilesStore')} 
            />
      </TouchableOpacity>
      </View>
      <View style={{flexDirection : 'column'}}>
      <TouchableOpacity style={{marginTop: 1, marginBottom: 5, marginLeft:7, borderWidth : 1, padding: 3, alignItems: 'center'}}>
      <Tomboltomkins 
            onPress={()=> handleGoTo('TomkinsStore')} 
            />
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft:7, borderWidth : 1, padding: 3, alignItems: 'center'}}>
      <Tombolyongki 
            onPress={()=> handleGoTo('YongkiStore')} 
            />
      </TouchableOpacity>
      </View>
      </View>



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
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 20,
        marginRight: 50, 
    },
    ilustrasi: {
        width:35,
        height: 35,
        backgroundColor: 'cyan',
        marginTop: 45,
        marginLeft:10,
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
        borderRadius:10
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
        fixToText: {
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
          separator: {
            marginVertical: 8,
            borderBottomColor: 'black',
            borderWidth: 3,
            borderBottomWidth: StyleSheet.hairlineWidth,
          },
          bingkai: {
            marginTop: 40,
            borderWidth: 1,
            borderColor: 'black',
            marginHorizontal: 30,
            borderRadius: 10
          },
          kotakKIRI: {
            borderWidth : 1,
            borderColor: 'black',
            marginLeft: 30,
            marginTop: 12,
          },
          kotakKANAN: {
            borderWidth : 1,
            borderColor: 'black',
            marginLeft:7.8,
            marginTop:12
          }
});


export default EigerStore;
