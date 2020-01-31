
import PropTypes from 'prop-types'

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
//const brandColor = '#744BAC';
import {Header, Right,Left} from 'native-base'
import styles from '../../../..//constratints/styles'
import CustomeTextInput from '../component/CustomeTextInput'
import { Dropdown } from 'react-native-material-dropdown'
import AwesomeButton from "react-native-really-awesome-button/src/themes/rick";
const brandColor = '#744BAC';
import { connect } from 'react-redux';

import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/FontAwesome';

import {SaveToMainData} from '../../../../../store/actions/useraction'
class AddCorps extends Component{

  static navigationOptions = ({navigation}) => ({
    headerMode: 'none',
    header: null
})
    
    constructor(props){
        super(props)
      
        this.state={
          
            cropsData:[],
        
                crops:'',
                cropsnum:0,
                methodType:'',
                variety:'',
                startDate:'',
                endDate:'',
                 area:'',
                 areaType:[],
                 areaTypeValues:'',
                cropsLabel:'',
                totalProduction:'',
                totalSales:'',
                costPerKg:'',
                generalCost:'',
                laborCost:'',
                otherCost:'',
                showDialog:false,
                title:'',
                desc:'',
                dialogValue:-1,
                showEmptyValue:false,
                farmerProfile:'',
                method:[],
                cropData:[],
              months:[
                  {
                      value:'BAISHAKH'
                  },
                  {
                    value:'JETH'
                },
                {
                  value:'ASAR'
              },
              {
                value:'SAWAN'
            },
            {
              value:'BHADAU'
          },
          {
            value:'ASOJ'
        },
        {
          value:'KARTIK'
      },
      {
        value:'MANGSIR'
    },
    {
      value:'POUSH'
  },
  {
    value:'MAGH'
},
{
  value:'FALGUN'
},
{
  value:'CHAITRA'
},            ]


        }
        
    }



    componentDidMount(){

      cropsDatas = this.props.userReducer.cropsData;

      cropValues = cropsDatas.map(item=>
        {return{value:item.name}})

      this.setState({
        cropsData:cropValues
      })

        methodTypeDatas = this.props.userReducer.methodData;

        console.log(methodTypeDatas)


       methodtypes = methodTypeDatas.map(item=>{return{value:item.name}})
         console.log(methodtypes)
          this.setState({
              method:methodtypes
          })



        areatTypeDatas = this.props.userReducer.areaTypeData;

        areaTypes = areatTypeDatas.map(item=>{return{value:item.name}})


        this.setState({
            areaType:areaTypes
        })


    }


    onChangeMethod=(value,index)=>{
        methodValue = this.props.userReducer.methodData[index].id


      this.setState({
        methodType:methodValue
      })
      
    
    }

    onChangeStartDate=(value,index)=>{
      this.setState({
        startDate:value
      })
    }


    onChangeEndDate=(value,index)=>{
      this.setState({
        endDate:value
      })
    }

    onchangeAreaType=(value,index)=>{

      areaValue =  this.props.userReducer.areaTypeData[index].id

      this.setState({
        areaTypeValues:areaValue
      })
    }

    onChangeCrops=(value,index)=>{
      cropsSelected = this.props.userReducer.cropsData[index].id
        this.setState({
          crops:cropsSelected
        })
    }


    oncancel = ()=>{
      this.props.navigation.goBack()
    }



    onAddMoreCrop=()=>{
        this.setState({
            showDialog:true,
            title:'Add more Crops?',
            desc:'Are You sure you want to add more Crop?',
            dialogValue:0,
        })
        
    }

    onCancelCrop=()=>{
      this.setState({
        showDialog:true,
        title:'Cancel Adding?',
        desc:'Are You sure you want to cancel this data entry?',
        dialogValue:1,
    })
    
    }

    onFinishCrop=()=>{
      this.setState({
        showDialog:true,
        title:'Added Completed ?',
        desc:'Are You sure you have added all the Details?',
        dialogValue:2,
    })
    }

    diaogOk=()=>{
      this.submitCorps()
      this.setState({
        showDialog:false
      })

      if(this.state.dialogValue==1){
        this.props.navigation.goBack()
      }

  
    }

