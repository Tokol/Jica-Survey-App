import React, {Component} from 'react';

import {StyleSheet} from 'react-native-auto-stylesheet'
import { Dimensions } from 'react-native'

const {heightFull, widthFull} = Dimensions.get('window');
export default styles = StyleSheet.create({
main:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'#ffff',

},
    
container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    padding:20
},

logoStyle:{
    width:300,
    height:300,
    resizeMode:'contain'
},

titleText:{
    color:'#034d96',
    fontSize:20,
    fontWeight:'500',
    
},
headerStyle:{
    backgroundColor:'#034d96'
},
headerLeft:{
    color:'#fff',
    fontSize:20,
    fontWeight:'500'
},

totalText:{
    color:'#fff',
    fontSize:16,
    fontWeight:'600',
    marginTop:10,
    alignSelf:'center'
},

card:{
    backgroundColor:'#034d96',
    height:150,
    justifyContent:'space-around',
    width:165,
    //backgroundColor:'#fff',
    shadowOffset: {
        width: 0,
        height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    margin: 10,
    padding:20,
    elevation: 16,
},
muniStyle:{
    color:'#ffff',
    fontSize:13,
    fontWeight:'800'

},

groupStyle:{
    color:'#ffff',
    fontSize:11,
    fontWeight:'600'
},


actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'black',
  },


autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1
  },
  input: {maxHeight: 40},

  

})


  