import {LOGIN_USER,  LOGOUT_USER, SELECT_SURVEY, DESELECT_SURVEY, ADD_MAIN_DATA, 

    ADD_CORPS_LIST,
    ADD_ETHINICITY_LIST,
    ADD_AREA_TYPE_LIST,
  ADD_METHOD_TYPE_LIST,
EMPTY_MAIN_DATA,
    
    } from '../actions/actionTypes';
    
const initialState = {
    loggedIn : false,
    isSelected:false,
    selectedMuni:'',
    selectedGroup:'',
    
    selectedMunId:'',
    selectedGroupId:'',

    cropsData:[],
    methodData:[],
    areaTypeData:[],
    ethinicData:[],



    userId:'',
    name: '',
    data:[],
    usertoken:'',
    mailaddress: '',
    level : '',
    accuracy :'',
    visitscount:0,

    visits:[],
}
        
export default userReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_USER:
            return {
                ...state,
                loggedIn: true,
                usertoken:action.token
            }


                case ADD_CORPS_LIST:
                    return{
                        ...state,
                        cropsData:action.crop
                    }

                    case ADD_METHOD_TYPE_LIST:
                        return{
                            ...state,
                            methodData:action.methodType
                        }

                        case ADD_AREA_TYPE_LIST:
                            return{
                                ...state,
                                areaTypeData:action.areaType
                            }


                            case ADD_ETHINICITY_LIST:
                                return{
                                    ...state,
                                    ethinicData:action.ethinic
                                }

            case ADD_MAIN_DATA:
                return{
                    ...state,
                    data:[...state.data,action.value]
                }

                case EMPTY_MAIN_DATA:
                    return{
                        ...state,
                            data:[]
                    }




                    case SELECT_SURVEY:
                        return{
                            ...state,
                            isSelected:true,
                            selectedMuni:action.selectMuni,
                            selectedGroup:action.selecteGroup,
                            selectedMunId:action.selectMunId,
                            selectedGroupId:action.selectGroupId
                        }


                      

                        case DESELECT_SURVEY:
                        return{
                            ...state,
                            isSelected:false,
                            selectMuni:'',
                            selectedGroup:''

                        }


            case LOGOUT_USER:
            return{
                ...state,
                loggedIn : false,
    userId:'',
    name: '',
    mailaddress: '',
    level : '',
    accuracy :'',
    compnayId: '',
    waypoints:[],
    gpxFile:'',
    currentLat:0,
    currentLon:0,
    appStatus:'ACT_JOB_ENDED',
    selectedDate:'',
    selectedMap:'',
    sliderData:[],
    mapId:'',
    mapStatus:'',
    mapDate:'',
    mapLocation:'',
    mapComment:'',
            }


           
            

           
        default:
            return state;
        }


        

}