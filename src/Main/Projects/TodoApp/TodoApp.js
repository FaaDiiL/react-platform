import React from 'react'
import AddTodo from './AddTodo/AddTodo'
import ViewTodos from './ViewTodos/ViewTodos'
import styled from 'styled-components'


const StyledTodo = styled.div`
font-family: Arial, Helvetica, sans-serif;
width: 100vw;
height: 80vh;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
background: linear-gradient(-135deg, 
#3f87a6 20%,
#c0fdff 60%, 
#3f87a6 70%);
color: black;
`

function TodoApp() {
     
     return (
          <StyledTodo id='todoapp'>
              <h2>todo app</h2>
              <AddTodo />
              <ViewTodos />
          </StyledTodo>
     )
}

export default TodoApp
