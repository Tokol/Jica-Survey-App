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
  Alert
} from 'react-native';



import CountryPicker from 'react-native-country-picker-modal';
import countryData from '../../../../constratints/CountryCodes.json'

const MAX_LENGTH_CODE = 6;
const MAX_LENGTH_NUMBER = 20;

// if you want to customize the country picker
const countryPickerCustomStyles = {};

// your brand's theme primary color
const brandColor = '#744BAC';

const styles = StyleSheet.create({
  countryPicker: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:-77
  },
  container: {
   //margin:20
  },
  header: {
    textAlign: 'center',
    marginTop: 60,
    fontSize: 22,
    margin: 20,
    color: '#4A4A4A',
  },
  form: {
   // flex:1,
    margin: 20
  },
  textInput: {
    
    //flex: 1,
    marginTop:3,
    fontSize: 20,
    color: brandColor
  },
  button: {
    marginTop: 20,
    height: 50,
    backgroundColor: brandColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'bold'
  },
  wrongNumberText: {
    margin: 10,
    fontSize: 14,
    textAlign: 'center'
  },
  disclaimerText: {
    marginTop: 30,
    fontSize: 12,
    color: 'grey'
  },
  callingCodeView: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  callingCodeText: {
    fontSize: 20,
    color: brandColor,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    paddingRight: 10
  }
});

export default class PhoneInput extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      enterCode: false,
      spinner: false,
      country: {
        cca2: 'NP',
        callingCode: '977'
      }
    };
  }
    
  
  componentDidMount(){
    const userLocaleCountryCode =  DeviceInfo.getDeviceCountry();
     // console.log(userLocaleCountryCode);
     // console.log(countryData);
        
      countryData.map((item,index)=>{
      //  console.log(item);
          if(userLocaleCountryCode==item.code){

             

            this.setState({
                  country: {
                    
                      
                            cca2:userLocaleCountryCode,
                            callingCode:item.dial_code
                      
                  }
                  }
                

            )
          }
      })
  

}

  _onChangeText = (val) => {
    if (!this.state.enterCode) return;
    if (val.length === MAX_LENGTH_CODE)
    this._verifyCode();
  }

  _tryAgain = () => {
    this.refs.form.refs.textInput.setNativeProps({ text: '' })
    this.refs.form.refs.textInput.focus();
    this.setState({ enterCode: false });
  }

  _getSubmitAction = () => {
    this.state.enterCode ? this._verifyCode() : this._getCode();
  }

  _changeCountry = (country) => {
    console.log(country)
    this.setState({ country });
    
  }

  _renderFooter = () => {

    
    

  }

  _renderCountryPicker = () => {

    
    return (
      <CountryPicker
      ref={'countryPicker'}
      closeable
      
        style={styles.countryPicker}
        onChange={this._changeCountry}
        cca2={this.state.country.cca2}
        styles={countryPickerCustomStyles}
        translation='eng'/>
    );

  }

  _renderCallingCode = () => {



    return (
      <View style={styles.callingCodeView}>
        <Text style={styles.callingCodeText}>+{this.state.country.callingCode}</Text>
      </View>
    );

  }

  render() {

    let headerText = `What's your ${this.state.enterCode ? 'verification code' : 'phone number'}?`
    let buttonText = this.state.enterCode ? 'Verify confirmation code' : 'Send confirmation code';
    let textStyle = {
      height: 30,
      width:'60%',
      textAlign: 'left',
      fontSize: 18,
    
    } 

    return (

      <View style={styles.container}>

     


          <View style={{flexDirection:'row',  
            height:55,
          
          padding:10,width:'100%', borderStyle: 'solid', marginLeft: -4,overflow: 'hidden', marginBottom: 10, marginTop: 10, borderWidth: 1, borderColor: 'lightgrey', borderRadius: 25}}>
      <View style={{marginTop:5, }}>
          <CountryPicker
closeable
onChange={this._changeCountry}
cca2={this.state.country.cca2}

translation='eng'/>
</View>
         <View style={styles.callingCodeView}>
        <Text style={styles.callingCodeText}>+{this.state.country.callingCode}</Text>
      </View>

            <TextInput
              name={'phoneNumber' }
              type={'TextInput'}
              underlineColorAndroid={'transparent'}
              autoCapitalize={'none'}
              autoCorrect={false}
              onChangeText={this.props.onChangeText}
              placeholder={'Phone Number'}
              keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
              style={[ styles.textInput, textStyle ]}
              value = {this.props.value}  
              autoFocus
              placeholderTextColor={brandColor}
              selectionColor={brandColor}
              maxLength={20}
             
               />

          </View>

          </View>

         

    


    


    );
  }
}
