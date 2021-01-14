import React from 'react'

function AddListItem() {
     function submitForm(e) {
          return(
             e.preventDefault()  
          )
     }
    return (
        <form onSubmit={submitForm}>
               <label>
               Write a todo: 
               <input type="text" />
               </label>
               <button>Add</button>
          </form>
    )
}

export default AddListItem
