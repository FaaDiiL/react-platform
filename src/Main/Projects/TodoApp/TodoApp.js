import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

// Generating new id whenever you use 'uuidv4()'

import AddListItem from './AddListItem/AddListItem'
import List from './List/List'

function TodoApp() {

     
     
     const [inputVal,setInputVal] = useState('InputVal')
    
     const [todos, setTodos] = useState([
          {
               id: 1, 
               title: 'Todo number 1',
               isComplete: false
          },
     ])
     
     const handleChange = (e) => {           // Handle the change on the inputField inside the 'AddListItem-component'
          setInputVal(e.target.value)        // Saves all changes to te 'todos-state'
     }

  

     const saveTodos = () => {

         return {
               id: uuidv4(), 
               title: inputVal,
               isComplete: false
          
               }
}

const handleOnSubmit = (e) => {
     e.preventDefault();
     
     if(e.target[0].value !== ''){
          setTodos([...todos, saveTodos()])
     }
     e.target[0].value = ''
     
     
}

const handleDelete = (id) => {
     const deleteTodos = todos.filter(todo => todo.id !== id)
     setTodos(deleteTodos)
}

     return (
          <>
               <h3>TodoList</h3>
               <AddListItem handleOnChange={handleChange} handleSubmit={handleOnSubmit} />
               <List mainSetLi={todos} handleDelete={handleDelete} />
          </>
     )
}

export default TodoApp
