import React, { useState } from 'react'

import NewExpenses from './NewExpenses/NewExpenses'
import Table from './Table/Table'

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
      type: false
    }])
  }

  const handleExpense  = (e) => {
    e.preventDefault()
    setExpenses([...expenses, {
      title: expenseTitle,
      date: new Date().toISOString().slice(0, 10),
      time: new Date().toISOString().slice(11, 16),
      amount: '-' +expenseAmount,
      type: true
    }])
  }



  return (
    <div>
      <NewExpenses handleChange={handleChange} handleIncome={handleIncome} handleExpense={handleExpense}/>
      <Table expenses={expenses}/>
      
    </div>
  )
}


export default Index
