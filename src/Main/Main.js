import React, { useState } from 'react'
import List from '../List/List'
import AddListItem from '../AddListItem/AddListItem'
const isFavorit = false

function Main() {

     //A
     const [todo, setTodo] = useState('');
     const [newTodo, setnewTodo] = useState('');
     const todoArr = []

     const getRemoteArr = () => {
          if (JSON.parse(localStorage.getItem('Todolist'))) {
               return JSON.parse(localStorage.getItem('Todolist'))
          }
     }


     const addTodoItemsProperties = {
          id: Math.random() * 10,
          name: todo,
          isFavorite: false,
          isChecked: false
     }

     const handleChange = (event) => {
          console.log(event.target.value)
          setTodo(event.target.value)
     }

     const handleClick = (event) => {
          event.preventDefault()

          console.log(getRemoteArr())

          // setnewTodo(addTodoItemsProperties)
          // todoArr.push(newTodo)
          // localStorage.setItem('Todolist', JSON.stringify(todoArr))

          // localStorage.setItem('Todolist', JSON.stringify(todoArr))


          const searchedStories = todoArr.filter(function (todo) {
               return todo.name.includes(todo);
          });

          return (
               <>
                    <AddListItem typeName={handleChange} onClick={handleClick} />
                    <List thisId={addTodoItemsProperties.id} thisName={addTodoItemsProperties.name} thisIsFavorite={addTodoItemsProperties.isFavorite} thisIsChecked={addTodoItemsProperties.isChecked} list={searchedStories} />
               </>
          )
     }

     export default Main;
