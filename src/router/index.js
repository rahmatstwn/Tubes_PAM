import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash, Favoriteuser, Login, Register, Welcome, HalamanAwal, EigerSepatu, EigerStore, TomkinsStore, WakaiStore, YongkiStore, ArdilesStore, ArdilesSepatu, TomkinsSepatu, WakaiSepatu, YongkiSepatu, AkunUser} from '../pages/indeks';

const Stack = createStackNavigator();

const Router= () => {
    return (
        <Stack.Navigator >
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
             <Stack.Screen 
                name="HalamanAwal" 
                component={HalamanAwal} 
                options= {{
                    headerShown: false,
                }}             
            />
            <Stack.Screen 
                name="EigerStore" 
                component={EigerStore} 
                options= {{
                    headerShown: false,
                }}             
            />
            <Stack.Screen 
                name="TomkinsStore" 
                component={TomkinsStore} 
                options= {{
                    headerShown: false,
                }}             
            />
            <Stack.Screen 
                name="WakaiStore" 
                component={WakaiStore} 
                options= {{
                    headerShown: false,
                }}             
            />
            <Stack.Screen 
                name="YongkiStore" 
                component={YongkiStore} 
                options= {{
                    headerShown: false,
                }}             
            />
            <Stack.Screen 
                name="ArdilesStore" 
                component={ArdilesStore} 
                options= {{
                    headerShown: false,
                }}             
            />
            <Stack.Screen 
                name="EigerSepatu" 
                component={EigerSepatu} 
                options= {{
                    headerShown: false,
                }}             
            />
            <Stack.Screen 
                name="ArdilesSepatu" 
                component={ArdilesSepatu} 
                options= {{
                    headerShown: false,
                }}             
            />
            <Stack.Screen 
                name="TomkinsSepatu" 
                component={TomkinsSepatu} 
                options= {{
                    headerShown: false,
                }}             
            />
            <Stack.Screen 
                name="WakaiSepatu" 
                component={WakaiSepatu} 
                options= {{
                    headerShown: false,
                }}             
            />
            <Stack.Screen 
                name="YongkiSepatu" 
                component={YongkiSepatu} 
                options= {{
                    headerShown: false,
                }}             
            />
            <Stack.Screen 
                name="AkunUser" 
                component={AkunUser} 
                options= {{
                    headerShown: false,
                }}             
            />
            <Stack.Screen 
                name="Favoriteuser" 
                component={Favoriteuser} 
                options= {{
                    headerShown: false,
                }}             
            />

        </Stack.Navigator>
    );
};

export default Router;

