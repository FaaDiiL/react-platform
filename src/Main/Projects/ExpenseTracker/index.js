import React, { useState } from 'react'
import NewExpenses from './NewExpenses/NewExpenses'
import Table from './Table/Table'
import PinnedExp from './PinnedExp/PinnedExp'
import styled from 'styled-components'

const StyledExpenses = styled.div`
font-family: Arial, Helvetica, sans-serif;
width: 100vw;
height: 80vh;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
background: linear-gradient(135deg, #3f87a6 30%, #ebf8e1 50%, #3f87a6 80%);
color: black;
`

function Index() {
  const [expenses, setExpenses] = useState([])
  const [expenseTitle, setExpenseTitle] = useState('Title')
  const [expenseAmount, setExpenseAmount] = useState('Amount')
  
  const handleChange = ((e) => {
   
  switch(e.target.name){

    case 'titleData':
      setExpenseTitle(e.target.value)
      break;

    case 'amountData':
      setExpenseAmount((e.target.value).replaceAll("-", ""))
      break;

    default:
    console.log('Some err')
      break;
  }
  
  })
  
  const handleIncome = (e) => {
    e.preventDefault()
    setExpenses([...expenses, {
      title: expenseTitle, 
      date: new Date().toISOString().slice(0, 10),
      time: new Date().toISOString().slice(11, 16),
      amount: expenseAmount,
      type: false,
      id: Math.random() * 10
    }])
  }

  const handleExpense  = (e) => {
    e.preventDefault()
    setExpenses([...expenses, {
      title: expenseTitle,
      date: new Date().toISOString().slice(0, 10),
      time: new Date().toISOString().slice(11, 16),
      amount: '-' +expenseAmount,
      type: true,
      id: Math.random() * 10
    }])
  }

const handleDelete = (delID) => {
  const deletedExpenses = expenses.filter(expense => expense.id !== delID)
  setExpenses(deletedExpenses)
}


  return (
    <>
    <StyledExpenses id='expensetracker'>
      
      <NewExpenses handleChange={handleChange} handleIncome={handleIncome} handleExpense={handleExpense}/>
      <Table expenses={expenses} handleDelete={handleDelete}/>
      <PinnedExp />
    </StyledExpenses>
    </>
  )
}


export default Index
