import React from 'react'

import Todo from './Todo/Todo'

function ViewTodos() {
     return (
          <>
             <h4>This is your list of todos!</h4>
             <ul>
               <Todo /> { /* Prints a list of Li's */}
             </ul>
          </>
     )
}

export default ViewTodos
