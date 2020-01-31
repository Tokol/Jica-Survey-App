import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  
  Modal,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import {Footer,FooterTab,Button,Container} from 'native-base'
import AwesomeButton from "react-native-really-awesome-button/src/themes/rick";
import { SafeAreaView } from 'react-navigation';
class VisitModal extends Component{


    createVisit=()=>{
        alert(1)
    }

    render(){

        return(<Modal
            transparent={false}
            visible={this.props.modal}
            onRequestClose = {()=> console.log("model working")}
        >
<SafeAreaView style={styles.main}>

    <View style={styles.container}>
<Text> create visit </Text>

           <Footer>


           <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>

          </Footer>
   </View>

            
  </SafeAreaView>
            </Modal>)
    }
}


const styles ={
main:{
    flex: 1,
          flexDirection: 'column',
          
          backgroundColor: 'rgba(0,0,0,0.8)',
          
},

pdf: {
    flex:1,
    width:Dimensions.get('window').width,
},

container:{
    width: Dimensions.get('window').width,
    flexDirection:'column',
    backgroundColor:'#fff',
    justifyContent: 'center',
          alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    //marginTop:100,
    height:  Dimensions.get('window').height,


},

titleView:{

    flexDirection:'row',
    justifyContent:'center',
   // alignItems:'center'
   marginTop:10
    
},
body:{
flexDirection:'row',
 marginTop:40,   
alignItems:'center',
justifyContent:'space-around'
},




roundView:{

        width: 40,
        height: 40,
        elevation:15,
       backgroundColor: '#fff',
       position:'absolute',
       right:-3,
       top:-18, 
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 5,
        shadowRadius: 5,


     
},

imgStyle:{
    width:22,
    height:22,
    marginTop:8,
    alignSelf:'center',
    resizeMode:'cover',
    // position:'absolute',
    //    right:-23,
    //    top:-30, 
   
},


underLine:{
    width:'100%',
    height:3,
    backgroundColor:'#C9C9C9'
},


healthstatusIcon:{
width:90,
height:90
}



}

export default VisitModal;

