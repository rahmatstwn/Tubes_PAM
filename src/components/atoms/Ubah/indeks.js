import React from 'react';
import {View,Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Ubah = ({onPress}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styless.bingkai}>
            <Text style={styless.teks}>Ubah</Text>
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
    marginLeft:190,
  },
  teks : {
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop:3,
      paddingBottom:3,
  },
};
export default Ubah;