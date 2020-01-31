import React, {Component} from 'react';
import {InitalNavigation, ScreenNavigation, SurveyNavigation} from './AppNavigation'
import {connect} from 'react-redux'


class MainNavigation extends Component {

 

  render() {
    console.log(this.props.isSelected)
    console.log(this.props.isLoggedIn)
    if(this.props.isSelected){
      return<SurveyNavigation/>;

    }else if(this.props.isLoggedIn){
        return <ScreenNavigation/>;
    }

    else{
      return(<InitalNavigation/>)
    }
      
  } 
} 


const mapStateToProps = (state) => ({

    isLoggedIn: state.userReducer.loggedIn,
    isSelected: state.userReducer.isSelected

})

export default connect(mapStateToProps)(MainNavigation);