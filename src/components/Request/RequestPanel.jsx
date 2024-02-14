import React , {useEffect} from 'react'
import { useForm } from 'react-hook-form';
import { useGlobalStore } from '../Context/ContextProvider';
import axios, {isCancel, AxiosError} from 'axios';

const RequestPanel = ({setLoading}) => {

    const {state, dispatch, actionTypes} = useGlobalStore()

    const {
        register,
        handleSubmit,
        watch,
    } = useForm();

    const watchedURL = watch("url");
    const watchedMethod = watch("method");

    useEffect(() => {
        dispatch({type:actionTypes.UPDATE_REQUEST_URL, payload:{url: watchedURL}})
    }, [watchedURL,state.requestFormData.params]);

    useEffect(() => {
        dispatch({type:actionTypes.UPDATE_REQUEST_METHOD, payload:{method: watchedMethod}})
    }, [watchedMethod,state.requestFormData.params]);


    const makeRequest = async() => {
        try {
            setLoading(true)
            const response = await axios.get(state.requestFormData.url)
            if (response){
                
                if(response.hasOwnProperty('status')){
                    dispatch({type:actionTypes.UPDATE_RESPONSE_BODY,payload:{body:JSON.stringify(response.data, null, 2)}})
                    dispatch({type:actionTypes.UPDATE_RESPONSE_STATUS,payload:{status:response.status}})
                }

                else{              
                    
                } 
            }

            else{


            }

        } catch (error) {
            dispatch({type:actionTypes.UPDATE_RESPONSE_STATUS,payload:{status:error.response.status}})
        }

        finally{
            setLoading(false)
        }
    }

    // USING AXIOS HERE TO MAKE RESQUEST
    const onSubmit = () => {
        makeRequest()
    }

    return (
        <>
            <div className="mb-4" >
                <form className="space-x-2 flex w-full"  onSubmit={handleSubmit(onSubmit)}>
                    <select type="select" className='border-2 rounded-md px-4 py-2' {...register("method")} defaultValue={state.requestFormData.method} >
                        <option value="GET">GET</option>
                        <option value="POST">POST</option>
                        <option value="PUT">PUT</option>
                        <option value="DELETE">DELETE</option>
                    </select>
                    <input className='flex-1 border-2 rounded-md p-2' {...register("url")} type="text" placeholder='Enter URL or paste here'/>
                    <button className='bg-blue-600 border-2 rounded-md px-4 py-2 text-white font-semibold' type='submit'>Send</button>
                </form>
            </div>
        </>
    )
}

export default RequestPanel
