import React, {Component} from 'react';
import {Text, 
 ActivityIndicator,
    TouchableOpacity, FlatList,
  View} from 'react-native';

  
import styles from '../../constratints/styles'
import {Header, Right} from 'native-base'

import VisitComponent from '../../components/VisitCompoment'
import { connect } from 'react-redux';
import {selectSurvey} from '../../../store/actions/useraction'
import OfflineNotice from '../OfflineNotice'
import Dialog from "react-native-dialog";

import {GET_GROUP_URLS,GET_DETAIL_LIST_URL} from '../../../src/networks/Urls'
import {callPostApiWithHeader,getApiWithoutHeader} from '../../../src/networks/Request'

import {saveCropData, saveAreaType, saveMethodType,
    saveEthinicData, EmptyMainData } from '../../../store/actions/useraction'

 
    import {CREATE_FARMER_DATA} from '../../networks/Urls'

const brandColor = '#744BAC';

class Visits extends Component{

    static navigationOptions = ({navigation}) => ({
        headerMode: 'none',
        header: null
    })


    constructor(props){
        super(props)
        this.state={
            showModal:false,
            loading:false,
            totalData:11,
            data:[]

        }

    }


    componentDidMount(){
       this.requestforGroups()
        this.requestforList()

    }


    


    requestforGroups=()=>{

            this.setState({
                loading:true
            })
        getApiWithoutHeader(this.props.userReducer.usertoken,GET_GROUP_URLS
         
        ).then((response)=>{
            console.log(response)
                this.setState({
                    loading:false,
                    data:response,
                })
        })

    }

    requestforList=()=>{
        this.setState({
            loading:true
        })
        getApiWithoutHeader(this.props.userReducer.usertoken,GET_DETAIL_LIST_URL
         
            ).then((response)=>{
                console.log(response)
                    this.setState({
                        loading:false,
                        
                    })

                        this.props.dispatch(saveCropData(response.crop_names))
                        this.props.dispatch(saveAreaType(response.crop_areas))
                        this.props.dispatch(saveEthinicData(response.ethnicity))
                        this.props.dispatch(saveMethodType(response.crop_methods))

                        

                        console.log(this.props.userReducer.cropsData)
                        console.log(this.props.userReducer.methodData)
                        console.log(this.props.userReducer.areaTypeData)
                        console.log(this.props.userReducer.ethinicData)
                        

            })
    }


    handleModal=()=>{
      this.setState({
            VisitModal:true
      })
    }

    diaogOk=()=>{
        this.setState({
            VisitModal:false
      })

      this.saveToServer()

    }

    dialogCancel=()=>{
this.setState({
    VisitModal:false
      })
    }


    saveToServer=()=>{
        this.setState({
         //   loading:true
        })

        console.log(this.props.userReducer.data)
        
        const sendaTa = JSON.stringify(this.props.userReducer.data)

                const parseJson = JSON.parse(sendaTa)

        console.log(sendaTa)
        console.log(parseJson)

        callPostApiWithHeader(this.props.userReducer.usertoken,CREATE_FARMER_DATA, 
            parseJson).then((response)=>{
                console.log(response)
                    this.setState({
                        loading:false,

                        
                    })

                    if(response.success==true){
                        this.props.dispatch(EmptyMainData())

                    }


                        

           })


    }


    renderItem=({item})=>(
        <VisitComponent
        muni = {item.municipality.name}
        group = {item.group.name}
        onPress = {()=>this.onSelected(item.municipality.name,item.group.name,item.municipality.id, item.group.id)}
        />
    )


    onSelected(muni,group, munId, groupId,){
            this.props.dispatch(selectSurvey(muni,group, munId, groupId))
            
    }





    render(){

                //{console.log()}
        return(
        
                <View style={styles.main}>
                    <Header style={styles.headerStyle}>
                            <Right>
                                {this.props.userReducer.data.length==0?
                            null:    
                            <TouchableOpacity onPress={this.handleModal}>
                            <Text style={styles.headerLeft}> Upload Data Now </Text>
                                </TouchableOpacity>
                            }
                               
                               
                                </Right>
                        </Header>
                        <View style={{width:'100%', flexDirection:'row',  backgroundColor:brandColor, height:'8%'}}>
                        <Text style={styles.totalText}> Total Data Collected : </Text>
                            
                            <Text style={styles.totalText}> {'     '}{this.props.userReducer.data.length} </Text>
                            </View>
       
                                <OfflineNotice/>

                            <View style={{marginTop:10, }}>
              <FlatList
     
               data={this.state.data}
               keyExtractor={item => item.id}
               numColumns = {2}                 
               //horizontal={true}
               renderItem={this.renderItem}

              />

<ActivityIndicator
animating = {this.state.loading}
/>

</View>
          
        
<Dialog.Container visible = {this.state.VisitModal}>
           <Dialog.Title> Upload Data? </Dialog.Title>
           <Dialog.Description>
          Are you Sure want to upload the data to server?
          
           </Dialog.Description>
           <Dialog.Button label="Ok"
           onPress = {this.diaogOk}
           />
    
<Dialog.Button label="Cancel"
           onPress = {this.dialogCancel}
           />
          
          
             
         </Dialog.Container>
            
          

            </View>
            )
    }
}
const mapStateToProps = (state) => ({
    userReducer: state.userReducer,
  });
  
  
  export default connect(mapStateToProps) (Visits);
  
