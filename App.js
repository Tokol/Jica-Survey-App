
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, SafeAreaView, Button,View} from 'react-native';
//import { SimpleSurvey } from 'react-native-simple-survey';
import { COLORS } from  './src/constratints/validColors'
import MainNavigation from './src/navigation/MainNavigation'

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import createStore from './store/store'

const GREEN = 'rgba(141,196,63,1)';
const PURPLE = 'rgba(108,48,237,1)';

const { persistor, store } = createStore();




export default class App extends Component {

   
    

  render() {
    return (
<Provider store={store}>
      <PersistGate
        
        loading={<View/>}   
        persistor={persistor}>


     <MainNavigation/>

     </PersistGate>

     </Provider>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    //marginTop:100,
   flex: 1,
   justifyContent: 'center',
  alignItems: 'center',
    backgroundColor: '#0000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    margin: 10,
    height: 30,
    width: 140,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
},
container: {
    minWidth: '70%',
    maxWidth: '90%',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'white',
    elevation: 20,
    borderRadius: 10,
},
surveyContainer: {
    width: 'auto',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignContent: 'center',
    padding: 5
},
selectionGroupContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
    alignContent: 'flex-end',
},
navButtonText: {
    margin: 10,
    fontSize: 20,
    color: 'white',
    
    
    width: 'auto'
},
answers: {
    alignSelf: 'center',
    marginBottom: 10,
},
navigationButton: {
    
    minHeight: 40,
    backgroundColor: GREEN,
    padding: 0,
    borderRadius: 100,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
},

background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
questionText: {
    marginBottom: 20,
    fontSize: 20
},
textBox: {
    borderWidth: 1,
    borderColor: 'rgba(204,204,204,1)',
    backgroundColor: 'white',
    borderRadius: 10,
    
    padding: 10,
    //fontFamily: 'palanquin-light',
    textAlignVertical: 'top',
    marginLeft: 10,
    marginRight: 10
},
numericInput: {
    borderWidth: 1,
    borderColor: 'rgba(204,204,204,1)',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
    marginLeft: 10,
    marginRight: 10
},
infoText: {
    marginBottom: 20,
    fontSize: 20,
    marginLeft: 10
},
});
