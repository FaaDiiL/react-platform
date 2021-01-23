import React from 'react'

function AddListItem(props) {
    
       
    return (
        <form onSubmit={props.handleSubmit}>
            <input onChange={props.handleOnChange}  />  
<<<<<<< HEAD
            <button >Add Todo</button>
=======
            <button>Add Todo</button>
>>>>>>> 93081f9d94544fc4629e5aafaf249896dd518049
        </form>
    )
}

export default AddListItem
