import React from 'react'

// some comment! Modified by Fadil. New comment. Hej
function NewExpenses({handleChange, handleSubmit}) {
     return (
          <div>
               <form onSubmit={handleSubmit}>
                   <input onChange={handleChange} name ='titleData' type="text" placeholder="Type a expense"  />
                   <input  onChange={handleChange} name ='amountData' type="number" placeholder="Cost" />
                   <button type="submit">Add</button>
               </form>
          </div>
     )
}

export default NewExpenses