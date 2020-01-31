import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, 
    Image,
    SafeAreaView, Button,View} from 'react-native';
//import { SimpleSurvey } from 'react-native-simple-survey';
import styles from '../../constratints/styles'
import Logo from '../../assets/JicaLogo.jpg'
import AwesomeButton from "react-native-really-awesome-button/src/themes/rick";


class Login extends Component{

    static navigationOptions = ({navigation}) => ({
        headerMode: 'none',
        header: null
    })


    render(){
        return(<SafeAreaView style={styles.main}>

            <View style={styles.container}>
            <Image 
            source = {Logo}
            style={styles.logoStyle}
            />
        
            <Text style={styles.titleText}> Farmers Survey   </Text>
             <View style={{marginTop:'40%'}}>
<AwesomeButton
          height={65}
          width={300}
          backgroundColor = '#034d96'
         onPress = {()=>this.props.navigation.navigate('login')}
            
         raiseLevel = {1}
         backgroundDarker = '#fff'
          >   

          <Text style={{color:'#fff'}}>
          LOGIN
          </Text>
          </AwesomeButton>
</View>

          <View style={{marginTop:'70%'}}/>
            </View>

            </SafeAreaView>
            )
    }
}

export default Login