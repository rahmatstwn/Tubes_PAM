import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash, Login, Register, Welcome} from '../pages/indeks';

const Stack = createStackNavigator();

const Router= () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="Splash" 
            component={Splash}
            options= {{
                headerShown: false,
            }} 
            />
            <Stack.Screen 
            name="Login" 
            component={Login}           
            />
            <Stack.Screen 
            name="Register" 
            component={Register}
            />
            <Stack.Screen 
                name="Welcome" 
                component={Welcome} 
                options= {{
                    headerShown: false,
                }} 
            />
        </Stack.Navigator>
    );
};

export default Router;

