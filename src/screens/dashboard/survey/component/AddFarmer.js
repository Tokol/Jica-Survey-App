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
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import Dialog from "react-native-dialog";
//import KeyboardA
import styles from '../../../..//constratints/styles'
import CustomeTextInput from '../component/CustomeTextInput'
import PhoneInput from '../component/PhoneInput'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import AwesomeButton from "react-native-really-awesome-button/src/themes/rick";
const brandColor = '#744BAC';
import { connect } from 'react-redux';
import { Dropdown } from 'react-native-material-dropdown'
import {Header, Right,Left} from 'native-base'
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {deselectSurvey}from '../../../../../store/actions/useraction'
import ActionButton from 'react-native-circular-action-menu';
class AddFarmer extends Component{



  static navigationOptions = ({navigation}) => ({
    headerMode: 'none',
    header: null
})



constructor(props){
  super(props)
  this.state={
    showDialog:false,
    error:'',

    genderValue:'MALE',
      fullname:'',
      address:'',
      phone:'',
      familyMember:0,
      farmerNumber:0,
      ethinicity:'',
      
    types:[{
        label:'Male', value:'MALE'
    },
    {
        label:'Female', value:'FEMALE'
    },
    {
      label:'Other', value:'OTHER'
    },
  
  
  ],
  
  ethinic:[]
  }
}



componentDidMount(){

  ethinicData = this.props.userReducer.ethinicData

  filterEthicinc = ethinicData.map(item=>{return{value:item.name}})

    this.setState({
      ethinic:filterEthicinc
    })





}


onSaveFarmer=()=>{

    


    if(this.state.phone==''|| this.state.fullname=='' 
      || this.state.address=='' || this.state.ethinicity==''
      || this.state.familyMember==''|| this.state.familyMember==''
    
    ){
        alert('some fields are missing')
    }

    else{



      item={

      "full_name": this.state.fullname,
      "ethnicity":this.state.ethinicity,
      "gender":this.state.genderValue,
      "phone_number": this.state.phone,
      "address": this.state.address,
      "municipality":this.props.userReducer.selectedMunId,
      "group":this.props.userReducer.selectedGroupId,
      "family_members_count":this.state.familyMember,
      "family_workers_count":this.state.farmerNumber,

      }


      const myObjStr = JSON.stringify(item); 

      
    this.props.navigation.navigate('crops', {
        farmer: myObjStr})
    
    }
}

goBack=()=>{
  this.props.dispatch(deselectSurvey())
}


onChangeEthininc=(value,index)=>{

   ethinic =  this.props.userReducer.ethinicData[index].id
  this.setState({
    ethinicity:ethinic
  })

  console.log(this.state.ethinicity)
}
dialogPressed=()=>{
  this.setState({
    showDialog:!this.state.showDialog
  })
}
  render(){

    {console.log(JSON.stringify(this.props.userReducer.data))}
    return(


  <View style={{flex:1, flexDirection:'column'}}>

<View>
<Header style={styles.headerStyle}>

<Left>
        <TouchableOpacity onPress ={this.goBack}>
            <Text style={styles.headerLeft}> Go back </Text>
            </TouchableOpacity>
    </Left>
    
</Header>
      
</View>

      <ParallaxScrollView
      backgroundColor="transparent"
      parallaxHeaderHeight={150}
      renderForeground={() => (
       <View style={{ flex: 1,  alignItems: 'center', justifyContent: 'center' }}>
           <View style={{ height:50, width:'100%',  flexDirection:'row',  backgroundColor:brandColor,}}>
                    <Text style={styles.totalText}> Total Data Collected : </Text>
                        
                        <Text style={styles.totalText}> {'     '} {this.props.userReducer.data.length}</Text>
                        </View>

                                
                        <View style={{height:50, width:'100%', flexDirection:'row',  backgroundColor:brandColor,}}>
                    <Text style={styles.totalText}> {this.props.userReducer.selectedMuni}  : {'  '}  {this.props.userReducer.selectedGroup} </Text>
                        
                       
                        </View>
        </View>
      )}>
      <View style={{ height: '80%' }}>
      <View style={styles.main}>
 
         <View style={styles.container}>
         
    <PhoneInput
    onChangeText = { (phone)=>
      this.setState({
       phone:phone
      })  
    }
    value = {this.state.phone}
    />
   
    
    <CustomeTextInput
    placeholder = 'Full Name'
    keyboardType = {'default'}
    icon = 'user'
    onChangeText={(fullname)=>this.setState({
      fullname:fullname
    })}
 
    value = {this.state.fullname}
    
    />
    
        
    
    
    <CustomeTextInput
    placeholder = 'Address'
    keyboardType = {'default'}
    icon = 'map'
    onChangeText={(address)=>this.setState({
     address:address
   })}
   value = {this.state.address}
    />
    
                
    
    <CustomeTextInput
    placeholder = 'No. of family Memeber'
    keyboardType = {'numeric'}
    icon = 'users'
    onChangeText={(familyMember)=>this.setState({
     familyMember:familyMember
   })}
   value = {this.state.familyMember}
    />
    
    
    <CustomeTextInput
    placeholder = 'Working as Farmer in Family'
    keyboardType = {'numeric'}
    icon = 'users'
    onChangeText={(farmerNumber)=>{
      console.log(farmerNumber)
      console.log(this.state.familyMember)
       if(Number(farmerNumber)>Number(this.state.familyMember)){
           this.setState({
             showDialog:true,
             error:'Number of working as farmer in family memeber is greater than total family'
           })
       }
 
       else{
         this.setState({
           farmerNumber:farmerNumber
         })
         
       }
    }
     
 
     
     }
 
   value = {this.state.farmerNumber}
    />
    
    <Dropdown
   
   containerStyle = {{width:'100%'}}
         label='Choose Ethinicity'
         baseColor = {brandColor}
         textColor = {brandColor}
         pickerStyle = {{backgroundColor:'#fff'}}
         labelSize={18}
         data={this.state.ethinic}
         onChangeText = {(value,index)=>this.onChangeEthininc(value,index)}
       />
    
  
 
    <RadioForm
   radio_props={this.state.types}
   initial={0}
   formHorizontal={true}
   labelHorizontal={false}
   buttonColor={brandColor}
   animation={true}
         selectedButtonColor={brandColor}  
   labelStyle={{color:brandColor}}
   onPress={(value,index) => {this.setState({genderValue:value})}}
 />
 
 <Dialog.Container visible = {this.state.showDialog}>
           <Dialog.Title> Opss! somethingWent Wrong </Dialog.Title>
           <Dialog.Description>
          {this.state.error} 
          
           </Dialog.Description>
           <Dialog.Button label="ok"
           onPress = {this.dialogPressed}
           />
          
             
         </Dialog.Container>
    
   
    
    <AwesomeButton
              height={65}
              width={300}
              backgroundColor = {brandColor}
              raiseLevel = {1}
              onPress = {this.onSaveFarmer}
              >  
 
              <Text style={{color:'#fff'}}>
              Add Farmer
              </Text>
              </AwesomeButton>
    
     
           </View>
          
       </View>
      </View>
    </ParallaxScrollView>
     

  </View>
      )
  }



}

const mapStateToProps = (state) => ({
  userReducer: state.userReducer,


});


export default connect(mapStateToProps) (AddFarmer);
