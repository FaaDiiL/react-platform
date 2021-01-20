import React from 'react'

function AddListItem(props) {
    
       
    return (
        <>
            <input onChange={props.handleOnChange}  />  
            <button onClick={props.handleSubmit}>Add Todo</button>
        </>
    )
}

export default AddListItem
