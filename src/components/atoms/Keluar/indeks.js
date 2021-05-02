import React from 'react';
import {View,Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Keluar = ({onPress}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styless.bingkai}>
            <Text style={styless.teks}>Keluar</Text>
             </View>
        </TouchableOpacity> 
    );
};
const styless = {  
bingkai: {
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 30,
    borderRadius: 10,
    backgroundColor:'red',
  },
  teks : {
      paddingLeft: 120,
      paddingRight: 0,
      paddingTop:10,
      paddingBottom:10,
      fontSize: 15,
  },
};
export default Keluar;