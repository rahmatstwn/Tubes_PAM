import React from "react";
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import CollapsibleView from "@eliav2/react-native-collapsible-view";
import Tomboluser from './user';
import Favorite from './favorite';
import {tomkins1, drob} from '../../assets/indeks';
import Tombolardiles from '../EigerStore/tombolardiles';
import Tombolyongki from '../EigerStore/tombolyongki';
import Tombolwakai from '../EigerStore/tombolwakai';
import Tomboleiger from '../TomkinsStore/tomboleiger'; 
import Tombolback from '../EigerStore/tombolback';



const Separator = () => (
    <View style={styless.Separator} />
); 

const TomkinsSepatu = ({navigation})=> { 
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
            <Image source={tomkins1} style={{width: 300 ,height: 250}} />
            <Text ></Text>
            </View>
            <Text style={{fontWeight:'bold',fontSize:15, marginTop:5, marginLeft: 40}}>TOMKINS Eternity - Black White  </Text>
             <Text style={{fontWeight: 'light',fontSize:10, marginTop:1, marginLeft: 40}}>73+ Wishlist</Text>
             <Text style={{fontWeight: 'light',fontSize:20, marginTop:1, marginLeft: 40, color: '#005BAE'}}>Rp, 308.000</Text>
            <Text style={{marginTop:10}}></Text>
            <CollapsibleView title="Detail" >
            <Text>Kondisi: Baru</Text> 
                <Text>Berat: 1.000 Gram</Text> 
                <Text>Kategori: Sneakers Pria</Text>
                <Text>Etalase: Men Shoes</Text>
                <Text></Text>
                <Text>Sport kasual yang nyaman dipakai sepanjang hari.</Text>
                <Text>- Slip On</Text>
                <Text>- Sole Phylon + TPU Airbag</Text>
                <Text>- 4 Pasang Eyelet</Text>
                <Text>- Insole Mesh Foam</Text>
                <Text>- Warna Hitam</Text>
                <Text></Text>
                <Text>Size Chart</Text>
                <Text></Text>
                <Text>36 = 23,0 cm</Text>
                <Text>37 = 23,5 cm</Text>
                <Text>38 = 24,5 cm</Text>
                <Text>39 = 25,2 cm</Text>
                <Text>40 = 25,6 cm</Text>
                <Text>41 = 26,5 cm</Text>
                <Text>42 = 27,0 cm</Text>
                <Text>43 = 27,8 cm</Text>
                <Text>44 = 28,2 cm</Text>
                <Text>45 = 28,5 cm</Text>
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
      <Tombolwakai 
            onPress={()=> handleGoTo('WakaiStore')} 
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

export default TomkinsSepatu;