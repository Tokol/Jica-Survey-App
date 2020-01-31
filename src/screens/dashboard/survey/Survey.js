import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, 
    Image, TouchableOpacity,
    SafeAreaView, Button,View} from 'react-native';
import styles from '../../../constratints/styles'
import {Header, Right,Left} from 'native-base'
import AwesomeButton from "react-native-really-awesome-button/src/themes/rick";
import { connect } from 'react-redux';

import {deselectSurvey}from '../../../../store/actions/useraction'

import DataComponent from '../survey/component/DataComponent'

class Survey extends Component{

    constructor(props){
        super(props)
        this.state={
            showModal:false,
            totalData:11,
            
        }

    }



    static navigationOptions = ({navigation}) => ({
        headerMode: 'none',
        header: null
    })



        


    goBack=()=>{
        this.props.dispatch(deselectSurvey())
    }

    render(){
        return(
            <View style={styles.main}>
                <Header style={styles.headerStyle}>

                    <Left>
                            <TouchableOpacity onPress ={this.goBack}>
                                <Text style={styles.headerLeft}> Go back </Text>
                                </TouchableOpacity>
                        </Left>
                        <Right>
                            {this.state.totalData==0?
                        null:    
                        <TouchableOpacity onPress={this.handleModal}>
                        <Text style={styles.headerLeft}> Upload Data Now </Text>
                            </TouchableOpacity>
                        }
                           

                            </Right>
                    </Header>



                    <View style={styles.container}>


<DataComponent/>



</View>

                        
</View>

        
      

            )
    }
}



 const mapStateToProps = (state) => ({
    userReducer: state.userReducer,

  
  });
  
  
  export default connect(mapStateToProps) (Survey);