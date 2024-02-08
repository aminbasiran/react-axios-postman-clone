import React, {useEffect} from 'react'
import DeleteKeyValueButton from './DeleteKeyValueButton';
import { useGlobalStore } from './Context/ContextProvider';
import {useForm} from "react-hook-form"



const Headers = ({id}) => {

    const {dispatch,actionTypes} = useGlobalStore()

    const {register,watch} = useForm()

    const watchedHeaderKey = watch("headerKey")
    const watchedHeaderValue = watch("headerValue")

    useEffect(()=>{
        dispatch({
            type: actionTypes.UPDATE_REQUEST_HEADERS,
            payload: { ["key"]: watchedHeaderKey, id: id},
        });

    },[watchedHeaderKey])


    useEffect(()=>{
        dispatch({
            type: actionTypes.UPDATE_REQUEST_HEADERS,
            payload: { ["value"]: watchedHeaderValue, id: id},
        });

    },[watchedHeaderValue])

    return (
        <div className="flex space-x-2 mb-1">
            <input {...register("headerKey")} className="px-3 py-2 border-2 rounded-md" type="text" placeholder='Key'/>
            <input  {...register("headerValue")}  className="px-3 py-2 border-2 rounded-md" type="text" placeholder='Value'/>
            <DeleteKeyValueButton action={actionTypes.DELETE_REQUEST_HEADERS} dispatch={dispatch} id={id} />
        </div>
    )
}

export default Headers
