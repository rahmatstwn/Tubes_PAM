import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Tomboluser from './user';
import Favorite from './favorite';
import {tomkins} from '../../assets/indeks'
import Tomkinss1 from './tombolbrand';
import Tomkinss2 from './tombolbrand2';
import Tomkinss3 from './tombolbrand3';
import Tomkinss4 from './tombolbrand4';
import Tomkinss5 from './tombolbrand5';
import Tomkinss6 from './tombolbrand6';
import Tombolardiles from '../EigerStore/tombolardiles';
import Tombolyongki from '../EigerStore/tombolyongki';
import Tombolwakai from '../EigerStore/tombolwakai';
import Tomboleiger from './tomboleiger'; 
import Tombolback from '../EigerStore/tombolback';
import {tomkins2,tomkins3,tomkins4,tomkins5,tomkins6} from '../../assets/indeks';

const Separator = () => (
    <View style={styless.Separator} />
); 

const TomkinsStore = ({navigation})=> { 
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
            <Text style={styless.title}>Tomkins Store</Text>
            <Favorite
            onPress={()=> handleGoTo('Favoriteuser')} 
            />
            <Tomboluser
            onPress={()=> handleGoTo('AkunUser')} 
            />         
            </View>
            <Separator />
            <View style={styless.bingkai}>
            <Text style={{fontWeight:'bold',fontSize:19, marginTop:5, marginLeft: 99}}>Tomkins</Text>
             <Text style={{fontWeight: 'light',fontSize:10, marginTop:1, marginLeft: 99}}>Kota Bandung</Text>
             <Text style={{fontWeight: 'light',fontSize:10, marginTop:1, marginLeft: 99}}>Produk Tersedia</Text>
            </View>
            <Image source={tomkins} style={{marginTop:-75, marginLeft: 15}} />

            <View>
      <Text style={{marginLeft: 20, marginTop: 23, fontSize: 15}}>
        Produk
      </Text>
    </View>
    <View style={{flexDirection:'row'}}>
      <View style={{flexDirection:'column'}}>
        <View style={styless.kotakKIRI}>
        <Tomkinss1
            onPress={()=> handleGoTo('TomkinsSepatu')} 
            />
        </View>
          <Text style={{marginLeft:30, fontSize: 10}}>
          TOMKINS Eternity - Gre..
          </Text>
          <Text style={{color: 'blue', marginLeft:30, fontSize:10}}>
          Rp, 440.000
          </Text>
          <View style={styless.kotakKIRI}>
          <TouchableOpacity>
            <Image source={tomkins3} style={{width: 150,height: 150}}/>
            </TouchableOpacity>
        </View>
          <Text style={{marginLeft:30, fontSize: 10}}>
          TOMKINS Kin - 33
          </Text>
          <Text style={{color: 'blue', marginLeft:30, fontSize:10}}>
          Rp, 430.000
          </Text>
          <View style={styless.kotakKIRI}>
          <TouchableOpacity>
            <Image source={tomkins5} style={{width: 150,height: 150}}/>
            </TouchableOpacity>
        </View>
          <Text style={{marginLeft:30, fontSize: 10}}>
          TOMKINS Parabellum C...
          </Text>
          <Text style={{color: 'blue', marginLeft:30, fontSize:10}}>
          Rp, 276.500
          </Text>
      </View>
      <View style={{flexDirection:'column'}}>
        <View style={styless.kotakKANAN}>
        <TouchableOpacity>
            <Image source={tomkins2} style={{width: 150,height: 150}}/>
            </TouchableOpacity>
        </View>
          <Text style={{marginLeft:7.8, fontSize: 10}}>
          TOMKINS Parabellum-R.
          </Text>
          <Text style={{color: 'blue', marginLeft:7.8, fontSize:10}}>
          Rp, 152.000
          </Text>
          <View style={styless.kotakKANAN}>
          <TouchableOpacity>
            <Image source={tomkins4} style={{width: 150,height: 150}}/>
            </TouchableOpacity>
        </View>
          <Text style={{marginLeft:7.8, fontSize: 10}}>
          TOMKINS Joker - Black..
          </Text>
          <Text style={{color: 'blue', marginLeft:7.8, fontSize:10}}>
          Rp, 370.000
          </Text>
          <View style={styless.kotakKANAN}>
          <TouchableOpacity>
            <Image source={tomkins6} style={{width: 150,height: 150}}/>
            </TouchableOpacity>
        </View>
          <Text style={{marginLeft:7.8, fontSize: 10}}>
          TOMKINS Prodigy Alph...
          </Text>
          <Text style={{color: 'blue', marginLeft:7.8, fontSize:10}}>
          Rp, 200.000
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
        marginRight: 25, 
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
          }
});


export default TomkinsStore;