    dialogCancel=()=>{
      this.submitCorps()
      this.setState({
        showDialog:false
      })
    }

    
    submitCorps=()=>{


        if(this.state.crops=='' || this.state.methodType=='' 
            || this.state.variety=='' || this.state.startDate==''||
          this.state.endDate=='' || this.state.area==''|| this.state.areaType==''
          || this.state.totalProduction==''|| this.state.totalSales==''||
           this.state.costPerKg==''|| this.state.generalCost==''||
           this.state.laborCost==''|| this.state.otherCost==''

        ){
           this.setState({
             showEmptyValue:true,
             
           })
        }

        else{
          item={

            "name": this.state.crops,
            "method":this.state.methodType,
            "variety":this.state.variety,
            "growing_period_from": this.state.startDate,
            "growing_period_to": this.state.endDate,
            "area":this.state.area,
            "area_type":this.state.areaTypeValues,
            "production_in_kg": this.state.totalProduction,
            "sales_in_kg": this.state.totalSales,

            "cost":this.state.costPerKg,
            "general_cost":this.state.generalCost,
            "labor_cost":this.state.laborCost,
            "other_cost":this.state.otherCost

      
      
            
            }
            const myObjStr = JSON.stringify(item); 
              const corp = JSON.parse(myObjStr)

              console.log(corp)
              corpValue = this.state.cropData.concat(corp);

              this.setState({
                cropsnum:this.state.cropsnum+1,
                cropData: corpValue
              },
              ()=>this.changeTotalData()
              )


        }
    }


    changeTotalData=()=>{
      const { navigation } = this.props;  
      const profile = navigation.getParam('farmer','');
      const myObjStr = JSON.parse(profile);


      console.log(this.state.cropData)
      item={

        "farmer":myObjStr,
        "crops":this.state.cropData

      
        }


        const myData = JSON.stringify(item); 
        const myStr = JSON.parse(myData)
if(this.state.dialogValue==2){
  this.props.dispatch(SaveToMainData(myStr))

  this.props.navigation.goBack()


}
        // 
      
    }

    onErrorDialog=()=>{
      this.setState({
          showEmptyValue:!this.state.showEmptyValue
      })
    }
    

