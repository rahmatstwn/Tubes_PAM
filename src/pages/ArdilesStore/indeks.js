import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Tomboluser from './user';
import Favorite from './favorite';
import {ardiles} from '../../assets/indeks'
import Ardiles1 from './tombolbrand1';
import Ardiles2 from './tombolbrand2';
import Ardiles3 from './tombolbrand3';
import Ardiles4 from './tombolbrand4';
import Ardiles5 from './tombolbrand5';
import Ardiles6 from './tombolbrand6';
import Tombolyongki from '../EigerStore/tombolyongki';
import Tombolwakai from '../EigerStore/tombolwakai';
import Tomboleiger from '../TomkinsStore/tomboleiger'; 
import Tomboltomkins from '../EigerStore/tomboltomkins';
import Tombolback from '../EigerStore/tombolback';

const Separator = () => (
    <View style={styless.Separator} />
); 

const ArdilesStore = ({navigation})=> { 
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
            <Text style={styless.title}>Ardiles Store</Text>
            <Favorite
            onPress={()=> handleGoTo('Favoriteuser')} 
            />
            <Tomboluser
            onPress={()=> handleGoTo('AkunUser')} 
            />         
            </View>
            <Separator />
            <View style={styless.bingkai}>
            <Text style={{fontWeight:'bold',fontSize:19, marginTop:5, marginLeft: 99}}>Ardiles </Text>
             <Text style={{fontWeight: 'light',fontSize:10, marginTop:1, marginLeft: 99}}>Kota Tangerang Selatan</Text>
             <Text style={{fontWeight: 'light',fontSize:10, marginTop:1, marginLeft: 99}}>Produk Tersedia</Text>
            </View>
            <Image source={ardiles} style={{marginTop:-70, marginLeft: 20}} />

            <View>
      <Text style={{marginLeft: 20, marginTop: 23, fontSize: 15}}>
        Produk
      </Text>
    </View>
    <View style={{flexDirection:'row'}}>
      <View style={{flexDirection:'column'}}>
        <View style={styless.kotakKIRI}>
        <Ardiles1
            onPress={()=> handleGoTo('ArdilesSepatu')} 
            />
        </View>
          <Text style={{marginLeft:30, fontSize: 10}}>
          Ardiles Men Diavolo Se...
          </Text>
          <Text style={{color: 'blue', marginLeft:30, fontSize:10}}>
          Rp, 164.090
          </Text>
         
          <View style={styless.kotakKIRI}>
          <Ardiles3
            onPress={()=> handleGoTo('ArdilesSepatu')} 
            />
        </View>
          <Text style={{marginLeft:30, fontSize: 10,}}>
          Ardiles Men Robtras Se...
          </Text>
          <Text style={{color: 'blue', marginLeft:30, fontSize:10}}>
          Rp, 134.810
          </Text>
         
          <View style={styless.kotakKIRI}>
          <Ardiles5
            onPress={()=> handleGoTo('ArdilesSepatu')} 
            />
        </View>
          <Text style={{marginLeft:30, fontSize: 10}}>
          Ardiles Men Beckman S...
          </Text>
          <Text style={{color: 'blue', marginLeft:30, fontSize:10}}>
          Rp, 172.630
          </Text>
          
      </View>
      <View style={{flexDirection:'column'}}>
        <View style={styless.kotakKANAN}>
        <Ardiles2
            onPress={()=> handleGoTo('ArdilesSepatu')} 
            />
        </View>
          <Text style={{marginLeft:7.8, fontSize: 10}}>
          Ardiles Men Scleropta...
          </Text>
          <Text style={{color: 'blue', marginLeft:7.8, fontSize:10}}>
          Rp, 154.330
          </Text>
        
          <View style={styless.kotakKANAN}>
          <Ardiles4
            onPress={()=> handleGoTo('ArdilesSepatu')} 
            />
        </View>
          <Text style={{marginLeft:7.8, fontSize: 10}}>
          Ardiles Men Glareola S...
          </Text>
          <Text style={{color: 'blue', marginLeft:7.8, fontSize:10}}>
          Rp, 136.030
          </Text>
          
          <View style={styless.kotakKANAN}>
          <Ardiles6
            onPress={()=> handleGoTo('ArdilesSepatu')} 
            />
        </View>
          <Text style={{marginLeft:7.8, fontSize: 10}}>
          Ardiles Men Nataku Se...
          </Text>
          <Text style={{color: 'blue', marginLeft:7.8, fontSize:10}}>
          Rp, 161.650
          </Text>
         
      </View>  
    </View>
    <Text style={{marginLeft: 20, fontSize: 15, marginTop: 24}}>
        Gerai Lain
    </Text>
    <View style={{flexDirection: 'row'}}>
      <View style={{flexDirection : 'column'}}>
      <TouchableOpacity style={{marginTop: 1, marginBottom: 5, marginLeft:30, borderWidth : 1, padding: 3, alignItems: 'center'}}>
        <Tomboltomkins 
            onPress={()=> handleGoTo('TomkinsStore')} 
            />

      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft:30, borderWidth : 1, padding: 3, alignItems: 'center'}}>
      <Tombolyongki 
            onPress={()=> handleGoTo('YongkiStore')} 
            />
      </TouchableOpacity>
      </View>
      <View style={{flexDirection : 'column'}}>
      <TouchableOpacity style={{marginTop: 1, marginBottom: 5, marginLeft:7, borderWidth : 1, padding: 3, alignItems: 'center'}}>
      <Tomboleiger 
            onPress={()=> handleGoTo('EigerStore')} 
            />
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft:7, borderWidth : 1, padding: 3, alignItems: 'center'}}>
      <Tombolwakai 
            onPress={()=> handleGoTo('WakaiStore')} 
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
         marginRight: 40,
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
            marginTop: 12
          },
          kotakKANAN: {
            borderWidth : 1,
            borderColor: 'black',
            marginLeft:7.8,
            marginTop: 12
          },
});


export default ArdilesStore;
