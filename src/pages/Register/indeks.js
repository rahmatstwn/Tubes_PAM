import React, {Component} from 'react'
import { Button, Container, Grid, TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { firebaseAuthentication } from '../../config/firebase'
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';

export default class Register extends Component{
    state = {
        email:'',
        password: ''
    }
    handleChangeField = (e) =>{
        this.setState({[e.target.name]: e.target.value})
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
    /*render(){
        const {email, password} = this.state
        return(
            <Container>
                <Grid container justify="center">
                    <Grid xs="12" md="8" lg="4">
                        <h2>Halaman Registrasi / Daftar / Sign Up</h2>
                        <form onSubmit={this.handleSubmit}>
                            <TextField type="email" fullWidth margin="dense" variant="outlined" size="small" value={email} onChange={this.handleChangeField} name="email" label="Email" required />
                            <TextField type="password" fullWidth margin="dense" variant="outlined" size="small" value={password} onChange={this.handleChangeField} name="password" label="Password" required />
                            <Button type="submit" fullWidth variant="contained" color="primary">Registrasi</Button>
                        </form>
                        <p>Sudah punya akun? <Link to="/login">Login</Link></p>
                    </Grid>
                </Grid>
            </Container>
        )
    }*/
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
