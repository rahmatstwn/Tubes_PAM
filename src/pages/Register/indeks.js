import React, {Component} from 'react'
import { firebaseAuthentication } from '../../config/firebase'
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';

export default class Register extends Component{
    state = {
        email:'',
        password: ''
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const {email, password} = this.state
        firebaseAuthentication.createUserWithEmailAndPassword(email, password)
        .then(res=>{
            firebaseAuthentication.currentUser.sendEmailVerification()
            .then(()=>{
                alert('Mohon verifikasi email anda');
                this.props.history.push('/Login');
            })
            .catch((error)=>{
                alert(error.message)
            })
        })
        .catch(err=>{
            alert(err.message)
        })
    }

    render() {
        return (
        <View style={styles.container}>
          
          <TextInput
          placeholder="Enter Email"
          style={{width:250,margin:10, borderColor:"#333", 
          borderWidth:1}}	
          underlineColorAndroid="transparent"
          onChangeText= {email => this.setState({email})}
          />
          
          <TextInput
          placeholder="Enter Password"
          style={{width:250,margin:10, borderColor:"#333", 
          borderWidth:1}}	
          underlineColorAndroid="transparent"
          onChangeText= {password => this.setState({password})}
          />
          
          <TouchableOpacity
            onPress={this.handleSubmit}
            style={{width:250,padding:10, backgroundColor:'magenta',
            alignItems:'center'}}>
          <Text style={{color:'#fff'}}>Signup</Text>
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
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
    });
