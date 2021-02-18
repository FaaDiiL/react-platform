import React from 'react'

import AddTodo from './AddTodo/AddTodo'
import ViewTodos from './ViewTodos/ViewTodos'

function TodoApp() {
     return (
          <>
              <h2>TodoApp - React</h2>
              <AddTodo />
              <ViewTodos />
          </>
     )
}

export default TodoApp
