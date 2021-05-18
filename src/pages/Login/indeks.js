import React, {Component} from 'react'
import { Button, Container, Grid, TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { firebaseAuthentication } from '../../config/firebase'
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';

export default class Login extends Component{
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
    /*render(){
        const {email, password} = this.state
        return(
            <Container>
                <Grid container justify="center">
                    <Grid xs="12" md="8" lg="4">
                        <h2>Halaman Login</h2>
                        <form onSubmit={this.handleSubmit}>
                            <TextField type="email" fullWidth margin="dense" variant="outlined" size="small" value={email} onChange={this.handleChangeField} name="email" label="Email" required />
                            <TextField type="password" fullWidth margin="dense" variant="outlined" size="small" value={password} onChange={this.handleChangeField} name="password" label="Password" required />
                            <Button type="submit" fullWidth variant="contained" color="primary">Login</Button>
                        </form>
                        <p>Belum punya akun? <Link to="/registrasi">Registrasi</Link></p>
                    </Grid>
                </Grid>
            </Container>
        )
    }*/

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
