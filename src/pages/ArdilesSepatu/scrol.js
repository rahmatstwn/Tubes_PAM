import React, { Component } from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
//import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

export default class App extends Component {
  state = {
    collapsed: true,
    
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    const {  } = this.state;
    const {container, header, headerText, content} = styles

    return (
      <View style={container}>
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>

          <TouchableOpacity onPress={this.toggleExpanded}>
            <View style={header}>
              <Text style={headerText}>Single Collapsible</Text>
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={this.state.collapsed} align="center">
            <View style={content}>
              <Text>
                Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
                ribs 
              </Text>
            </View>
          </Collapsible>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
});
import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Tomboluser from './user';
import Favorite from './favorite';
import {ardiles1, drob} from '../../assets/indeks';
import Tombolyongki from '../EigerStore/tombolyongki';
import Tombolwakai from '../EigerStore/tombolwakai';
import Tomboleiger from '../TomkinsStore/tomboleiger'; 
import Tomboltomkins from '../EigerStore/tomboltomkins';
import Tombolback from '../EigerStore/tombolback';
import Collapsible from 'react-native-collapsible';

const Separator = () => (
    <View style={styless.Separator} />
);

export default class App extends Component {
  state = {
    collapsed: true,
    
  };

   

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {

        const handleGoTo = ({navigation}) => screen =>{
            navigation.navigate(screen) 
        }
        
    const {container, header, headerText, content} = styless
    return (
      <View style={container}>
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
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
            <Image source={ardiles1} style={{width: 300 ,height: 230}} />
            <Text ></Text>
            </View>
            <Text style={{fontWeight:'bold',fontSize:15, marginTop:5, marginLeft: 40}}>Ardiles Men Diavolo Sepatu Badminton - Biru - Biru, 39 </Text>
             <Text style={{fontWeight: 'light',fontSize:10, marginTop:1, marginLeft: 40}}>33+ Wishlist</Text>
             <Text style={{fontWeight: 'light',fontSize:20, marginTop:1, marginLeft: 40, color: '#005BAE'}}>Rp, 164.090</Text>
            
             <TouchableOpacity onPress={this.toggleExpanded}>
            <View style={header}>
            <View style={{flexDirection:'row'}}>
              <Text style={headerText}>Detail </Text>
                <Image source={drob} style={{width: 20, height:20 , marginLeft: 200 }} />
            </View>
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={this.state.collapsed} align="center">
            <View style={content}>
              <View>
                <Text>Kondisi: Baru</Text> 
                <Text>Berat: 1.001 Gram</Text>
                <Text>Kategori: Sepatu Badminto</Text> 
                <Text>Etalase: Sepatu Pria</Text>
                <Text></Text>
                <Text>DIAVOLO (BIRU PERAK HITAM||HIJAU ABU ORANGE||MERAH HITAM PERAK||HITAM MERAH)</Text>
                <Text></Text>
                <Text>DIAVOLO, sepatu badminton yang sangat nyaman digunakan baik saat latihan maupun pada saat pertandingan. Koleksi sepatu Ardiles ini memiliki desain yang modern serta memiliki variasi warna yang cukup banyak.</Text>
                <Text></Text>
                <Text>Material Khusus</Text>
                <Text>Mesh Superior</Text>
                <Text>Bahan mesh super ringan membuatmu dapat berkonsentrasi saat bermain tanpa khawatir dengan beban di kaki.</Text>
                <Text>Power Cushion</Text>
                <Text>Bahan Phylon yang ringan membuatmu bisa melakukan gerakan yang lebih cepat dan gesit.Usage / Sepatu Badminton Pria Material / Mesh Superior || Power Cushion</Text>
                <Text></Text>
                <Text>Size Chart (EU)</Text>
                <Text>Size 39, Panjang = 24.5 cm.</Text>
                <Text>Size 40, Panjang = 25 cm.</Text>
                <Text>Size 41, Panjang = 26 cm.</Text>
                <Text>Size 42, Panjang = 26.5 cm.</Text>
                <Text>Size 43, Panjang = 27.5 cm.</Text>
                <Text>Size 44, Panjang = 28 cm.</Text>
              </View>

    
            </View>
          </Collapsible>

          <Text style={{fontSize:15, marginTop:20, marginLeft:30}}>Gerai lain</Text>
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
      </View>
    );
  }
}

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
          },
    container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 30,
  },
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'black',
    marginHorizontal: 30,
  },
});
