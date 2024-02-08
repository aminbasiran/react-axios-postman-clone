import React, {useEffect} from 'react'
import DeleteKeyValueButton from './DeleteKeyValueButton';
import { useGlobalStore } from './Context/ContextProvider';
import {useForm} from "react-hook-form"

const Params = ({id}) => {

    const {dispatch,actionTypes} = useGlobalStore()

    const {register,watch} = useForm()

    const watchedParamsKey = watch("paramsKey")
    const watchedParamsValue = watch("paramsValue")

    useEffect(()=>{
        dispatch({
            type: actionTypes.UPDATE_REQUEST_PARAMS,
            payload: { ["key"]: watchedParamsKey, id: id},
        });
        
    },[watchedParamsKey])

    useEffect(()=>{
        dispatch({
            type: actionTypes.UPDATE_REQUEST_PARAMS,
            payload: { ["value"]: watchedParamsValue, id: id},
        });
    },[watchedParamsValue])

    return (
        <div className="flex space-x-2 mb-1">
            <input {...register("paramsKey")}  className="px-3 py-2 border-2 rounded-md" type="text" placeholder='Key' />
            <input {...register("paramsValue")}  className="px-3 py-2 border-2 rounded-md" type="text" placeholder='Value' />
            <DeleteKeyValueButton action={actionTypes.DELETE_REQUEST_PARAMS} dispatch={dispatch} id={id} />
        </div>
    )
}

export default Params
