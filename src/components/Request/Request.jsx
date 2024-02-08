import React from 'react'
import RequestPanel from './RequestPanel';
import RequestBody from './RequestBody';


const Request = ({setLoading}) => {
    return (
        <>
            <h1 className='text-left py-4 font-semibold text-2xl'>Request Tab</h1>
            <RequestPanel setLoading={setLoading} />
            <RequestBody />
        </>
        
        )
    }
    
export default Request
