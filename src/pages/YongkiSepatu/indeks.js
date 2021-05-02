import React from "react";
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import CollapsibleView from "@eliav2/react-native-collapsible-view";
import Tomboluser from './user';
import Favorite from './favorite';
import {yongki1, drob} from '../../assets/indeks';
import Tombolardiles from '../EigerStore/tombolardiles';
import Tombolwakai from '../EigerStore/tombolwakai';
import Tomboleiger from '../TomkinsStore/tomboleiger'; 
import Tombolback from '../EigerStore/tombolback';
import Tomboltomkins from "../EigerStore/tomboltomkins";



const Separator = () => (
    <View style={styless.Separator} />
); 

const YongkiSepatu = ({navigation})=> { 
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
            <Text style={styless.title}>Yongki Store</Text>
            <Favorite
            onPress={()=> handleGoTo('Favoriteuser')} 
            />
            <Tomboluser
            onPress={()=> handleGoTo('AkunUser')} 
            />         
            </View>
            <Separator />
            <View style={styless.bingkai}>
            <Image source={yongki1} style={{width: 300 ,height: 250}} />
            <Text ></Text>
            </View>
            <Text style={{fontWeight:'bold',fontSize:15, marginTop:5, marginLeft: 40}}>YONGKI KOMALADI SSCP1715-24 NAVY  </Text>
             <Text style={{fontWeight: 'light',fontSize:10, marginTop:1, marginLeft: 40}}>43+ Wishlist</Text>
             <Text style={{fontWeight: 'light',fontSize:20, marginTop:1, marginLeft: 40, color: '#005BAE'}}>Rp, 199.000</Text>
            <Text style={{marginTop:10}}></Text>
            <CollapsibleView title="Detail" >
            <Text>Kondisi: Baru</Text> 
                <Text>Berat: 1.000 Gram</Text>
                <Text>Kategori: Pantofel Pria</Text> 
                <Text>Etalase: SEPATU PRIA</Text>
                <Text></Text>
                <Text>Seluruh produk Yongki Komaladi dibuat dengan rapi, teliti, modis, dan peduli pentingnya kualitas. Semua produk, mulai dari sepatu, sandal, heels, tas, dan dompet, didesain langsung oleh anak bangsa yang kita kenal dengan nama Yongki Komaladi.</Text>
                <Text></Text>
                <Text>Untuk kenyamanan pemakainya (khusus sepatu dan sandal), Maestro Yongki benar-benar menyesuaikan karyanya dengan bentuk anatomi kaki manusia, sehingga tidak bertentangan dengan prinsip-prinsip ortopedi.</Text>
                <Text></Text>
                <Text>Sedangkan untuk tas dan dompet, didesain menawan dengan memperhatikan detail setiap lekukannya, untuk meningkatkan penampilan elegan di segala aktivitas.</Text>
                <Text></Text>
                <Text>Nuansa simple dan elegan pada seluruh produk Yongki Komaladi cocok untuk menemani aktivitas harian kamu, mulai dari ngantor, hangout, jalan ke mal, traveling, hingga ke pesta</Text>

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
      <Tombolwakai 
            onPress={()=> handleGoTo('WakaiStore')} 
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

export default YongkiSepatu;