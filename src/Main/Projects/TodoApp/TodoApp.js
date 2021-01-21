import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import AddListItem from './AddListItem/AddListItem'
import List from './List/List'

function TodoApp() {
     
     const [inputVal,setInputVal] = useState('InputVal')
     const [liVal,setLiVal] = useState({})
     const [todos, setTodos] = useState([
          {
               id: 1, 
               title: 'Todo number 1',
               isComplete: false

          },
     ])

     const handleChange = (e) => {
          setInputVal(e.target.value)
          setLiVal(
               {
                    id: uuidv4(), 
                    title: e.target.value,
                    isComplete: false
               }
          )
     }

     const handleOnSubmit = () => {
          // setLiVal(
          //      {
          //           id: uuidv4(), 
          //           title: inputVal,
          //           isComplete: false
          //      }
          // )
          setTodos([...todos, liVal])
          console.log(todos)

     }

     return (
          <>
               <h3>TodoList</h3>
               <AddListItem handleOnChange={handleChange} handleSubmit={handleOnSubmit} />
               <List mainSetLi={todos} />
          </>
     )
}

export default TodoApp
