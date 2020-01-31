import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, 
    Image, ActivityIndicator,
    SafeAreaView, Button,View} from 'react-native';

import styles from '../../constratints/styles'
import Logo from '../../assets/JicaLogo.jpg'

import CustomeTextInput from '../../../src/screens/dashboard/survey/component/CustomeTextInput'
import AwesomeButton from 'react-native-really-awesome-button'
import {LOGIN_URL} from '../../networks/Urls'
import {callPostApiNoHeadr} from '../../networks/Request'
import {LoginAction} from '../../../store/actions/useraction'

import { connect } from 'react-redux';
import Dialog from "react-native-dialog";
class LoginScreen extends Component{

constructor(props){
    super(props)
    this.state={
        username:'',
        password:'',
        token:'',
        loading:false,
        showDialog:false
    }
}


    requestlogin=()=>{

            this.setState({
                loading:true
            })


                callPostApiNoHeadr(LOGIN_URL,{
                        username:this.state.username,
                        password:this.state.password
                },
                
                
                ).then((response)=>{
                        console.log(response)
                        console.log(response.token)

                    
                            this.setState({
                                loading:false,
                               // token:response.token
                            }
                            
                            )

                                const token = response.token;

                                if(token!=undefined){

                                   // alert(1);
                                    this.props.dispatch(LoginAction(token))
                                        
                                    console.log(this.props.userReducer.isSelected)
                                    console.log(this.props.userReducer.loggedIn)
                                    
                                }
                                else{
                                        this.setState({
                                            showDialog:true
                                        })
                                }


                                
                })



                


            }

            dialogPressed=()=>{
                this.setState({
                    showDialog:!this.state.showDialog
                })
            }


    render(){

        return(<SafeAreaView style = {styles.main}>
                <View style={styles.container}>
                    <Image source={Logo} style={styles.logoStyle}/>

                  <CustomeTextInput
                        icon = 'user'
                        placeholder = 'User name'
                        keyboardType = 'default'
                        onChangeText= {(user)=>this.setState({
                            username:user
                        })}

                        value = {this.state.username}


                  />



<CustomeTextInput
icon = 'key'
placeholder = 'Password'
secureTextEntry = {true}
onChangeText= {(password)=>this.setState({
    password:password
})}
value = {this.state.password}
                  />

<Dialog.Container visible = {this.state.showDialog}>
           <Dialog.Title> Opss! somethingWent Wrong </Dialog.Title>
           <Dialog.Description>
            Invalid Username or Password!!
          
           </Dialog.Description>
           <Dialog.Button label="ok"
           onPress = {this.dialogPressed}
           />
          
             
         </Dialog.Container>


<View style={{marginTop:'10%'}}>

                 <AwesomeButton
          height={65}
          width={300}
          backgroundColor = '#034d96'
         onPress = {this.requestlogin}
         
         raiseLevel = {1}
         backgroundDarker = '#fff'
          >   

          <Text style={{color:'#fff'}}>
          LOGIN
          </Text>
          </AwesomeButton>
          </View>


        <ActivityIndicator
        animating = {this.state.loading}
            />
                
                <View style={{marginTop:'75%'}}/>
                </View>
            </SafeAreaView>
            )
    }
}



const mapStateToProps = (state) => ({
    userReducer: state.userReducer,
  
  });
  
  
  export default  connect (mapStateToProps)  (LoginScreen);