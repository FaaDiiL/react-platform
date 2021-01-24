import React from 'react'

function AddListItem(props) {
    
    
       
    return (
        <form onSubmit={props.handleSubmit}>
            <input onChange={props.handleOnChange}  />  
            <button >Add Todo</button>
        </form>
    )
}

export default AddListItem
