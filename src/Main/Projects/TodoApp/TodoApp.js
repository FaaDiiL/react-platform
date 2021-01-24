import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


// Generating new id whenever you use 'uuidv4()'

import AddListItem from './AddListItem/AddListItem'
import List from './List/List'

function TodoApp() {
                                             // This is a state that will hold all the changes inside our input-field
     const [inputVal,setInputVal] = useState('')

     const [todos, setTodos] = useState([])    // Creating a state for our todos so we can put all todo-obj inside the array 

  useEffect (() => {
       if(localStorage.getItem('todos'))
     setTodos(JSON.parse(localStorage.getItem('todos')))
  }, [])

  useEffect (() => {
     localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
     
     
     const handleChange = (e) => {           // Handle the change on the inputField inside the 'AddListItem-component'
          setInputVal(e.target.value)        // Saves all changes to te 'todos-state'
     }

     const addTodo = () =>{                  // Function to initialize the new todo-object
          return {
               id: uuidv4(), 
               title: inputVal,
               isComplete: false
          }
     }

     const handleOnSubmit = (e) => {
          e.preventDefault()                                     // Prevent browser from reloading
          if(inputVal !== '' ){                                  // Condition - If InputVal is not empty, do this.
               setTodos([...todos, addTodo()])                   // Condition - If InputVal is not empty, do this.
               e.target[0].value = ''                            // Clean the input field
               setInputVal('')                                   // Reset the 'todos-state
               
          }
     }

     const handleDelete = (id) => {
          const deleteTodos = todos.filter(todo => todo.id !== id)
          setTodos(deleteTodos)
     }

     

     return (
          <>
               <h3>TodoList</h3>
               {/* This is where the todo will be created */}
               <AddListItem handleOnChange={handleChange} handleSubmit={handleOnSubmit} /> 
               {/*This will show us all the objects in a 'unordered list' */}
               <List mainTodos={todos} handleDelete={handleDelete} />    
          </>
     )
}

export default TodoApp
