import React,{createContext,useReducer,useContext} from 'react'
import { appendURL } from '../../utils/appendURL';

const Context = createContext()

const actionTypes = {
  UPDATE_REQUEST_METHOD : "UPDATE_REQUEST_METHOD",
  UPDATE_REQUEST_URL : "UPDATE_REQUEST_URL",


  ADD_REQUEST_PARAMS : "ADD_REQUEST_PARAMS",
  UPDATE_REQUEST_PARAMS : "UPDATE_REQUEST_PARAMS",
  DELETE_REQUEST_PARAMS : "DELETE_REQUEST_PARAMS",

  ADD_REQUEST_HEADERS : "ADD_REQUEST_HEADERS",
  UPDATE_REQUEST_HEADERS : "UPDATE_REQUEST_HEADERS",
  DELETE_REQUEST_HEADERS : "DELETE_REQUEST_HEADERS",
  
  UPDATE_RESPONSE_BODY : "UPDATE_RESPONSE_BODY",
  // UPDATE_RESPONSE_TIME : "UPDATE_RESPONSE_TIME",
  UPDATE_RESPONSE_STATUS : "UPDATE_RESPONSE_STATUS",
  UPDATE_RESPONSE_FILESIZE : "UPDATE_RESPONSE_FILESIZE",
}

const initialState = {
  requestFormData: {
    method : "GET",
    url : "",
    params : [],
    headers : [],
    body: {}
  },
  responseFormData:{
    body: "",
    time:  "",
    status: "",
    fileSize:""
  }
  
};

const reducer = (state,action) => {
  switch(action.type){
      case actionTypes.UPDATE_REQUEST_METHOD:
        return {...state, requestFormData: {...state.requestFormData, method:action.payload.method} }

      // 

      case actionTypes.UPDATE_REQUEST_URL:
        const makeRequestURL = appendURL(action.payload.url, state.requestFormData.params)
        return {...state, requestFormData: {...state.requestFormData, url:makeRequestURL}} 
        
      // 

      case actionTypes.ADD_REQUEST_PARAMS:
        return {...state, requestFormData: {...state.requestFormData, params: [...state.requestFormData.params, action.payload.newObject]} } 

        
      case actionTypes.UPDATE_REQUEST_PARAMS:{

        let value 
        let updatedArray
        
        if(action.payload.hasOwnProperty("key")){
          value = action.payload.key
          updatedArray = state.requestFormData.params.map(obj => obj.id === action.payload.id ? { ...obj, key: action.payload.key } : obj);
        }
        
        else{
          value = action.payload.value
          updatedArray = state.requestFormData.params.map(obj => obj.id === action.payload.id ? { ...obj, value: action.payload.value } : obj);
        }
        
        return {...state, requestFormData: {...state.requestFormData, params: updatedArray}}
      }

      case actionTypes.DELETE_REQUEST_PARAMS:{
        const filteredArray = state.requestFormData.params.filter(obj => obj.id !== action.payload.id)
        return {...state, requestFormData: {...state.requestFormData, params: filteredArray}}
      }

      case actionTypes.ADD_REQUEST_HEADERS:
        return {...state, requestFormData: {...state.requestFormData, headers: [...state.requestFormData.headers, action.payload.newObject]} } 

      case actionTypes.UPDATE_REQUEST_HEADERS: {

        let value 
        let updatedArray
        
        if(action.payload.hasOwnProperty("key")){
          value = action.payload.key
          updatedArray = state.requestFormData.headers.map(obj => obj.id === action.payload.id ? { ...obj, key: action.payload.key } : obj);
        }
        
        else{
          value = action.payload.value
          updatedArray = state.requestFormData.headers.map(obj => obj.id === action.payload.id ? { ...obj, value: action.payload.value } : obj);
        }
        
        return {...state, requestFormData: {...state.requestFormData, headers: updatedArray}}
      }

      case actionTypes.DELETE_REQUEST_HEADERS:{
        const filteredArray = state.requestFormData.headers.filter(obj => obj.id !== action.payload.id)
        return {...state, requestFormData: {...state.requestFormData, headers: filteredArray}}
      }

      case actionTypes.UPDATE_RESPONSE_BODY:{
        return {...state, responseFormData: {...state.responseFormData, body: action.payload.body }}
      
      
      }
      case actionTypes.UPDATE_RESPONSE_STATUS:{

        const getStatusMessage = (statusCode) => {
          if (statusCode < 400) {
            return `${statusCode} OK`;
          } else if (statusCode < 500) {
            return `${statusCode} BAD REQUEST`;
          } else {
            return `${statusCode} NOT OK`;
          }
        };
        
        return {...state, responseFormData: {...state.responseFormData, status: getStatusMessage(action.payload.status)}}
      }

      case actionTypes.UPDATE_RESPONSE_FILESIZE:{
        // return {...state, responseFormData: {...state.responseFormData, body: action.payload.body }}
      }

      default:
        return state;
  }
}


export const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer,initialState)

  console.log(state)

  return (
    <Context.Provider value={{state,dispatch,actionTypes}}>
      {children}
    </Context.Provider>
  )
}


export const useGlobalStore = () => {
  const context = useContext(Context)

  if (!context){
    console.log("useContext should be used inside of JSX components only!")
  }

  return context
}

