import { LOGIN_USER,LOGOUT_USER, 
    SELECT_SURVEY, DESELECT_SURVEY, ADD_MAIN_DATA, 

    EMPTY_MAIN_DATA,
    ADD_CORPS_LIST,
     ADD_ETHINICITY_LIST,
     ADD_AREA_TYPE_LIST,
   ADD_METHOD_TYPE_LIST,



    } from './actionTypes'

const LoginAction=(token)=> {

    return {
        type: LOGIN_USER,
       token:token

    }

}




const SaveToMainData=(value)=>{
    return{
        type:ADD_MAIN_DATA,
        value:value
    }
}

const EmptyMainData=()=>{
    return{
        type:EMPTY_MAIN_DATA,
    }
}

const saveCropData=(data)=>{
    return{
        type:ADD_CORPS_LIST,
        crop:data
    }
}

const saveEthinicData=(data)=>{
    return{
        type:ADD_ETHINICITY_LIST,
        ethinic:data
    }
}

const saveAreaType = (data)=>{
    return{
        type:ADD_AREA_TYPE_LIST,
        areaType:data
    }
}

const saveMethodType = (data)=>{
    return{
        type:ADD_METHOD_TYPE_LIST,
        methodType:data
    }
}


const selectSurvey=(selectMuni, selecteGroup, selectMunId, selectGroupId)=>{
    return{
        type:SELECT_SURVEY,
        selectMuni:selectMuni,
        selecteGroup:selecteGroup,
        selectMunId:selectMunId,
        selectGroupId:selectGroupId
    }
}
const deselectSurvey=()=>{
    return{
        type:DESELECT_SURVEY
    }
}


const saveMapData = (mapdata)=>{
    return{
        type:SAVE_MAP_DATA,
        mapdata:mapdata
    }
    

}

const addMapData = (data)=>{
    return{
        type:ADD_MAP_DATA,
        data:data
    }
}






const selectedMap = (id)=>{
    return{
        type:SELECTED_MAP,
        selectedMap:id
    }
}

    const selectDate = (date)=>{
            return{
        type:SELECTED_DATE,
        selectDate:date        
    }
    }


const Logout = ()=>{
    return{
        type:LOGOUT_USER
    }
}


const SaveWayPoint = (value)=>{
   
    return{
        
        type:Save_WAY_POINT,
        waypoints:value
       
    }
}


const changeStatus=(value)=>{
    return{
        type:CHANGE_APP_STATUS,
        appStatus:value
    }
}


const saveCurrentLat=(lat)=>{
    return{
    type:CURRENT_LAT,
    currentLat:lat
}
}

const saveCurrentLon=(lon)=>{
    return{
    type:CURRENT_LON,
    currentLon:lon
}
}

const EmpetyWayJson = ()=>{
    return{
        type:EMPETY_WAY_JSON,
        
    }
}

const sliderData = (data)=>{
    return{
        type:SLIDER_IMG,
        data:data
    }
}





export { LoginAction,
        selectSurvey,deselectSurvey,SaveToMainData,
        saveCropData, saveAreaType, saveMethodType,
        saveEthinicData, 


    
    Logout, SaveWayPoint, changeStatus, saveCurrentLat, saveCurrentLon, EmpetyWayJson,
     selectDate, selectedMap, sliderData, saveMapData,
     addMapData,EmptyMainData
     
    }
