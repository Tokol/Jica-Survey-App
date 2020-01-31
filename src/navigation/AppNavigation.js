import React from 'react'
import { createStackNavigator,createAppContainer, DrawerNavigator, TabNavigator } from 'react-navigation';

import Login from '../screens/auth/Login';
import LoginScreen from '../screens/auth/LoginScreen'
import Vists from '../screens/dashboard/Vists'
import Survey from '../screens/dashboard/survey/Survey'
import AddFarmer from '../screens/dashboard/survey/component/AddFarmer'
import AddCorps from '../screens/dashboard/survey/component/AddCorps'
   const InitialScreen  = createStackNavigator({
    home: Login,
    login:LoginScreen
  })


  const AppNavigation = createStackNavigator({
  dashboard: Vists,  
});

const SelectNavigation = createStackNavigator({
  farmer: AddFarmer,
  crops:AddCorps
  
});



export const InitalNavigation = createAppContainer(InitialScreen);
export const ScreenNavigation = createAppContainer(AppNavigation);
export const SurveyNavigation = createAppContainer(SelectNavigation);