    render(){
      const { navigation } = this.props;  
      const profile = navigation.getParam('farmer','');
      const myObjStr = JSON.parse(profile);
      
      const farmername = myObjStr.full_name
      console.log(this.state.crops)
          
      
        console.log(this.props.userReducer.data)
      
       
        return(

 <View style={{flex:1, flexDirection:'column'}}>



          <ParallaxScrollView
          backgroundColor="transparent"
          parallaxHeaderHeight={250}
          renderForeground={() => (
           <View style={{ flex: 1,  alignItems: 'center', justifyContent: 'center' }}>
               <View style={{ height:50, width:'100%',  flexDirection:'row',  backgroundColor:brandColor,}}>
                        <Text style={styles.totalText}> Total Data Collected : </Text>
                            
                            <Text style={styles.totalText}> {'     '} {this.props.userReducer.data.length}</Text>
                            </View>
    
                                    
                            <View style={{height:50, width:'100%', flexDirection:'row',  backgroundColor:brandColor,}}>
                        <Text style={styles.totalText}> {this.props.userReducer.selectedMuni}  : {'  '}  {this.props.userReducer.selectedGroup} </Text>
                            
                           
                            </View>

              <View style={{height:50, width:'100%', flexDirection:'row',  backgroundColor:brandColor}}>

             <Text style={styles.totalText}>
               Farmer name:  {farmername}
               </Text>


               {/* <TouchableOpacity onPress = {this.oncancel}>
                  <Text style={{ color:'#fff',
    fontSize:20,
    fontWeight:'600',
    marginTop:20,
    alignSelf:'flex-end'}}> Cancel </Text>
</TouchableOpacity> */}
            </View>
            <View style={{height:50, width:'100%', flexDirection:'row',  backgroundColor:brandColor}}>

             <Text style={styles.totalText}>
               Crops Added:  {this.state.cropsnum}
               </Text>
            </View>
            </View>
          )}>


<KeyboardAwareScrollView style={styles.main}>
                    
                <View style={styles.containerStyle}>
                
     


<Dropdown
  
  containerStyle = {{width:'100%', marginLeft:5, marginRight:5}}
        label='Choose Crops'
        baseColor = {brandColor}
        textColor = {brandColor}
        pickerStyle = {{backgroundColor:'#fff'}}
        labelSize={18}
        data={this.state.cropsData}

        onChangeText = {(value,index)=>this.onChangeCrops(value,index)}
      />


<Dropdown
  
  containerStyle = {{width:'100%', marginLeft:5, marginRight:5}}
        label='Choose Method'
        baseColor = {brandColor}
        textColor = {brandColor}
        pickerStyle = {{backgroundColor:'#fff'}}
        labelSize={18}
        data={this.state.method}

        onChangeText = {(value,index)=>this.onChangeMethod(value,index)}
      />

<CustomeTextInput
   placeholder = 'Vairety'
   keyboardType = {'default'}
   icon = 'leaf'
   onChangeText={(variety)=>this.setState({
     variety:variety
   })}

   value = {this.state.variety}
   
   />
   

<Text style={{fontSize:18, alignSelf:'center', marginTop:20, color:brandColor}}> Growing Period </Text>

<View style={{width:'100%', flexDirection:'row', justifyContent:'space-between'}}>
<Dropdown
  
  containerStyle = {{width:'40%', marginLeft:5, marginRight:5}}
        label='Start Month'
        baseColor = {brandColor}
        textColor = {brandColor}
        pickerStyle = {{backgroundColor:'#fff'}}
        labelSize={18}
        data={this.state.months}

        onChangeText = {(value,index)=>this.onChangeStartDate(value,index)}
      />

<Dropdown
  
  containerStyle = {{width:'40%', marginLeft:5, marginRight:5}}
        label='End Month'
        baseColor = {brandColor}
        textColor = {brandColor}
        pickerStyle = {{backgroundColor:'#fff'}}
        labelSize={18}
        data={this.state.months}

        onChangeText = {(value,index)=>this.onChangeEndDate(value,index)}
      />

  </View>


  <Text style={{fontSize:18, alignSelf:'center', marginTop:20, color:brandColor}}> Area Under the Crop </Text>
  <View style={{width:'100%', flexDirection:'row', justifyContent:'space-between'}}>
  <View style={{width:'50%',  marginTop:13}}>
   <CustomeTextInput
    placeholder = 'Area'
    keyboardType = {'numeric'}
    icon = 'map'
    onChangeText={(area)=>this.setState({
      area:area
    })}
 
    value = {this.state.area}
    
   />
   </View>
<Dropdown
  
  containerStyle = {{width:'50%', marginLeft:5, marginRight:5}}
        label='Area Type'
        baseColor = {brandColor}
        textColor = {brandColor}
        pickerStyle = {{backgroundColor:'#fff'}}
        labelSize={18}
        data={this.state.areaType}

        onChangeText = {(value,index)=>this.onchangeAreaType(value,index)}
        value={this.state.areaTypeValues}
      />
</View>



<CustomeTextInput
    placeholder = 'Total production (KG)'
    keyboardType = {'numeric'}
    icon = 'bank'
    onChangeText={(totalProduction)=>this.setState({
      totalProduction:totalProduction
    })}
 
    value = {this.state.totalProduction}
    
   />

<CustomeTextInput
    placeholder = 'Total Product Sales (KG)'
    keyboardType = {'numeric'}
    icon = 'bank'
    onChangeText={(sales)=>this.setState({
      totalSales:sales
    })}
 
    value = {this.state.totalSales}
    
   />

<CustomeTextInput
    placeholder = 'Cost Per Kg (RS)'
    keyboardType = {'numeric'}
    icon = 'tags'
    onChangeText={(costPerKg)=>this.setState({
      costPerKg:costPerKg
    })}
 
    value = {this.state.costPerKg}
    
   />

<CustomeTextInput
    placeholder = 'General Cost (RS): seed, fertilizer, pesticides'
    keyboardType = {'numeric'}
    icon = 'tags'
    onChangeText={(generalCost)=>this.setState({
      generalCost:generalCost
    })}
 
    value = {this.state.generalCost}
    
   />



<CustomeTextInput
    placeholder = 'Labor Cost (Rs)'
    keyboardType = {'numeric'}
    icon = 'tags'
    onChangeText={(laborCost)=>this.setState({
      laborCost:laborCost
    })}
 
    value = {this.state.laborCost}
    
   />

<CustomeTextInput
    placeholder = 'Other Cost (RS): Transportation, Renting '
    keyboardType = {'numeric'}
    icon = 'tags'
    onChangeText={(otherCost)=>this.setState({
      otherCost:otherCost
    })}
 
    value = {this.state.otherCost}
    
   />



<View style={{marginTop:50}}>
<ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="Add Crops" onPress={this.onAddMoreCrop}>
            <Icon name="info" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Cancel" onPress={this.onCancelCrop}>
            <Icon name="times-circle" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="Save" onPress={this.onFinishCrop}>
            <Icon name="angle-right" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
</View>


<Dialog.Container visible = {this.state.showDialog}>
           <Dialog.Title> {this.state.title} </Dialog.Title>
           <Dialog.Description>
          {this.state.desc} 
          
           </Dialog.Description>
           <Dialog.Button label="Ok"
           onPress = {this.diaogOk}
           />
    
<Dialog.Button label="Cancel"
           onPress = {this.dialogCancel}
           />
          
          
             
         </Dialog.Container>



         <Dialog.Container visible = {this.state.showEmptyValue}>
           <Dialog.Title> OPPS Filed are missing!!</Dialog.Title>
           <Dialog.Description>
         seems like fields are missing
          
           </Dialog.Description>
           <Dialog.Button label="Ok"
           onPress = {this.onErrorDialog}
           />

          
          
             
         </Dialog.Container>


</View>



<View style={{marginTop:50}}/>


                    
                   </KeyboardAwareScrollView>


 

            </ParallaxScrollView>









</View>




                
            )
    }
}


const mapStateToProps = (state) => ({
    userReducer: state.userReducer,
  
  });
  
  
  export default  connect (mapStateToProps)  (AddCorps);