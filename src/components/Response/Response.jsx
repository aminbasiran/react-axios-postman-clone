import React from 'react'
import ResponseBody from './ResponseBody';

const Response = ({loading}) => {
    
    return (
        <>
            <h1 className='text-left py-4 text-2xl font-semibold'>Response Tab</h1>
            <ResponseBody loading={loading}/>
        </>
    )
}

export default Response