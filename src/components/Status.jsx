import React , {useEffect} from 'react'


const Status = ({state}) => {

        // const getStatusColor = (statusCode) => {
    
        //     if (statusCode < 400) {
        //         return "text-green-600";
        //     } else if (statusCode < 500) {
        //         return "text-orange-600";
        //     } else {
        //         return "text-red-600";
        //     }
        // }
    

    return (
        <div className='flex ml-auto  place-items-center'>
            {/* <div className='px-2 text-sm'>Status: <span className={`font-semibold ${getStatusColor(state.responseFormData.status)}`} >{state.responseFormData.status}</span> </div> */}
            <div className='px-2 text-sm'>Status: <span className={`font-semibold text-green-600 `} >{state.responseFormData.status}</span> </div>
            <div className='px-2 text-sm'>Time:  <span className='font-semibold text-green-600'>484ms</span></div>
            <div className='px-2 text-sm'>Size:  <span className='font-semibold text-green-600'>1.18KB</span></div>
        </div>
    )
}

export default Status
