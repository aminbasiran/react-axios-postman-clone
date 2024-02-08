import React from 'react'
import Button from './Button/Button'

const DeleteKeyValueButton = ({id,action,dispatch}) => {

    const handleDeleteKeyValue = () => {
        dispatch({type:action, payload:{id: id}})
    }

    return (
        <Button onClick={handleDeleteKeyValue} label="-" style={"aspect-square w-10 font-semibold text-white rounded-md bg-blue-600"}/>
    )
}

export default DeleteKeyValueButton
