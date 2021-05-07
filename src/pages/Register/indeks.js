import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Input, Button } from '../../components/indeks';

const Register = ()=> {
    const [form, setForm] = useState ({
        fullName : '',
        username: '',
        password: '',           
    });
    const sendData = () => {
        console.log('data yang dikirim', form);
    }
    const onInputChange = (value, input) => {
        setForm({
            ...form,
            [input ] : value,        
        });
    };

    return(
        <View style={styles.wrapper.page}>
            <ScrollView>
            <View style={styles.ilustration} />
            <Text style={styles.text.desc}>
                Mohon Mengisi beberapa data untuk Proses pendaftaran anda
            </Text>
            <View style={styles.space(64)}/>
            <Input placeholder="Nama lengkap" value={form.fullName} onChangeText={(value) => onInputChange(value, 'fullName')} />
            <View style={styles.space(33)} />
            <Input placeholder="Username" value={form.username} onChangeText={(value) => onInputChange(value, 'username' )} />
            <View style={styles.space(33)}  />
            <Input placeholder="Password" value={form.password} onChangeText={(value) => onInputChange(value, 'password' )} 
            secureTextEntry={true} />
            <View style={styles.space(60)}  />
            <Button title="Daftar" onPress={sendData} />
            </ScrollView>           
        </View>
    );
};

const styles = {
    wrapper: {
        page: {
            padding:20,
        }, 
    },  
    ilustration: {
        width:106,
        height: 115,
        backgroundColor: 'purple',
        marginTop:20,
    },
    text: {
        desc: {
            fontSize:14,
            fontWeight: 'bold',
            color: '#A55EEA',
            marginTop: 16,
            maxWidth: 200,
        },
    },

    space: value => {
        return {
            height:value,
        };
    },
};


export default Register;
