import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import React, { Component } from 'react';
import DeviceInfo from 'react-native-device-info'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  Animated,
  Alert,
  KeyboardAvoidingView
} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
const brandColor = '#744BAC';
class CustomeTextInput extends Component{

    constructor(props){
        super(props)
        this.state={
            navBarHeight: (Platform.OS === 'ios') ? 64 : -178,
        }
             
    }

    render(){

        let textStyle = {
            height: 30,
            width:'70%',
            textAlign: 'left',
            fontSize: 18,
           // marginLeft:5,
            
          
          } 

        return(
            
            <View style={{flexDirection:'row',
            
            height:52,  
            padding:5,
            justifyContent:'space-evenly',width:'100%', borderStyle: 'solid', marginLeft: -4,overflow: 'hidden', marginBottom: 10, marginTop: 10, borderWidth: 1, borderColor: 'lightgrey', borderRadius: 25}}>
           
          
             <View style={{ marginTop:14}}>
           <Icon
           name={this.props.icon}
           size={22}
           color={brandColor}
           
           />

</View>
               
                  <TextInput
                    
                    underlineColorAndroid={'transparent'}
                  //  onFocus={Keyboard.dismiss()}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    onChangeText={this.props.onChangeText}
                    placeholder={this.props.placeholder}
                    keyboardType={this.props.keyboardType}
                    secureTextEntry = {this.props.secureTextEntry}
                    style={[ styles.textInput, textStyle ]}
                    //returnKeyType='default'
                    autoFocus = {false}
                    value = {this.props.value}

                    placeholderTextColor={brandColor}
                    selectionColor={brandColor}
                    maxLength={20}
                  
                     />
     
     
      </View>
                

           
            )
    }
}
const styles = StyleSheet.create({
    textInput:{
        //marginLeft: 20,
    fontSize: 20,
    color: brandColor,
    marginTop:10,
       
       
    },
})

export default CustomeTextInput
