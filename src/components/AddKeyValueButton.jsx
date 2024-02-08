import React from 'react'
import Button from './Button/Button'
import { v4 as uuidv4 } from 'uuid';

const AddKeyValueButton = ({action,dispatch}) => {

    const handleAddKeyValueValue = () => {
        dispatch({type:action,payload:{newObject: {id:uuidv4(), key: "", value: "" }}})
    }

    return (
        <Button onClick={handleAddKeyValueValue} label="+" style={"aspect-square w-10 font-semibold text-white rounded-md bg-blue-600"}/>
    )
}

export default AddKeyValueButton
