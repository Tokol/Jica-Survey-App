// import React, { Component } from "react";

// import { View, Dimensions, Text, ActivityIndicator } from "react-native";
// import QRCodeScanner from "react-native-qrcode-scanner";
// import Icon from "react-native-vector-icons/Ionicons";
// import * as Animatable from "react-native-animatable";
// import {LOGIN_URL} from '../networks/Urls'
// import {callPostApiNoHeadr} from '../networks/request'
// import Dialog from "react-native-dialog";
// import { connect } from 'react-redux';
// import {LoginAction} from '../../src/../store/actions/useraction'
// const SCREEN_HEIGHT = Dimensions.get("window").height;
// const SCREEN_WIDTH = Dimensions.get("window").width;

// console.disableYellowBox = true;

// class QrCodeCamera extends Component {
 


//   makeSlideOutTranslation(translationType, fromValue) {
//     return {
//       from: {
//         [translationType]: SCREEN_WIDTH * -0.18
//       },
//       to: {
//         [translationType]: fromValue
//       }
//     };
//   }
//   constructor(props){
//     super(props) 
    
//     this.state = {
//        username:'',
//        password:'',
//       loading:false,
        
  
//     };
// }


// handleDialog = () => {
 
//   this.setState({ showDialog: !this.state.showDialog });
// };

//   onSuccess(e) {
//    // alert(e);
//    this.setState({
//     loading:true
//   })

//     try {

     
//       const values = JSON.parse(e.data);

//       console.log(values.username)
//       console.log(values.pass)

//       let formData = new FormData();
//       formData.append('username',values.username)
//       formData.append('password',values.pass)
     

//       callPostApiNoHeadr(LOGIN_URL, formData

//         ).then((response)=>{
//           this.setState({
//             loading:false
//           })

//             console.log(response)
//             if(response.token){

              

//               this.props.dispatch(LoginAction(response.token))
            
              
//             }

         

//  })
      

//     } catch (ex) {
//       console.error(ex);
//     }

    

      

//     }

   


//   render() {
//     return (
//         <View style={{ justifyContent:'center', alignItems:'center'}}>
      
//       <View style={{height:Dimensions.get('window').height/2, width:Dimensions.get('window').width,flexDirection:'row'}}>
     
//       <View style={{backgroundcolor:'#fff', marginLeft:Dimensions.get('window').width/5}}/>
//       <QRCodeScanner
//         showMarker
//         onRead={this.onSuccess.bind(this)}
//         cameraStyle={{ height: SCREEN_HEIGHT/2.6, width:Dimensions.get('window').width/1.46}}
        
//       />
//       <ActivityIndicator size="large"  animating = {this.state.loading} color="#0000ff" />
//        <Dialog.Container visible = {this.state.showDialog}>
//           <Dialog.Title> Something Went Wrong!! </Dialog.Title>
//           <Dialog.Description>
//           {this.state.error}
//           </Dialog.Description>
//           <Dialog.Button label="Ok"
//           onPress = {this.handleDialog}
//           />
            
//         </Dialog.Container>

        
     
// </View>
//       </View>
//     );
//   }
// }

// const overlayColor = "rgba(0,0,0,0.5)"; // this gives us a black color with a 50% transparency

// const rectDimensions = SCREEN_WIDTH * 0.65; // this is equivalent to 255 from a 393 device width
// const rectBorderWidth = SCREEN_WIDTH * 0.005; // this is equivalent to 2 from a 393 device width
// const rectBorderColor = "red";

// const scanBarWidth = SCREEN_WIDTH * 0.46; // this is equivalent to 180 from a 393 device width
// const scanBarHeight = SCREEN_WIDTH * 0.0025; //this is equivalent to 1 from a 393 device width
// const scanBarColor = "#22ff00";

// const iconScanColor = "blue";

// const styles = {
//   rectangleContainer: {
//    // flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "transparent"
//   },

//   rectangle: {
//     height: rectDimensions,
//     width: rectDimensions,
//     borderWidth: rectBorderWidth,
//     borderColor: rectBorderColor,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "transparent"
//   },

//   topOverlay: {
//     flex: 1,
//    // height: SCREEN_WIDTH,
//     //width: SCREEN_WIDTH,
//     backgroundColor: overlayColor,
//     justifyContent: "center",
//     alignItems: "center"
//   },

//   bottomOverlay: {
//     flex: 1,
//     height: SCREEN_WIDTH,
//     width: SCREEN_WIDTH,
//     backgroundColor: overlayColor,
//     paddingBottom: SCREEN_WIDTH * 0.25
//   },

//   leftAndRightOverlay: {
//     height: SCREEN_WIDTH * 0.65,
//     width: SCREEN_WIDTH,
//     backgroundColor: overlayColor
//   },

//   scanBar: {
//     width: scanBarWidth,
//     height: scanBarHeight,
//     backgroundColor: scanBarColor
//   }
// };

// const mapStateToProps = (state) => ({
//   userReducer: state.userReducer

// });


// export default connect(mapStateToProps) (QrCodeCamera);

