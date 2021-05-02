import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Tomboluser from './user';
import Favorite from './favorite';
import {wakai} from '../../assets/indeks'
import Wakaii1 from './Tombolbrand';
import Wakaii2 from './tombolbrand2';
import Wakaii3 from './tombolbrand3';
import Wakaii4 from './tombolbrand4';
import Wakaii5 from './tombolbrand5';
import Wakaii6 from './tonolbrand6';
import Tombolardiles from '../EigerStore/tombolardiles';
import Tombolyongki from '../EigerStore/tombolyongki';
import Tomboleiger from '../TomkinsStore/tomboleiger'; 
import Tomboltomkins from '../EigerStore/tomboltomkins';
import TombolBack from '../EigerStore/tombolback';


const Separator = () => (
    <View style={styless.Separator} />
); 

const WakaiStore = ({navigation})=> { 
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
            <Text style={styless.title}>Wakai Store</Text>
            <Favorite
            onPress={()=> handleGoTo('Favoriteuser')} 
            />
            <Tomboluser
            onPress={()=> handleGoTo('AkunUser')} 
            />         
            </View>
            <Separator />
            <View style={styless.bingkai}>
            <Text style={{fontWeight:'bold',fontSize:19, marginTop:5, marginLeft: 99}}>Wakai</Text>
             <Text style={{fontWeight: 'light',fontSize:10, marginTop:1, marginLeft: 99}}>Kota Tangerang Selatan</Text>
             <Text style={{fontWeight: 'light',fontSize:10, marginTop:1, marginLeft: 99}}>Produk Tersedia</Text>
            </View>
            <Image source={wakai} style={{marginTop:-70, marginLeft: 20}} />

            <View>
      <Text style={{marginLeft: 20, marginTop: 23, fontSize: 15}}>
        Produk
      </Text>
    </View>
    <View style={{flexDirection:'row'}}>
      <View style={{flexDirection:'column'}}>
        <View style={styless.kotakKIRI}>
        <Wakaii1
            onPress={()=> handleGoTo('WakaiSepatu')} 
            />
        </View>
          <Text style={{marginLeft:30, fontSize: 10}}>
          Footwear Man Wakai S..
          </Text>
          <Text style={{color: 'blue', marginLeft:30, fontSize:10}}>
          Rp, 233.500
          </Text>
          <View style={styless.kotakKIRI}>
          <Wakaii3
            onPress={()=> handleGoTo('WakaiSepatu')} 
            />
        </View>
          <Text style={{marginLeft:30, fontSize: 10}}>
          Footwear Man Wakai F..
          </Text>
          <Text style={{color: 'blue', marginLeft:30, fontSize:10}}>
          Rp, 179.300
          </Text>
          <View style={styless.kotakKIRI}>
          <Wakaii5
            onPress={()=> handleGoTo('WakaiSepatu')} 
            />
        </View>
          <Text style={{marginLeft:30, fontSize: 10}}>
          Footwear Pria Sneakers..
          </Text>
          <Text style={{color: 'blue', marginLeft:30, fontSize:10}}>
          Rp, 699.000
          </Text>
      </View>
      <View style={{flexDirection:'column'}}>
        <View style={styless.kotakKANAN}>
        <Wakaii2
            onPress={()=> handleGoTo('WakaiSepatu')} 
            />
        </View>
          <Text style={{marginLeft:7.8, fontSize: 10}}>
          Footwear Men Wakai F...
          </Text>
          <Text style={{color: 'blue', marginLeft:7.8, fontSize:10}}>
          Rp, 179.300
          </Text>
          <View style={styless.kotakKANAN}>
          <Wakaii4
            onPress={()=> handleGoTo('WakaiSepatu')} 
            />
        </View>
          <Text style={{marginLeft:7.8, fontSize: 10}}>
          Wakai FW01804 UMIKA...
          </Text>
          <Text style={{color: 'blue', marginLeft:7.8, fontSize:10}}>
          Rp, 171.300
          </Text>
          <View style={styless.kotakKANAN}>
          <Wakaii6
            onPress={()=> handleGoTo('WakaiSepatu')} 
            />
        </View>
          <Text style={{marginLeft:7.8, fontSize: 10}}>
          Footwear Man Wakai F...
          </Text>
          <Text style={{color: 'blue', marginLeft:7.8, fontSize:10}}>
          Rp, 309.400
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
            marginTop:12,
          },
          kotakKANAN: {
            borderWidth : 1,
            borderColor: 'black',
            marginLeft:7.8,
            marginTop:12,
          },
});


export default WakaiStore;
