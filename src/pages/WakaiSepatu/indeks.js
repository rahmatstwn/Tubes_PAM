import React from "react";
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import CollapsibleView from "@eliav2/react-native-collapsible-view";
import Tomboluser from './user';
import Favorite from './favorite';
import {wakai1, drob} from '../../assets/indeks';
import Tombolardiles from '../EigerStore/tombolardiles';
import Tombolyongki from '../EigerStore/tombolyongki';

import Tomboleiger from '../TomkinsStore/tomboleiger'; 
import Tombolback from '../EigerStore/tombolback';
import Tomboltomkins from "../EigerStore/tomboltomkins";



const Separator = () => (
    <View style={styless.Separator} />
); 

const WakaiSepatu = ({navigation})=> { 
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
            <Image source={wakai1} style={{width: 300 ,height: 250}} />
            <Text ></Text>
            </View>
            <Text style={{fontWeight:'bold',fontSize:15, marginTop:5, marginLeft: 40}}>Footwear Man Wakai SM11988 CORE Blue  </Text>
             <Text style={{fontWeight: 'light',fontSize:10, marginTop:1, marginLeft: 40}}>30+ Wishlist</Text>
             <Text style={{fontWeight: 'light',fontSize:20, marginTop:1, marginLeft: 40, color: '#005BAE'}}>Rp, 233.500</Text>
            <Text style={{marginTop:10}}></Text>
            <CollapsibleView title="Detail" >
            <Text>Kondisi: Baru</Text> 
                <Text>Berat: 500 Gram</Text>
                <Text>Kategori: Slip On Pria</Text> 
                <Text>Etalase: Wakai Core</Text>
                <Text></Text>
                <Text>"Size:</Text>
                <Text>Size 36 (Panjang): 23.3 cm</Text>
                <Text>Size 37 (Panjang): 24 cm</Text>
                <Text>Size 38 (Panjang): 24.7 cm</Text>
                <Text>Size 39 (Panjang): 25.3 cm</Text>
                <Text>Size 40 (Panjang): 26 cm</Text>
                <Text>Size 41 (Panjang): 26,7 cm</Text>
                <Text>Size 42 (Panjang): 27.3 cm</Text>
                <Text>Size 43 (Panjang): 28 cm</Text>
                <Text>Size 44 (Panjang): 28.7 cm</Text>
                <Text>Size 45 (Panjang): 29.3 cm</Text>
                <Text></Text>
                <Text>Fleksibiltas optimal yang memungkinkan anda beraktivitas tetap nyaman dalam kondisi apapun.</Text>
                <Text>Outer sole anti selip dan Texturenya cocok di segala lingkungan.</Text>
                <Text>Produk Wakai Slip-on yang modis nyaman dipakai berbahan lembut dan fleksibel serta berkualitas' sangat ringan dan sol yang empuk sehingga anda tidak mudah lelah ketika memakainya, Dengan desain trendy dan warna - warna yang menarik sangat cocok menemani waktu bersantai anda."</Text>
          </CollapsibleView>

          <Text style={{fontSize:15, marginTop:100, marginLeft:30}}>Gerai lain</Text>
    <View style={{flexDirection: 'row'}}>
      <View style={{flexDirection : 'column'}}>
      <TouchableOpacity style={{marginTop: 1, marginBottom: 5, marginLeft:30, borderWidth : 1, padding: 3, alignItems: 'center'}}>
      <Tomboleiger 
            onPress={()=> handleGoTo('EigerStore')} 
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
      <Tombolardiles 
            onPress={()=> handleGoTo('ArdilesStore')} 
            />
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft:7, borderWidth : 1, padding: 3, alignItems: 'center'}}>
      <Tomboltomkins 
            onPress={()=> handleGoTo('TomkinsStore')} 
            />
      </TouchableOpacity>
      </View>
      </View>



            <Text style={{ marginTop:150 }}></Text>

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
          },
          kotakKANAN: {
            borderWidth : 1,
            borderColor: 'black',
            marginLeft:7.8
          }
});

export default WakaiSepatu;