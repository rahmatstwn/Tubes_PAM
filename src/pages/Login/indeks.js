import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,TouchableOpacity,TextInput,Button,Keyboard
} from 'react-native';


export default class login extends Component {
	static navigationOptions= ({navigation}) =>({
		  title: 'Login',	
		  headerRight:	
		  <TouchableOpacity
			onPress={() => navigation.navigate('Home')}
			style={{margin:10,backgroundColor:'orange',padding:10}}>
			<Text style={{color:'#ffffff'}}>Home</Text>
		  </TouchableOpacity>
		
	});  
	constructor(props){
		super(props)
		this.state={
			username:'',
			password:''
		}
	}
	
	login = () =>{
		const {username,password} = this.state;
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
		if(username==""){
		  alert("Please enter your Username");
		  //this.setState({username:'Please enter Username'})	
		}
		
		else if(reg.test(username) === false)
		{
		alert("Username is Not Correct");
		//this.setState({username:'Username is Not Correct'})
		return false;
		  }

		else if(password==""){
		this.setState({password:'Please enter password'})
		}
		else{
		
		fetch('https://web.postman.co/workspace/My-Workspace~3c356685-cbba-4794-8cde-08d530ea768b/request/15514355-479328a7-dbc9-4be7-b9f8-520953aa96ba',{
			method:'POST',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				// we will pass our input data to server
				username: username,
				password: password
			})
			
		})
		.then((response) => response.json())
		 .then((responseJson)=>{
			 if(responseJson == "ok"){
				 // redirect to profile page
				 alert("Successfully Login");
				 this.props.navigation.navigate("HalamanAwal");
			 }else{
				 alert("Wrong Login Details");
			 }
		 })
		 .catch((error)=>{
		 console.error(error);
		 });
		}
		
		
		Keyboard.dismiss();
	}
	
  render() {
    return (
	<View style={styles.container}>    
	<Text style={{padding:10,margin:10,color:'red'}}>{this.state.email}</Text>
	
	<TextInput
	placeholder="Your Username"
	style={{width:200, margin:10}}
	onChangeText={username => this.setState({username})}
	/>
	
	<TextInput
	placeholder="Your Password"
	style={{width:200, margin:10}}
	onChangeText={password => this.setState({password})}
	
	/>
	
	
	<TouchableOpacity
	onPress={this.login}
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

AppRegistry.registerComponent('login', () => login);
