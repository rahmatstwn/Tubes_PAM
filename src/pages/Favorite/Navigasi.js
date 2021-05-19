import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PilihanSepatu from './PilihanSepatu';
import ListSepatu from './ListSepatu';

const Stack = createStackNavigator();

const Router= () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
           name="Nama Sepatu" component={ListSepatu}
            />
            <Stack.Screen 
          name="Pilihan" component = {PilihanSepatu}
            />
        </Stack.Navigator>
    );
};

export default Router;
