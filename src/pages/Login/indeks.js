import React, {Component} from 'react'
import { firebaseAuthentication } from '../../config/firebase'
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';

export default class Login extends Component{
    state = {
        email:'',
        password: ''
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const {email, password} = this.state
        firebaseAuthentication.signInWithEmailAndPassword(email, password)
        .then(res=>{
            console.log(res)
            if(res.user.emailVerified){
                this.props.navigation.navigate("HalamanAwal");
            }else{
                alert('Verifikasi email anda terlebih dahulu!')
                firebaseAuthentication.signOut()
            }
        })
        .catch(error=>{
            alert(error.message)
        })
    }

    render() {
        return (
        <View style={styles.container}>    
        <Text style={{padding:10,margin:10,color:'red'}}>{this.state.email}</Text>
        
        <TextInput
        placeholder="Enter Email"
        style={{width:200, margin:10}}
        //value={email} onChangeText={this.handleChangeField} name="email" required
        onChangeText={email => this.setState({email})}
        />
        
        <TextInput
        placeholder="Enter Password"
        style={{width:200, margin:10}}
        //value={password} onChangeText={this.handleChangeField} name="password" required
        onChangeText={password => this.setState({password})}
        />
        
        
        <TouchableOpacity
        onPress={this.handleSubmit}
        style={{width:200,padding:10,backgroundColor:'magenta',alignItems:'center'}}>
        <Text style={{color:'white'}}>Login</Text>
        </TouchableOpacity>
        
        
         </View>
      
       );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
    
    });
