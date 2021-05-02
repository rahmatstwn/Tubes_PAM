import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Tomboluser from './user';
import Favorite from './favorite';
import {yongki} from '../../assets/indeks'
import Yongkii1 from './tombolbrand';
import Yongkii2 from './tombolbrand2';
import Yongkii3 from './tombolbrand3';
import Yongkii4 from './tombolbrand4';
import Yongkii5 from './tombolbrand5';
import Yongkii6 from './tombolbrand6';
import Tombolardiles from '../EigerStore/tombolardiles';
import Tombolwakai from '../EigerStore/tombolwakai';
import Tomboleiger from '../TomkinsStore/tomboleiger'; 
import Tomboltomkins from '../EigerStore/tomboltomkins';
import TombolBack from '../EigerStore/tombolback';


const Separator = () => (
    <View style={styless.Separator} />
); 

const YongkiStore = ({navigation})=> { 
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
            <Text style={styless.title}>Yongki Komaladi</Text>
            <Favorite
            onPress={()=> handleGoTo('Favoriteuser')} 
            />
            <Tomboluser
            onPress={()=> handleGoTo('AkunUser')} 
            />         
            </View>
            <Separator />
            <View style={styless.bingkai}>
            <Text style={{fontWeight:'bold',fontSize:19, marginTop:5, marginLeft: 99}}>Yongki Komaladi</Text>
             <Text style={{fontWeight: 'light',fontSize:10, marginTop:1, marginLeft: 99}}>Kota Tangerang Selatan</Text>
             <Text style={{fontWeight: 'light',fontSize:10, marginTop:1, marginLeft: 99}}>Produk Tersedia</Text>
            </View>
            <Image source={yongki} style={{marginTop:-70, marginLeft: 20}} />

            <View>
      <Text style={{marginLeft: 20, marginTop: 23, fontSize: 15}}>
        Produk
      </Text>
    </View>
    <View style={{flexDirection:'row'}}>
      <View style={{flexDirection:'column'}}>
        <View style={styless.kotakKIRI}>
        <Yongkii1
            onPress={()=> handleGoTo('YongkiSepatu')} 
            />
        </View>
          <Text style={{marginLeft:30, fontSize: 10}}>
          YONGKI KOMALADI SSCP..
          </Text>
          <Text style={{color: 'blue', marginLeft:30, fontSize:10}}>
          Rp, 199.000
          </Text>
          <View style={styless.kotakKIRI}>
          <Yongkii3
            onPress={()=> handleGoTo('YongkiSepatu')} 
            />
        </View>
          <Text style={{marginLeft:30, fontSize: 10}}>
          YONGKI KOMALADI PANT..
          </Text>
          <Text style={{color: 'blue', marginLeft:30, fontSize:10}}>
          Rp, 799.000
          </Text>
          <View style={styless.kotakKIRI}>
          <Yongkii5
            onPress={()=> handleGoTo('YongkiSepatu')} 
            />
        </View>
          <Text style={{marginLeft:30, fontSize: 10}}>
          YONGKI KOMALADI SSC...
          </Text>
          <Text style={{color: 'blue', marginLeft:30, fontSize:10}}>
          Rp, 215.000
          </Text>
      </View>
      <View style={{flexDirection:'column'}}>
        <View style={styless.kotakKANAN}>
        <Yongkii2
            onPress={()=> handleGoTo('YongkiSepatu')} 
            />
        </View>
          <Text style={{marginLeft:7.8, fontSize: 10}}>
          YONGKI KOMALADI BO....
          </Text>
          <Text style={{color: 'blue', marginLeft:7.8, fontSize:10}}>
          Rp, 179.000
          </Text>
          <View style={styless.kotakKANAN}>
          <Yongkii4
            onPress={()=> handleGoTo('YongkiSepatu')} 
            />
        </View>
          <Text style={{marginLeft:7.8, fontSize: 10}}>
          YONGKI KOMALADI OL-....
          </Text>
          <Text style={{color: 'blue', marginLeft:7.8, fontSize:10}}>
          Rp, 179.000
          </Text>
          <View style={styless.kotakKANAN}>
          <Yongkii6
            onPress={()=> handleGoTo('YongkiSepatu')} 
            />
        </View>
          <Text style={{marginLeft:7.8, fontSize: 10}}>
          YONGKI KOMALADI F-....
          </Text>
          <Text style={{color: 'blue', marginLeft:7.8, fontSize:10}}>
          Rp, 269.700
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
            onPress={()=> handleGoTo('TomkisStore')} 
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
            marginTop: 12
          },
});


export default YongkiStore;
