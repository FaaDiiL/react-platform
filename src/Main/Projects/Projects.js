import React from 'react'
import {Route, Switch, Link } from 'react-router-dom'
import ExpenseTracker from './ExpenseTracker'
import TodoApp from './TodoApp/TodoApp'
import styled from 'styled-components'


const StyledLanding = styled.div`
font-family: Arial, Helvetica, sans-serif;
width: 100vw;
height: 100vh;
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
align-items: center;
background: linear-gradient(135deg, #3f87a6 20%, #ebf8e1 50%, #3f87a6 80%);
color: #c0fdff;

&>div{
  position: relative;
  border:none;
  width:300px;
  min-width:300px;
  height:200px;
  text-align: center;
  background: rgba(000, 000, 000, 0.12);
  box-shadow: 20px 20px 50px rgba(211, 211, 211, 0.5);
  border-top: 1px solid  rgba(211, 211, 211, 0.5); 
  border-left: 1px solid  rgba(211, 211, 211, 0.5); 
  backdrop-filter: blur(10px);
  border-radius: 2%;
  overflow:hidden;
}

h3{
  font-size: 30px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
}



.innerdiv{
  width:100%;
  display:flex;
  height:0px;
  flex-direction: column;
  line-height:2;
  font-size: 1.5em;
  text-align: left;
  color:#e9ecef;
  background-color: lightblue;
  position:absolute;
  bottom: 0px;
  transition: all 0.3s ease;
  background:rgba(211, 211, 211, 0.1);
}
ul{
  font-size: 18px;
  list-style: none;
  text-transform: uppercase;
}

input[type='button']{
margin: 0 auto;
font-size: 1em;
display:none;
text-transform: uppercase;
border: 1px solid white;
background: transparent;
border-radius: 10px;
color:white;
padding: 5px 10px;
}

&>div:hover  input[type='button']{
  display:block;
}

&>div:hover .innerdiv{
  /* display:block; */
  height: 100%; 
}

&>div:hover h3{
  display:none;
}

`

function Projects() {
  return (
<>
      {/** TODO Set a switch with routes on your projects. */}
      <h1>Projects</h1>
      <StyledLanding>
        <div>
          <h3>todo app</h3>
          
          <div  className="innerdiv">
            <ul>
              <li>Create multiple todos</li>
              <li>Add to favourites</li>
              <li>Minimalistic design</li>
            </ul>
            <a href="#todoapp">TodoApp</a>
              {/* <input  type="button" value="view" on /> */}
          </div>
         
        </div>

        <div>
          <h3>Expense Tracker</h3>
          <div  className="innerdiv">
            <ul>
              <li>Create multiple todos</li>
              <li>Add to favourites</li>
              <li>Minimalistic design</li>
            </ul>
            <a href="#expensetracker">Expensetracker</a>
          </div>

        </div>
        
      </StyledLanding>
      
      <TodoApp />
      <ExpenseTracker />
      </>
  );
}

//kommentar

export default Projects
